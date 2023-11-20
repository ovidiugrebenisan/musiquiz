import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import * as countries from "i18n-iso-countries";
import {
  getArtistBackgroundImageURL,
  getArtistLogo,
} from "~/server/lib/SearchResults/functions";
import {
  artistAlbum,
  albumSong,
  albumYear,
  artistYear,
} from "~/server/lib/ArtistQuiz/functions";
import {
  checkUserExists,
  createUser,
  getQuizTypes,
  pushArtistQuizAnswer,
  pushQuizTypes,

} from "~/server/lib/ArtistQuiz/data";
import { randomNumber } from "~/utils/helper_functions";
import { v4 as uuidv4 } from "uuid";

export const getArtistData = createTRPCRouter({
  getAllArtists: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artist = await ctx.mbdb.artist.findMany({
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

  getArtistLogo: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artistID = Number(input);
      const artistGID = await ctx.mbdb.artist.findFirst({
        where: {
          id: artistID,
        },
        select: {
          gid: true,
        },
      });
      if (artistGID?.gid) {
        const artistLogo = await getArtistLogo(artistGID.gid);
        if (artistLogo) {
          return artistLogo;
        }
      }
      return null;
    }),

  getSearchResultData: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artists = await ctx.mbdb.artist.findMany({
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
          const artistData = await ctx.mbdb.artist.findFirst({
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
            const artistCountry = await ctx.mbdb.area.findFirst({
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
      try {
        if (ctx.auth.userId) {
          const QuizTypes = [albumSong, artistAlbum, artistYear, albumYear];
          const userID = ctx.auth.userId;
          const artistID = +input.artistID;

          const user_exists = await checkUserExists(userID);
          if (!user_exists) {
            await createUser(userID);
          }

          const quiz_active = await getQuizTypes(userID);
          if (quiz_active.length === 0) {
            const random_quiz_index = randomNumber(QuizTypes.length);
            const random_quiz = QuizTypes[random_quiz_index]!;
            const quiz = await random_quiz(artistID)
            const uuid = uuidv4();
            await pushArtistQuizAnswer(userID, quiz.correct_answer, uuid)
            quiz_active.push(random_quiz.name)
            await pushQuizTypes(userID, quiz_active)
            return {
              id: uuid,
              question: quiz.question,
              answers: quiz.answers
            }
          }
          if (quiz_active.length === QuizTypes.length) {
            await pushQuizTypes(userID, [])
            return null
          }
          if (quiz_active.length > 0) {
            const filteredQuizzes = QuizTypes.filter(func => !quiz_active.includes(func.name))
            const random_quiz_index = randomNumber(filteredQuizzes.length)
            const random_quiz = filteredQuizzes[random_quiz_index]!
            const quiz = await random_quiz(artistID)
            const uuid = uuidv4();
            await pushArtistQuizAnswer(userID, quiz.correct_answer, uuid)
            quiz_active.push(random_quiz.name)
            await pushQuizTypes(userID, quiz_active)
            return {
              id: uuid,
              question: quiz.question,
              answers: quiz.answers
            }

          }
        }
      } catch (error) {
        console.error(error);
        throw new Error("An error occured while constructing the quiz.");
      }
    }),
});
