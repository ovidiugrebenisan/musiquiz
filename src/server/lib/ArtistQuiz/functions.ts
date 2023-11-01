import type { Result, NumberQuestion, StringQuestion } from "./definitions";
import {
  arrayIntersection,
  generateAnswerswhichYear,
  randomNumber,
  shuffleArray,
} from "~/utils/helper_functions";
import {
  getAlbumReleaseYear,
  getArtistGenre,
  getArtistStartYear,
  getArtistStudioAlbums,
  getStudioAlbumsNoSec,
  getAlbumsOfGenre,
  getAlbumsbyYear,
  getAlbumsNames,
  getAlbumName,
  getTrackIDsByMedium,
  getReleaseIDS,
  getMediumsbyReleaseIDs,
  getTracksbyMediumIDS,
  getTrackNamesbyIDS,
  getTrackNamebyID,
  getReleaseId,
  getMediumId,
} from "./data";

export async function whichYearArtistStarted(
  artistID: number,
  artistName: string,
): Promise<Result<NumberQuestion>> {
  const artistStartYear = await getArtistStartYear(artistID);

  if (artistStartYear.type === "failure") {
    return { type: "failure", error: "Not enough data" };
  }
  const answers = generateAnswerswhichYear(artistStartYear.value);
  const shuffledArray = shuffleArray(answers);
  const question = `In which year was ${artistName} born/founded?`;
  const response = {
    question: question,
    answers: shuffledArray,
    correct_answer: artistStartYear.value,
  };
  return { type: "success", value: response };
}

export async function whichAlbumBelongsArtist(
  artistID: number,
  artistName: string,
): Promise<Result<StringQuestion>> {
  try {
    //Get all albums from artist
    const studioAlbums = await getArtistStudioAlbums(artistID);
    if (studioAlbums.length === 0) {
      return { type: "failure", error: "Not enough data" };
    }

    //Filter by only studio albums
    const validStudioAlbums = await getStudioAlbumsNoSec(studioAlbums);

    if (validStudioAlbums.type === "failure") {
      return { type: "failure", error: "Not enough data" };
    }

    //Choose a random album
    const chosenAlbum =
      validStudioAlbums.value[
        Math.floor(Math.random() * validStudioAlbums.value.length)
      ];

    if (chosenAlbum === undefined) {
      return { type: "failure", error: "Could not choose a random album." };
    }

    //Get the albums release year
    const albumReleaseYear = await getAlbumReleaseYear(chosenAlbum);

    if (albumReleaseYear.type === "failure") {
      return { type: "failure", error: "Not enough data" };
    }

    //Get the Artist's genre
    const artistGenre = await getArtistGenre(artistID);

    if (artistGenre.type === "failure") {
      return { type: "failure", error: "Not enough data" };
    }

    const otherAlbumsGenre = await getAlbumsOfGenre(artistGenre.value);

    if (otherAlbumsGenre.type === "failure") {
      return { type: "failure", error: "Not enough data" };
    }

    const otherAlbumsYear = await getAlbumsbyYear(albumReleaseYear.value);

    if (otherAlbumsYear.type === "failure") {
      return { type: "failure", error: "Not enough data" };
    }

    const otherAlbums = arrayIntersection(
      otherAlbumsGenre.value,
      otherAlbumsYear.value,
    );
    otherAlbums.filter((value) => value !== chosenAlbum);
    const filteredOtherAlbums = await getStudioAlbumsNoSec(otherAlbums);
    if (filteredOtherAlbums.type === "failure") {
      return { type: "failure", error: "Could not find studio other albums" };
    }
    shuffleArray(filteredOtherAlbums.value);
    filteredOtherAlbums.value.splice(3);
    filteredOtherAlbums.value.push(chosenAlbum);

    shuffleArray(filteredOtherAlbums.value);
    const finalAlbums = await getAlbumsNames(filteredOtherAlbums.value);
    if (finalAlbums.type === "failure") {
      return { type: "failure", error: "Not enough data" };
    }
    const chosenAlbumName = await getAlbumName(chosenAlbum);
    if (chosenAlbumName.type === "failure") {
      return { type: "failure", error: "Not enough data" };
    }

    const question = `Which of these albums belongs to ${artistName}?`;
    const response = {
      question: question,
      answers: finalAlbums.value,
      correct_answer: chosenAlbumName.value,
    };
    return {
      type: "success",
      value: response,
    };
  } catch (error) {
    console.error("Error fetching artist data:", error);
    throw new Error("Failed to fetch artist data.");
  }
}

export async function whichAlbumSongBelongs(
  artistID: number,
): Promise<Result<StringQuestion>> {
  const studioAlbums = await getArtistStudioAlbums(artistID);
  if (studioAlbums.length < 2) {
    return { type: "failure", error: "Not enough albums" };
  }
  const filteredAlbums = await getStudioAlbumsNoSec(studioAlbums);
  if (filteredAlbums.type === "failure" || filteredAlbums.value.length < 2) {
    return { type: "failure", error: "Not enough albums" };
  }

  const chosenAlbum = filteredAlbums.value[randomNumber(filteredAlbums.value.length)] as number

  filteredAlbums.value.filter(album => album !== chosenAlbum)

  const releaseIDs = await getReleaseIDS(filteredAlbums.value)

  const albumName = await getAlbumName(chosenAlbum)

  const chosenReleaseID = await getReleaseId(chosenAlbum)

  if (chosenReleaseID.type === 'failure') {
    return {type: 'failure', error: chosenReleaseID.error}
  }

  const chosenMedium = await getMediumId(chosenReleaseID.value)

  if (chosenMedium.type === 'failure') {
    return {type: 'failure', error: chosenMedium.error}
  }

  if (albumName.type === 'failure') {
    return {type: 'failure', error: albumName.error}
  }

  if (releaseIDs.type === 'failure' || releaseIDs.value.length < 2) {
    return {type: 'failure', error: "Not enough releases"}
  }

  const mediums = await getMediumsbyReleaseIDs(releaseIDs.value)

  if (mediums.type === 'failure' || mediums.value.length < 2) {
    return {type: 'failure', error: 'Not enough mediums'}
  }

  mediums.value.filter(medium => medium !== chosenMedium.value)
  while (mediums.value.length < 3 ) {
    mediums.value.push(mediums.value[randomNumber(mediums.value.length)] as number)
  }

  const otherTracks = await getTracksbyMediumIDS(mediums.value)
  const chosenTracks = await getTrackIDsByMedium(chosenMedium.value)
  const otherTracksSet: Set<number> = new Set(otherTracks)
  const uniqueOtherTracks: number[] = Array.from(otherTracksSet)
  shuffleArray(uniqueOtherTracks)
  uniqueOtherTracks.splice(3)
  const trackNames = await getTrackNamesbyIDS(uniqueOtherTracks)
  const chosenTrack = await getTrackNamebyID(chosenTracks[randomNumber(chosenTracks.length)] as number)

  if (trackNames.type === "failure" || chosenTrack.type === 'failure') {
    return {type:'failure', error: 'something went wrong'}
  }
  trackNames.value.push(chosenTrack.value)

  return {type: 'success', value: {
    question: `Which of these songs belongs to the album called  ${albumName.value}`,
    correct_answer: chosenTrack.value,
    answers: trackNames.value
  }}



}
