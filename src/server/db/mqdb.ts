import { PrismaClient } from "./../../../prisma/@mqdb";
import { env } from "~/env.mjs";

const globalForMQDB = globalThis as unknown as {
  mqdbprisma: PrismaClient | undefined;
};

export const mqdb =
  globalForMQDB.mqdbprisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForMQDB.mqdbprisma = mqdb;
