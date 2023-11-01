import { prisma } from "~/server/db";
import type {  Result } from "./definitions";

export async function getArtistStudioAlbums(
  artistID: number,
): Promise<number[]> {
  const artistAlbums = await prisma.release_group.findMany({
    where: {
      artist_credit: artistID,
      type: 1,
    },
    select: {
      id: true,
    },
  });
  const response = artistAlbums.map((album) => album.id);
  return response;
}

export async function getStudioAlbumsNoSec(
  albums: number[],
): Promise<Result<number[]>> {
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

  if (filteredAlbums.length === 0) {
    return { type: "failure", error: "Could not find any studio albums" };
  }

  return { type: "success", value: filteredAlbums };
}

export async function getArtistStartYear(
  artistID: number,
): Promise<Result<number>> {
  const startYear = await prisma.artist.findFirst({
    where: {
      id: artistID,
    },
    select: {
      begin_date_year: true,
    },
  });
  if (!startYear || !startYear.begin_date_year) {
    return { type: "failure", error: "Artist does not have a start year" };
  }
  return { type: "success", value: startYear.begin_date_year };
}

export async function getAlbumReleaseYear(
  album: number,
): Promise<Result<number>> {
  const albumReleaseYear = await prisma.release_group_meta.findFirst({
    where: {
      id: album,
    },
    select: {
      first_release_date_year: true,
    },
  });

  if (albumReleaseYear && albumReleaseYear.first_release_date_year) {
    return { type: "success", value: albumReleaseYear.first_release_date_year };
  }
  return {
    type: "failure",
    error: "Chosen album does not have a release year set",
  };
}

export async function getArtistGenre(
  artistID: number,
): Promise<Result<number>> {
  const artistGenre = await prisma.artist_tag.findFirst({
    where: {
      artist: artistID,
    },
    select: {
      tag: true,
    },
    orderBy: {
      count: "desc",
    },
  });

  if (!artistGenre) {
    return { type: "failure", error: "Artist has no genres set" };
  }
  return { type: "success", value: artistGenre.tag };
}

export async function getAlbumsOfGenre(
  genre: number,
): Promise<Result<number[]>> {
  const albums = await prisma.release_group_tag.findMany({
    where: {
      tag: genre,
    },
    select: {
      release_group: true,
    },
  });
  const filteredAlbums = albums.map((album) => album.release_group);
  if (filteredAlbums.length === 0) {
    return { type: "failure", error: "No albums of specified genre found" };
  }

  return { type: "success", value: filteredAlbums };
}


export async function getAlbumsbyYear(year: number): Promise<Result<number[]>> {
  const albums = await prisma.release_group_meta.findMany({
    where: {
      first_release_date_year: year
    },
    select: {
      id: true
    }
  })
  const albumArray = albums.map(album => album.id)
  if (albumArray.length === 0) {
    return {type: 'failure', error: 'No albums launched in that year found'}
  }

  return {type: 'success', value: albumArray}
}

export async function getAlbumsNames(albums: number[]): Promise<Result<string[]>> {
  const albumNames = (
    await Promise.all(
      albums.map(async (album) => {
        const albumName = await prisma.release_group.findFirst({
          where: {
            id: album
          },
          select: {
            name: true
          }
        });
        if (albumName !== null) {
          return albumName.name;
        }
        return undefined;
      })
    )
  ).filter((album): album is string => album !== undefined);

  if (albumNames.length === 0) {
    return { type: "failure", error: "No album names found" };
  }

  return { type: "success", value: albumNames };
}

export async function getAlbumName(album: number): Promise<Result<string>> {
  const albumName = await prisma.release_group.findFirst({
    where:{
      id: album
    },
    select: {
      name: true
    }
  })
  if (!albumName) {
    return {type:'failure', error: 'Artist has no name'}
  }
  return {type: 'success', value: albumName.name}
}
