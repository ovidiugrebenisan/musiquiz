import type { ArtistQuizType } from "../definitions";
import {  getAlbumName, getAlbumReleaseYear } from "../data";
import { randomNumber, generateAnswerswhichYear, shuffleArray } from "~/utils/helper_functions";
import { getOfficialAlbums } from "../functions";


export async function albumYear(artistID: number): Promise<ArtistQuizType> {
    const officialAlbums = await getOfficialAlbums(artistID)

    const chosenAlbum = officialAlbums[
      randomNumber(officialAlbums.length)
    ] as number;
    const chosenAlbumName = await getAlbumName(chosenAlbum);
    const chosenAlbumYear = await getAlbumReleaseYear(chosenAlbum);
    const currentYear = new Date().getFullYear();
    const maxYear = Math.min(currentYear - chosenAlbumYear, 5);
    const answers = generateAnswerswhichYear(
      chosenAlbumYear,
      chosenAlbumYear - 5,
      chosenAlbumYear + maxYear,
    );
    const shuffledAnswers = shuffleArray(answers);
    const stringAnswers = shuffledAnswers.map((answer) => answer.toString());
    const question = `In which year was the album ${chosenAlbumName} released?`;
    const correct_answer = chosenAlbumYear.toString();
    return {
      question,
      answers: stringAnswers,
      correct_answer,
    };
  }