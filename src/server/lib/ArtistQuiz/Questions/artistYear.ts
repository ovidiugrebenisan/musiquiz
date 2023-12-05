import type { ArtistQuizType } from "../definitions";
import { getArtistStartYear, getArtistName, getArtistType } from "../data";
import { generateAnswerswhichYear, shuffleArray } from "~/utils/helper_functions";


export async function artistYear(artistID: number): Promise<ArtistQuizType> {
    const artistStartYear = await getArtistStartYear(artistID);

    const currentYear = new Date().getFullYear();

    const maxYear = Math.min(currentYear - artistStartYear, 5);

    const answers = generateAnswerswhichYear(
      artistStartYear,
      artistStartYear - 5,
      artistStartYear + maxYear,
    );

    const shuffledArray = shuffleArray(answers);

    const answersStrings = shuffledArray.map((answer) => answer.toString());

    const artistName = await getArtistName(artistID);

    const artistType = await getArtistType(artistID);

    const adjective = artistType !== 1 ? "founded" : "born";
  
    const question = `In which year was ${artistName} ${adjective}?`;

    const correct_answer = artistStartYear.toString();
    
    return {
      question,
      answers: answersStrings,
      correct_answer,
    };
  }