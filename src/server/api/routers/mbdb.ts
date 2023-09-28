import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  type WhichAlbum,
  type WhichYear,
  whichAlbum,
  whichYear,
} from "~/utils/quiz_artist_functions";
import { Redis } from "@upstash/redis";

type Quiz = {
  whichYear?: WhichYear;
  whichAlbum?: WhichAlbum
}

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
  constructArtistQuiz: publicProcedure
  .input(z.string())
  .query(async ({ ctx, input }) => {
    const quiz: Quiz = {};
    const selections = ["whichYear", "whichAlbum"];

    if (ctx.auth.userId) {
      const quiz_exists = (await redis.json.get(
        ctx.auth.userId,
      )) as Quiz

      if (!quiz_exists) {
        for (const selection of selections) {
          if (selection === "whichYear") {
            quiz.whichYear = await whichYear(input)
          } else if (selection === "whichAlbum") {
            quiz.whichAlbum = await whichAlbum(input)
          }
        }
        const push_quiz = await redis.json.set(ctx.auth.userId, "$", quiz);
        await redis.expire(ctx.auth.userId, 10)
        if (push_quiz) {         
          return quiz;
        }
      } else {
        return quiz_exists;
      }
    }
  }),
});
