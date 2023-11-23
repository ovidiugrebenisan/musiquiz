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
  getArtistName,
} from "./data";

import type {  ArtistQuizType } from "./definitions";

export async function artistYear(
  artistID: number,
): Promise<ArtistQuizType> {
  const artistStartYear = await getArtistStartYear(artistID);
  const answers = generateAnswerswhichYear(artistStartYear);
  const shuffledArray = shuffleArray(answers);
  const answersStrings = shuffledArray.map(answer => answer.toString())
  const artistName = await getArtistName(artistID)
  const question = `In which year was ${artistName} born/founded?`;
  const correct_answer = artistStartYear.toString()
  return {
    question,
    answers: answersStrings,
    correct_answer,
  };
}

export async function artistAlbum(
  artistID: number,
): Promise<ArtistQuizType> {
  const studioAlbums = await getArtistStudioAlbums(artistID);
  const validStudioAlbums = await getStudioAlbumsNoSec(studioAlbums);
  const chosenAlbum = validStudioAlbums[randomNumber(validStudioAlbums.length)] as number;
  const albumReleaseYear = await getAlbumReleaseYear(chosenAlbum);
  const artistGenre = await getArtistGenre(artistID);
  const otherAlbumsGenre = await getAlbumsOfGenre(artistGenre);
  const otherAlbumsYear = await getAlbumsbyYear(albumReleaseYear);
  const otherAlbums = arrayIntersection(otherAlbumsGenre, otherAlbumsYear);
  const finalOtherAlbums = otherAlbums.slice(0, 3);
  finalOtherAlbums.push(chosenAlbum);
  shuffleArray(finalOtherAlbums);
  const finalAlbums = await getAlbumsNames(finalOtherAlbums);
  const chosenAlbumName = await getAlbumName(chosenAlbum);
  const artistName = await getArtistName(artistID)
  const question = `Which of these albums belongs to ${artistName}?`;
  return {
    question,
    answers: finalAlbums,
    correct_answer: chosenAlbumName,
  };
}

export async function albumSong(
  artistID: number,
): Promise<ArtistQuizType> {
  const studioAlbums = await getArtistStudioAlbums(artistID);
  const filteredAlbums = await getStudioAlbumsNoSec(studioAlbums);
  const chosenAlbum = filteredAlbums[randomNumber(filteredAlbums.length)] as number;
  const chosenReleaseID = await getReleaseId(chosenAlbum);
  const chosenMedium = await getMediumId(chosenReleaseID);
  const chosenTracks = await getTrackIDsByMedium(chosenMedium);
  const chosenTrack = await getTrackNamebyID(chosenTracks[randomNumber(chosenTracks.length)] as number);
  const albumName = await getAlbumName(chosenAlbum);
  const otherAlbums = filteredAlbums.filter(album => album !== chosenAlbum)
  const releaseIDs = await getReleaseIDS(otherAlbums);
  const mediums = await getMediumsbyReleaseIDs(releaseIDs);
  const otherTracks = await getTracksbyMediumIDS(mediums);
  shuffleArray(otherTracks)
  const finalOtherTracks = otherTracks.slice(0,3)

  const trackNames = await getTrackNamesbyIDS(finalOtherTracks);
  return {
    question: `Which of these songs belongs to the album called ${albumName}`,
    answers: shuffleArray([...trackNames, chosenTrack]),
    correct_answer: chosenTrack,
  };
}

export async function albumYear(
  artistID: number,
): Promise<ArtistQuizType> {
  const artistAlbums = await getArtistStudioAlbums(artistID);
  const artistStudioAlbums = await getStudioAlbumsNoSec(artistAlbums);
  const chosenAlbum = artistStudioAlbums[randomNumber(artistStudioAlbums.length)] as number;
  const chosenAlbumName = await getAlbumName(chosenAlbum);
  const chosenAlbumYear = await getAlbumReleaseYear(chosenAlbum);
  const answers = generateAnswerswhichYear(chosenAlbumYear);
  const shuffledAnswers = shuffleArray(answers);
  const stringAnswers = shuffledAnswers.map(answer => answer.toString())
  const question = `In which year was the album ${chosenAlbumName} released?`;
  const correct_answer = chosenAlbumYear.toString()
  return {
    question,
    answers: stringAnswers,
    correct_answer
  };
}