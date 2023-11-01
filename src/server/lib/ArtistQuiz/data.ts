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
        const albumName = await getAlbumName(album)
        if (albumName.type === 'success') {
          return albumName.value;
        }
        return null;
      })
    )
  ).filter((album): album is string => album !== null);

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


export async function getReleaseId(releaseGroup: number): Promise<Result<number>> {
  const releaseID = await prisma.release.findFirst({
    where: {
      release_group: releaseGroup
    },
    select: {
      id: true
    }
  })

  if (!releaseID) {
    return {type:"failure", error: 'Release group has no releases'}
  }

  return {type:'success', value: releaseID.id}
}


export async function getMediumId(release: number): Promise<Result<number>> {
  const medium = await prisma.medium.findFirst({
    where: {
      release: release
    },
    select: {
      id: true
    }
  })

  if (!medium) {
    return {type: 'failure', error: 'Release does not have a medium'}
  }

  return {type: 'success', value: medium.id}
}

export async function getTrackIDsByMedium(mediumID: number): Promise<number[]> {
  const tracks = await prisma.track.findMany({
    where: {
      medium: mediumID
    },
    select: {
      id: true
    }
  })

  const trackIDs = tracks.map(track => track.id)

  return trackIDs
}

export async function getReleaseIDS(release_groups: number[]): Promise<Result<number[]>> {
  const releaseIDS = (await Promise.all(
    release_groups.map(async (releaseGroup) => {
      const release_id = await getReleaseId(releaseGroup)
      if (release_id.type === 'success') {
        return release_id.value
      }
      return null
    })
  )).filter((id): id is number => id !== null)

  if (releaseIDS.length === 0) {
    return {type: 'failure', error: 'Not releases found'}
  }

  return {type: 'success', value: releaseIDS}

}

export async function getMediumsbyReleaseIDs(releases: number[]): Promise<Result<number[]>> {
  const mediums = (await Promise.all(
    releases.map(async (release) => {
      const medium = await getMediumId(release)
      if (medium.type === 'success') {
        return medium.value
      }
      return null
    })
  )).filter((medium): medium is number => medium !== null)

  if (mediums.length === 0) {
    return {type:'failure', error: 'No mediums found'}
  }

  return {type:'success', value: mediums}
}

export async function getTracksbyMediumIDS(mediums: number[]): Promise<number[]> {
  const tracksIDS = await Promise.all(
    mediums.map(async (medium) => {
      const tracks = await getTrackIDsByMedium(medium)
      return tracks
    })
  )
  const flattenedArray  =  tracksIDS.flat()
  return flattenedArray
}

export async function getTrackNamebyID(track: number): Promise<Result<string>> {
  const trackName = await prisma.track.findFirst({
    where: {
      id: track
    },
    select: {
      name: true
    }
  })

  if (!trackName) {
    return {type: 'failure', error: 'No name found for track'}
  }
  return {type: 'success', value: trackName.name}
}

export async function getTrackNamesbyIDS(tracks: number[]): Promise<Result<string[]>> {
  const trackNames =(await Promise.all(
    tracks.map(async (track) => {
      const trackName = await getTrackNamebyID(track)
      if (trackName.type === 'success') {
        return trackName.value
      }
      return null
    })
  )).filter((track): track is string => track !== null)

  if (trackNames.length === 0) {
    return {type:'failure', error: 'No track names found'}
  }
  return {type: 'success', value: trackNames}
}