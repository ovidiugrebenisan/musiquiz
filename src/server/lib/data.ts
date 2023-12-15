import { handleDatabaseQuery } from "./functions";
import { mbdb } from "../db/mbdb";

export async function getArtistGID(artistID: number): Promise<string> {
    return handleDatabaseQuery(async () => {
        const artistGID = await mbdb.artist.findFirst({
            where: {
              id: artistID,
            },
            select: {
              gid: true,
            },
          });
          return artistGID!.gid
    }, "Could not fetch MBID")
}