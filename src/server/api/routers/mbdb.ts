import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import * as countries from "i18n-iso-countries";
import {
  getArtistBackgroundImageURL,
  getArtistLogo,
} from "~/server/lib/SearchResults/functions";
import {
  whichAlbumBelongsArtist,
  whichAlbumSongBelongs,
  whichYearAlbum,
  whichYearArtistStarted,
} from "~/server/lib/ArtistQuiz/functions";
import {
  checkLastQuizFlag,
  checkUserExists,
  countQuizzes,
  createUser,
  deleteQuiz,
  getUserquiz,
  pushArtistQuiz,
  setLastQuizFlag,
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
    .input(
      z.object({
        artistID: z.string(),
        artistName: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        if (ctx.auth.userId) {
          console.log(ctx.auth.userId)
          const user_exists = await checkUserExists(ctx.auth.userId);
          console.log(user_exists)
          if (!user_exists) {
            await createUser(ctx.auth.userId);
          }
          const check_lastq_flag = await checkLastQuizFlag(ctx.auth.userId);
          if (check_lastq_flag) {
            await setLastQuizFlag(ctx.auth.userId, false);
            return null;
          }
          const quiz_count = await countQuizzes(ctx.auth.userId);
          if (quiz_count > 1) {
            const user_quiz = await getUserquiz(ctx.auth.userId);
            await deleteQuiz(user_quiz.id);

            return user_quiz;
          }
          if (quiz_count === 1) {
            const user_quiz = await getUserquiz(ctx.auth.userId);
            await deleteQuiz(user_quiz.id);
            await setLastQuizFlag(ctx.auth.userId, true);
            return user_quiz;
          }

          const quizzes_pushed = 0;
          const artistID = Number(input.artistID);
          const artistName = input.artistName;

          const beginDateYear = await whichYearArtistStarted(
            artistID,
            artistName,
          );

          const beginDateYearpushed = await pushArtistQuiz(
            ctx.auth.userId,
            beginDateYear,
          );
          if (beginDateYearpushed) {
            quizzes_pushed + 1;
          }

          const whichAlbumBelongsToArtist = await whichAlbumBelongsArtist(
            artistID,
            artistName,
          );

          const whichAlbumBelongsArtistpushed = await pushArtistQuiz(
            ctx.auth.userId,
            whichAlbumBelongsToArtist,
          );

          if (whichAlbumBelongsArtistpushed) {
            quizzes_pushed + 1;
          }

          const whichSongBelongstoAlbum = await whichAlbumSongBelongs(artistID);
          const whichSongBelongstoAlbumpushed = await pushArtistQuiz(
            ctx.auth.userId,
            whichSongBelongstoAlbum,
          );
          if (whichSongBelongstoAlbumpushed) {
            quizzes_pushed + 1;
          }

          const inWhichYearWasAlbumReleased = await whichYearAlbum(artistID);
          const inWhichYearWasAlbumReleasedpushed = await pushArtistQuiz(
            ctx.auth.userId,
            inWhichYearWasAlbumReleased,
          );
          if (inWhichYearWasAlbumReleasedpushed) {
            quizzes_pushed + 1;
          }
          const user_quiz = await getUserquiz(ctx.auth.userId);
          await deleteQuiz(user_quiz.id);

            return user_quiz;
          
        }
      } catch (error) {
        console.error(error);
        throw new Error("An error occured while constructing the quiz.");
      }
    }),
});
