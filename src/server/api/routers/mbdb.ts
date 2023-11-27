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
  studioAlbumCount,
} from "~/server/lib/ArtistQuiz/functions";
import {
  checkArtistQuizAnswer,
  checkUserExists,
  createUser,
  deleteArtistQuiz,
  getArtistQuiz,
  getArtistQuizzescount,
  getNextArtistQuizID,
  pushArtistQuiz,
  setArtistQuizAsSendable,
} from "~/server/lib/ArtistQuiz/data";

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
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        if (ctx.auth.userId) {
          const QuizTypes = [albumSong, artistAlbum, artistYear, albumYear, studioAlbumCount];
          const userID = ctx.auth.userId;
          const artistID = +input;

          const user_exists = await checkUserExists(userID);
          if (!user_exists) {
            await createUser(userID);
          }

          const has_quizzes = await getArtistQuizzescount(userID);
          if (has_quizzes > 0) {
            return false;
          }

          for (const quizType of QuizTypes) {
            const quiz = await quizType(artistID);
            if (quiz === null) {
              continue
            }
            await pushArtistQuiz(userID, quiz);
            
          }
          const quizID = await getNextArtistQuizID(userID)
          await setArtistQuizAsSendable(quizID!);

          return true;
        }
      } catch (error) {
        console.error(error);
        throw new Error("An error occured while constructing the quiz.");
      }
    }),
    getArtistQuiz: publicProcedure
    .input(z.number())
    .query(async ({ctx}) => {
      return await getArtistQuiz(ctx.auth.userId!)
    }),
    getArtistQuizAnswer: publicProcedure
    .input(z.string())
    .query(async ({ctx, input}) => {
      const answer = await checkArtistQuizAnswer(ctx.auth.userId!, input)
      await deleteArtistQuiz(ctx.auth.userId!)
      const quizID = await getNextArtistQuizID(ctx.auth.userId!)
      if (quizID) {
        await setArtistQuizAsSendable(quizID)
      }     

      return answer
    })

});
