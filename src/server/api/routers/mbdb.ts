import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { shuffle, getRandomNumber } from "~/utils/functions";

export const getArtistData = createTRPCRouter({
  getArtistRandomCoverArt: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artistData = await ctx.prisma.artist.findFirst({
        where: {
          name: input,
        },
      });

      if (artistData && artistData.id) {
        const artistReleases = await ctx.prisma.release.findMany({
          where: {
            artist_credit: artistData.id,
          },
        });
        const shuffledReleases = [...artistReleases].sort(
          () => Math.random() - 0.5,
        );
        let coverArt: string | null = null;

        for (const release of shuffledReleases) {
          const releaseGid = release.gid;
          const releaseId = release.id;

          try {
            const coverUrlResponse = await ctx.prisma.cover_art.findFirst({
              where: {
                release: releaseId,
              },
            });
            const coverId = coverUrlResponse?.id;
            if (coverUrlResponse && coverId) {
              coverArt =
                "http://coverartarchive.org/release/" +
                releaseGid +
                "/" +
                coverId +
                "jpg";
              break;
            }
          } catch (error) {
            console.warn(
              "Failed to fetch cover art for release ID:",
              releaseId,
            );
            // Continue to the next iteration
          }
        }

        return coverArt;
      }
    }),
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
  pushArtist: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      if (ctx.auth.userId) {
        const user_exists = await ctx.prisma.user_metadata.findUnique({
          where: {
            user_id: ctx.auth.userId,
          },
        });
        if (!user_exists) {
          await ctx.prisma.user_metadata.create({
            data: {
              user_id: ctx.auth.userId,
            },
          });
          await ctx.prisma.user_metadata.update({
            where: {
              user_id: ctx.auth.userId,
            },
            data: {
              current_artist: input,
            },
          });
        } else {
          await ctx.prisma.user_metadata.update({
            where: {
              user_id: ctx.auth.userId,
            },
            data: {
              current_artist: input,
            },
          });
        }
      }
    }),
  getChosenArtist: publicProcedure.query(async ({ ctx }) => {
    if (ctx.auth.userId) {
      const chosenArtist = await ctx.prisma.user_metadata.findUnique({
        where: {
          user_id: ctx.auth.userId,
        },
        select: {
          current_artist: true,
        },
      });
      if (chosenArtist) {
        return chosenArtist.current_artist;
      }
    }
    return "";
  }),

  getAnswers: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        const albumYearData = await ctx.prisma.artist.findFirst({
          where: {
            name: input,
          },
          select: {
            begin_date_year: true,
          },
        });

        if (
          albumYearData &&
          typeof albumYearData.begin_date_year === "number"
        ) {
          const albumYear = albumYearData.begin_date_year;
          const higher_year = getRandomNumber(
            albumYear - 1,
            albumYear + 1,
            albumYear,
          );
          const lower_year = getRandomNumber(
            albumYear - 2,
            albumYear - 7,
            albumYear,
          );
          const another_year = getRandomNumber(
            albumYear + 2,
            albumYear + 7,
            albumYear,
          );
          const answers: number[] = [
            albumYear,
            higher_year,
            lower_year,
            another_year,
          ];
          const shuffledArray = shuffle(answers);
          return shuffledArray;
        } else {
          return []; // Return empty array if no data or begin_date_year isn't a number
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
        throw new Error("Failed to fetch artist data.");
      }
    }),
});
