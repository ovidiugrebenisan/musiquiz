import { mbdb } from "~/server/db/mbdb";
import { mqdb } from "~/server/db/mqdb";
import type { ArtistQuizFrontend, ArtistQuizType } from "./definitions";

async function handleDatabaseQuery<T>(
  queryFunction: () => Promise<T>,
  errorMessage: string,
): Promise<T> {
  try {
    return await queryFunction();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${errorMessage}: ${error.message}`);
    } else {
      throw new Error(errorMessage);
    }
  }
}

export async function getArtistStudioAlbums(
  artistID: number,
): Promise<number[]> {
  return handleDatabaseQuery(async () => {
    const artistAlbums = await mbdb.release_group.findMany({
      where: { artist_credit: artistID, type: 1 },
      select: { id: true },
    });
    return artistAlbums.map((album) => album.id);
  }, `Failed to get studio albums for artist ${artistID}`);
}

export async function getStudioAlbumsNoSec(
  albums: number[],
): Promise<number[]> {
  return handleDatabaseQuery(async () => {
    const filteredAlbums = (
      await Promise.all(
        albums.map(async (album) => {
          const isNotStudio =
            await mbdb.release_group_secondary_type_join.findFirst({
              where: { release_group: album },
            });
          return isNotStudio ? null : album;
        }),
      )
    ).filter((album): album is number => album !== null);
    return filteredAlbums;
  }, `Failed to filter studio albums`);
}

export async function getArtistStartYear(artistID: number): Promise<number> {
  return handleDatabaseQuery(async () => {
    const startYear = await mbdb.artist.findFirst({
      where: { id: artistID },
      select: { begin_date_year: true },
    });
    if (!startYear || !startYear.begin_date_year) {
      throw new Error("Artist does not have a start year");
    }
    return startYear.begin_date_year;
  }, `Failed to get start year for artist ${artistID}`);
}

export async function getAlbumReleaseYear(album: number): Promise<number> {
  return handleDatabaseQuery(async () => {
    const albumReleaseYear = await mbdb.release_group_meta.findFirst({
      where: { id: album },
      select: { first_release_date_year: true },
    });
    if (!albumReleaseYear || !albumReleaseYear.first_release_date_year) {
      throw new Error("Chosen album does not have a release year set");
    }
    return albumReleaseYear.first_release_date_year;
  }, `Failed to get release year for album ${album}`);
}

export async function getArtistGenre(artistID: number): Promise<number> {
  return handleDatabaseQuery(async () => {
    const artistGenre = await mbdb.artist_tag.findFirst({
      where: { artist: artistID },
      select: { tag: true },
      orderBy: { count: "desc" },
    });
    if (!artistGenre) {
      throw new Error("Artist has no genres set");
    }
    return artistGenre.tag;
  }, `Failed to get genre for artist ${artistID}`);
}

export async function getAlbumsOfGenre(genre: number): Promise<number[]> {
  return handleDatabaseQuery(async () => {
    const albums = await mbdb.release_group_tag.findMany({
      where: { tag: genre },
      select: { release_group: true },
    });
    if (albums.length === 0) {
      throw new Error("No albums of specified genre found");
    }
    return albums.map((album) => album.release_group);
  }, `Failed to get albums of genre ${genre}`);
}

export async function getAlbumsbyYear(year: number): Promise<number[]> {
  return handleDatabaseQuery(async () => {
    const albums = await mbdb.release_group_meta.findMany({
      where: { first_release_date_year: year },
      select: { id: true },
    });
    if (albums.length === 0) {
      throw new Error("No albums launched in that year found");
    }
    return albums.map((album) => album.id);
  }, `Failed to get albums from year ${year}`);
}

export async function getAlbumsNames(albums: number[]): Promise<string[]> {
  return handleDatabaseQuery(async () => {
    const albumNames = await Promise.all(
      albums.map(async (album) => {
        const name = await getAlbumName(album);
        if (!name) throw new Error("One of the albums does not have a name");
        return name;
      }),
    );
    return albumNames;
  }, "Failed to get names for albums");
}

export async function getAlbumName(album: number): Promise<string> {
  return handleDatabaseQuery(async () => {
    const albumName = await mbdb.release_group.findFirst({
      where: { id: album },
      select: { name: true },
    });
    if (!albumName) {
      throw new Error("Album has no name");
    }
    return albumName.name;
  }, `Failed to get name for album ${album}`);
}

export async function getReleaseId(releaseGroup: number): Promise<number> {
  return handleDatabaseQuery(async () => {
    const releaseID = await mbdb.release.findFirst({
      where: { release_group: releaseGroup },
      select: { id: true },
    });
    if (!releaseID) {
      throw new Error("Release group has no releases");
    }
    return releaseID.id;
  }, `Failed to get release ID for release group ${releaseGroup}`);
}

export async function getMediumId(release: number): Promise<number> {
  return handleDatabaseQuery(async () => {
    const medium = await mbdb.medium.findFirst({
      where: { release: release },
      select: { id: true },
    });
    if (!medium) {
      throw new Error("Release does not have a medium");
    }
    return medium.id;
  }, `Failed to get medium ID for release ${release}`);
}

export async function getTrackIDsByMedium(mediumID: number): Promise<number[]> {
  return handleDatabaseQuery(async () => {
    const tracks = await mbdb.track.findMany({
      where: { medium: mediumID },
      select: { id: true },
    });
    return tracks.map((track) => track.id);
  }, `Failed to get track IDs for medium ${mediumID}`);
}

export async function getReleaseIDS(
  release_groups: number[],
): Promise<number[]> {
  return handleDatabaseQuery(async () => {
    const releaseIDS = await Promise.all(
      release_groups.map(async (releaseGroup) => {
        const release_id = await getReleaseId(releaseGroup);
        return release_id;
      }),
    );
    return releaseIDS;
  }, "Failed to get release IDs");
}

export async function getMediumsbyReleaseIDs(
  releases: number[],
): Promise<number[]> {
  return handleDatabaseQuery(async () => {
    const mediums = await Promise.all(
      releases.map(async (release) => {
        const medium = await getMediumId(release);
        return medium;
      }),
    );
    return mediums;
  }, "Failed to get mediums by release IDs");
}

export async function getTracksbyMediumIDS(
  mediums: number[],
): Promise<number[]> {
  return handleDatabaseQuery(async () => {
    const trackIDS = await Promise.all(
      mediums.map(async (medium) => {
        return await getTrackIDsByMedium(medium);
      }),
    );
    return trackIDS.flat();
  }, "Failed to get tracks by medium IDs");
}

export async function getTrackNamebyID(track: number): Promise<string> {
  return handleDatabaseQuery(async () => {
    const trackName = await mbdb.track.findFirst({
      where: { id: track },
      select: { name: true },
    });
    if (!trackName) {
      throw new Error("Track has no name");
    }
    return trackName.name;
  }, `Failed to get name for track ${track}`);
}

export async function getTrackNamesbyIDS(tracks: number[]): Promise<string[]> {
  return handleDatabaseQuery(async () => {
    const trackNames = await Promise.all(
      tracks.map(async (track) => {
        const name = await getTrackNamebyID(track);
        return name;
      }),
    );
    return trackNames;
  }, "Failed to get track names by IDs");
}

export async function pushArtistQuiz(
  userID: string,
  quiz: ArtistQuizType,
): Promise<void> {
  return handleDatabaseQuery(async () => {
    await mqdb.artistQuiz.create({
      data: {
        correct_answer: quiz.correct_answer,
        userId: userID,
        question: quiz.question,
        answers: quiz.answers,
      },
    });
  }, "Could not psuh answer to quiz");
}

export async function checkUserExists(userID: string): Promise<boolean> {
  return handleDatabaseQuery(async () => {
    const user = await mqdb.userQuiz.findFirst({
      where: {
        user_id: userID,
      },
    });
    if (user) {
      return true;
    }
    return false;
  }, "Failed searching for user");
}

export async function createUser(userID: string): Promise<void> {
  return handleDatabaseQuery(async () => {
    await mqdb.userQuiz.create({
      data: {
        user_id: userID,
      },
    });
  }, "Could not create user");
}

export async function getArtistName(artistID: number): Promise<string> {
  return handleDatabaseQuery(async () => {
    const quiz_type = await mbdb.artist.findFirst({
      where: {
        id: artistID,
      },
      select: {
        name: true,
      },
    });
    return quiz_type?.name as string;
  }, "Could not fetch artist's name");
}

export async function setArtistQuizAsSendable(quizID: number): Promise<void> {
  return handleDatabaseQuery(async () => {
    await mqdb.artistQuiz.update({
      where: {
        id: quizID,
      },
      data: {
        sendable: true,
      },
    });
  }, "Could not mark question as sendable");
}

export async function getNextArtistQuizID(
  userID: string,
): Promise<number | null> {
  return handleDatabaseQuery(async () => {
    const quiz_id = await mqdb.artistQuiz.findFirst({
      where: {
        userId: userID,
      },
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
      },
    });
    return quiz_id ? quiz_id.id : null;
  }, "Could not fetch artist quiz ID");
}

export async function getArtistQuizzescount(userID: string): Promise<number> {
  return handleDatabaseQuery(async () => {
    const count = await mqdb.artistQuiz.count({
      where: {
        userId: userID,
      },
    });
    return count;
  }, "Could not fetch user queries");
}

export function getArtistQuiz(
  userID: string,
): Promise<ArtistQuizFrontend | null> {
  return handleDatabaseQuery(async () => {
    const quiz = await mqdb.artistQuiz.findFirst({
      where: {
        userId: userID,
      },
      orderBy: {
        id: "asc",
      },
      select: {
        question: true,
        answers: true,
      },
    });
    return quiz ? quiz : null;
  }, "Could not fetch artist quiz");
}

export function checkArtistQuizAnswer(
  userID: string,
  choice: string,
): Promise<boolean> {
  return handleDatabaseQuery(async () => {
    const answer = await mqdb.artistQuiz.findFirst({
      where: {
        userId: userID,
        sendable: true,
      },
      select: {
        correct_answer: true,
      },
    });
    if (answer?.correct_answer === choice) {
      return true;
    }
    return false;
  }, "Could not fetch correct answer");
}

export function deleteArtistQuiz(userID: string): Promise<void> {
  return handleDatabaseQuery(async () => {
    await mqdb.artistQuiz.deleteMany({
      where: {
        userId: userID,
        sendable: true,
      },
    });
  }, "Could not delete artist quiz");
}


export function countAlbumsByTag(tag: number): Promise<number> {
  return handleDatabaseQuery(async () => {
    return   await mbdb.release_group_tag.count({
      where: {
        tag: tag
      }
    })
  }, "Could not count albums by genre")
}

export function getAlbumByIndex(random_album: number, tag: number): Promise<number> {
  return handleDatabaseQuery(async () => {
    const randomAlbum = await mbdb.release_group_tag.findFirst({
      where: {
        tag: tag
      },
      skip: random_album,
      select: {
        release_group: true
      }
    })
    return randomAlbum!.release_group
  }, "Could not fetch albums by index")
}