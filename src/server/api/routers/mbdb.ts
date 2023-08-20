import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const getArtistData = createTRPCRouter({
  getAristData: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const artistData = await ctx.prisma.artist.findFirst({
        where: {
          name: input,
        },
        select: {
          id: true,
          begin_date_year: true,
        }
      });

      if (artistData?.begin_date_year && artistData.id) {
        return {
          id: artistData.id,
          begin_date_year: artistData.begin_date_year
        }
      }

      return null;
    }),

  getArtistReleases: publicProcedure
    .input(z.number())
    .query( async ({ctx, input}) => {
      const artistReleases = await ctx.prisma.release.findMany({
        where: {
          artist_credit: input
        }
      });

      if (artistReleases) {
        return artistReleases
      }
      return null
    })
});
