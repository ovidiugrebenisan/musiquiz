import { createTRPCRouter } from "~/server/api/trpc";
import { getArtistAlbum } from "./routers/mbdb";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mbdb: getArtistAlbum,
});

// export type definition of API
export type AppRouter = typeof appRouter;
