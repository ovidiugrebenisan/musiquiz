import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  type StringQuestion,
  type NumberQuestion,
  whichYearArtistStarted,
} from "~/utils/quiz_artist_functions";
import { Redis } from "@upstash/redis";
import { shuffleArray } from "~/utils/helper_functions";
import * as countries from "i18n-iso-countries";
import { getArtistBackgroundImageURL } from "~/utils/search_result_functions";
import { artist_begin_date_year } from "~/utils/ArtistQuiz/validators/artist_begin_date_year";

type QuizItem = StringQuestion | NumberQuestion;

type Quiz = QuizItem[];

const redis = Redis.fromEnv();



export const getArtistData = createTRPCRouter({
  getAllArtists: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artist = await ctx.prisma.artist.findMany({
        where: {
          name: {
            startsWith: input,
          },
        },
        select: {
          name: true,
        },
        distinct: ["name"],
        take: 5,
      });
      if (artist) {
        return artist;
      }
      return null;
    }),

  getSearchResultData: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artists = await ctx.prisma.artist.findMany({
        where: {
          name: input,
        },
        select: {
          id: true,
        },
      });
      const response = [];

      if (artists) {
        for (const artist of artists) {
          const artistData = await ctx.prisma.artist.findFirst({
            where: {
              id: artist.id,
            },
            select: {
              area: true,
              comment: true,
              gid: true,
            },
          });

          let countryCode: string | undefined = "";
          let comment: string | undefined = "";
          let imageURL: string | null = "";
          let country: string | null = "";

          if (artistData?.area) {
            const artistCountry = await ctx.prisma.area.findFirst({
              where: {
                id: artistData.area,
              },
              select: {
                name: true,
              },
            });
            if (artistCountry) {
              country = artistCountry.name;
              countryCode = countries.getAlpha2Code(artistCountry.name, "en");
            }
          }
          if (artistData?.comment) {
            comment = artistData.comment;
          }
          if (artistData?.gid) {
            imageURL = await getArtistBackgroundImageURL(artistData.gid);
          }
          const searchResult = {
            artistID: artist.id,
            imageURL,
            comment,
            countryCode,
            country,
          };
          response.push(searchResult);
        }
      }
      return response;
    }),
  constructArtistQuiz: publicProcedure
    .input(
      z.object({
        artistID: z.string(),
        artistName: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const quiz: Quiz = [];

      try {
        if (ctx.auth.userId) {
          const quiz_exists = (await redis.json.get(ctx.auth.userId)) as Quiz;
          const artistID = Number(input.artistID);
          const artistName = input.artistName;
          if (!quiz_exists) {
            const beginDateYear = await artist_begin_date_year(artistID)
            if (beginDateYear !== null) {
              const newQuizItem =  whichYearArtistStarted(beginDateYear, artistName)
              quiz.push(newQuizItem)
            }
            shuffleArray(quiz);
            const push_quiz = await redis.json.set(
              ctx.auth.userId,
              "$",
              JSON.stringify(quiz),
            );
            await redis.expire(ctx.auth.userId, 5);
            if (push_quiz) {
              return quiz;
            } else {
              throw new Error("Failed to save quiz to Redis.");
            }
          } else {
            return quiz_exists;
          }
        }
      } catch (error) {
        console.error(error);
        throw new Error("An error occured while constructing the quiz.");
      }
    }),
});
