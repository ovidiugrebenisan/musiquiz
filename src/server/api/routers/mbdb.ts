import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const getArtistAlbum = createTRPCRouter({
  getArtistAlbum: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.artist.findFirst({
      where: {
        name: input,
      },
    });
  }),
},
);
