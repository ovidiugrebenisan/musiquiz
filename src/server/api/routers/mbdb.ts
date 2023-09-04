import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const getArtistData = createTRPCRouter({
  getArtistData: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artistData = await ctx.prisma.artist.findFirst({
        where: {
          name: input,
        },
        select: {
          begin_date_year: true,
        },
      });

      if (artistData?.begin_date_year) {
        return artistData.begin_date_year;
      }

      return null;
    }),

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
          const releaseId = release.id

          try {
            const coverUrlResponse = await ctx.prisma.cover_art.findFirst({
              where: {
                release: releaseId,
              }
            });
            const coverId = coverUrlResponse?.id;
            if (coverUrlResponse && coverId) {
            coverArt = "http://coverartarchive.org/release/" + releaseGid + "/" + coverId + "jpg"
            break
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
        distinct: ['name'],
        take: 5
      });
      if (artist) {
        return artist;
      }
      return null;
    }),
});
