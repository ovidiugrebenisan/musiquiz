import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  whichYear,
  type WhichYear,
} from "~/utils/quiz_artist_functions";
import { Redis } from "@upstash/redis";

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
    const quiz = {};
    const selections = ["whichYear"];
    let question_answers 
    if (ctx.auth.userId) {
      const quiz_exists = (await redis.json.get(
        ctx.auth.userId,
      )) as WhichYear | null;

      if (!quiz_exists) {
        for (const selection of selections) {
          if (selection === "whichYear") {
            question_answers = await whichYear(input);
            Object.assign(quiz, question_answers);
          }
        }
        const push_quiz = await redis.json.set(ctx.auth.userId, "$", quiz);
        await redis.expire(ctx.auth.userId, 60)
        if (push_quiz) {         
          return question_answers;
        }
      } else {
        return quiz_exists;
      }
    }
  }),
});
