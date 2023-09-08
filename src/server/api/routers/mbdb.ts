import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { whichYear, getChosenArtist, type WhichYear } from "~/utils/functions";
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
  constructArtistQuiz: publicProcedure.query(async ({ ctx }) => {
    const quiz = {};
    const selections = ["whichYear"];
    if (ctx.auth.userId) {
      const artist = await getChosenArtist(ctx.auth.userId);
      const quiz_exists = await redis.json.get(ctx.auth.userId) as WhichYear | null;
      if (!quiz_exists && artist) {
        for (const selection of selections) {
          if (selection === "whichYear") {
            const question_answers = await whichYear(artist);
            Object.assign(quiz, question_answers);
          }
        }
        const push_quiz = await redis.json.set(ctx.auth.userId, "$", quiz);
        if (push_quiz) {
          return;
        }
      } else {
        return quiz_exists;
      }
    }
  }),
});
