import { prisma } from "~/server/db";

export async function getArtistStudioAlbums(artistID: number) {
  const artistAlbums = await prisma.release_group.findMany({
    where: {
      artist_credit: artistID,
      type: 1,
    },
    select: {
      id: true,
      name: true,
    },
  });
  return artistAlbums;
}

export async function getStudioAlbumsNoSec(albums: number[]) {
  const filteredAlbums = (
    await Promise.all(
      albums.map(async (album) => {
        const isNotStudio =
          await prisma.release_group_secondary_type_join.findFirst({
            where: {
              release_group: album,
            },
          });
        return isNotStudio ? null : album;
      }),
    )
  ).filter((album): album is number => album !== null);

  return filteredAlbums;
}
