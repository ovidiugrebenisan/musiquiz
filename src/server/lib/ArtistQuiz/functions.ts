import type { Result, NumberQuestion, StringQuestion } from "./definitions";
import {
  arrayIntersection,
  generateAnswerswhichYear,
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
    const filteredOtherAlbums = await getStudioAlbumsNoSec(otherAlbums)
    if (filteredOtherAlbums.type === 'failure') {
      return {type: 'failure', error: 'Could not find studio other albums'}
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
