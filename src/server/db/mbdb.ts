import { PrismaClient } from "../../../prisma/@mbdb"
import { env } from "~/env.mjs";

const globalForMBDB = globalThis as unknown as {
  mbdbprisma: PrismaClient | undefined;
};

export const mbdb =
  globalForMBDB.mbdbprisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForMBDB.mbdbprisma = mbdb;
