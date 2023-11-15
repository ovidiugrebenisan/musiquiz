import {
  randomNumber,
  shuffleArray,
  arrayIntersection,
  generateAnswerswhichYear,
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
  getTrackNamebyID,
  getTrackNamesbyIDS,
  getReleaseId,
  getMediumId,
} from "./data";

import type { StringQuestion, NumberQuestion } from "./definitions";

export async function whichYearArtistStarted(
  artistID: number,
  artistName: string,
): Promise<NumberQuestion> {
  const artistStartYear = await getArtistStartYear(artistID);
  const answers = generateAnswerswhichYear(artistStartYear);
  const shuffledArray = shuffleArray(answers);
  const question = `In which year was ${artistName} born/founded?`;
  return {
    question,
    answers: shuffledArray,
    correct_answer: artistStartYear,
  };
}

export async function whichAlbumBelongsArtist(
  artistID: number,
  artistName: string,
): Promise<StringQuestion> {
  const studioAlbums = await getArtistStudioAlbums(artistID);
  const validStudioAlbums = await getStudioAlbumsNoSec(studioAlbums);
  const chosenAlbum = validStudioAlbums[randomNumber(validStudioAlbums.length)] as number;
  const albumReleaseYear = await getAlbumReleaseYear(chosenAlbum);
  const artistGenre = await getArtistGenre(artistID);
  const otherAlbumsGenre = await getAlbumsOfGenre(artistGenre);
  const otherAlbumsYear = await getAlbumsbyYear(albumReleaseYear);
  const otherAlbums = arrayIntersection(otherAlbumsGenre, otherAlbumsYear);
  otherAlbums.splice(3);
  otherAlbums.push(chosenAlbum);
  shuffleArray(otherAlbums);
  const finalAlbums = await getAlbumsNames(otherAlbums);
  const chosenAlbumName = await getAlbumName(chosenAlbum);
  const question = `Which of these albums belongs to ${artistName}?`;
  return {
    question,
    answers: finalAlbums,
    correct_answer: chosenAlbumName,
  };
}

export async function whichAlbumSongBelongs(
  artistID: number,
): Promise<StringQuestion> {
  const studioAlbums = await getArtistStudioAlbums(artistID);
  const filteredAlbums = await getStudioAlbumsNoSec(studioAlbums);
  const chosenAlbum = filteredAlbums[randomNumber(filteredAlbums.length)] as number;
  const releaseIDs = await getReleaseIDS(filteredAlbums);
  const albumName = await getAlbumName(chosenAlbum);
  const chosenReleaseID = await getReleaseId(chosenAlbum);
  const chosenMedium = await getMediumId(chosenReleaseID);
  const mediums = await getMediumsbyReleaseIDs(releaseIDs);
  const otherTracks = await getTracksbyMediumIDS(mediums);
  const chosenTracks = await getTrackIDsByMedium(chosenMedium);
  const trackNames = await getTrackNamesbyIDS(otherTracks);
  const chosenTrack = await getTrackNamebyID(chosenTracks[randomNumber(chosenTracks.length)] as number);
  return {
    question: `Which of these songs belongs to the album called ${albumName}`,
    answers: shuffleArray([...trackNames, chosenTrack]),
    correct_answer: chosenTrack,
  };
}

export async function whichYearAlbum(
  artistID: number,
): Promise<NumberQuestion> {
  const artistAlbums = await getArtistStudioAlbums(artistID);
  const artistStudioAlbums = await getStudioAlbumsNoSec(artistAlbums);
  const chosenAlbum = artistStudioAlbums[randomNumber(artistStudioAlbums.length)] as number;
  const chosenAlbumName = await getAlbumName(chosenAlbum);
  const chosenAlbumYear = await getAlbumReleaseYear(chosenAlbum);
  const answers = generateAnswerswhichYear(chosenAlbumYear);
  const shuffledAnswers = shuffleArray(answers);
  const question = `In which year was the album ${chosenAlbumName} released?`;
  return {
    question,
    answers: shuffledAnswers,
    correct_answer: chosenAlbumYear,
  };
}

// Continue refactoring the rest of the functions in the same manner