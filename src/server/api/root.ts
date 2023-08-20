import { createTRPCRouter } from "~/server/api/trpc";
import { getArtistData } from "./routers/mbdb";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mbdb: getArtistData,
});

// export type definition of API
export type AppRouter = typeof appRouter;
