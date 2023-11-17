import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import * as countries from "i18n-iso-countries";
import {
  getArtistBackgroundImageURL,
  getArtistLogo,
} from "~/server/lib/SearchResults/functions";
import {
  // artistAlbum,
  // albumSong,
  // albumYear,
  artistYear,
} from "~/server/lib/ArtistQuiz/functions";
import {
  checkActiveQuiz,
  checkUserExists,
  createUser,
  getQuizTypes,
  getUserquiz,
  pushArtistQuiz,
  pushQuizTypes,
  setActiveQuiz,
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
          const QuizTypes = ["artistYear"];
          const userID = ctx.auth.userId;
          const artistID = +input.artistID;
          const artistName = input.artistName;

          const user_exists = await checkUserExists(userID);
          if (!user_exists) {
            await createUser(userID);
          }

          const quiz_active = await checkActiveQuiz(userID);

          const quiz_array = await getQuizTypes(userID);
          if (!quiz_active && quiz_array.length === 0) {
            await pushQuizTypes(userID, QuizTypes);
            const new_quiz_array = await getQuizTypes(userID);
            const quiz_type = new_quiz_array.shift();
            await pushQuizTypes(userID, new_quiz_array);
            if (quiz_type === "artistYear") {
              const quiz = await artistYear(artistID, artistName);
              await pushArtistQuiz(userID, quiz);
              await setActiveQuiz(userID, true);
              return await getUserquiz(userID);
            }
          }
          if (quiz_active && quiz_array.length > 0) {
            const quiz_type = quiz_array.shift() as string;
            await pushQuizTypes(userID, quiz_array);
            if (quiz_type === "artistYear") {
              const quiz = await artistYear(artistID, artistName);
              await pushArtistQuiz(userID, quiz);
              return await getUserquiz(userID);
            }
          }
          if (quiz_array.length === 0 && quiz_active) {
            await setActiveQuiz(userID, false);
            return null;
          }
        }
      } catch (error) {
        console.error(error);
        throw new Error("An error occured while constructing the quiz.");
      }
    }),
});
