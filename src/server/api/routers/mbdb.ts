import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const getArtistData = createTRPCRouter({
  getAlbumStartYear: publicProcedure.input(z.string()).query( async ({ ctx, input }) => {
    const albumStartYear = await ctx.prisma.artist.findFirst({
      where: {
        name: input,
      },
    });

    if (albumStartYear?.begin_date_year) {
      return albumStartYear.begin_date_year
    }

    return null
  }),
},
);
