import { prisma } from "~/server/db";
import { shuffleArray, generateAnswers } from "./helper_functions";

export type WhichYear = {
  question: string;
  answers: number[];
  correct_answer: number
} | null;

export async function whichYear(input: string): Promise<WhichYear> {
  try {   
    const albumYearData = await prisma.artist.findFirst({
      where: {
        name: input,
      },
      select: {
        begin_date_year: true,
      },
    });

    if (albumYearData && typeof albumYearData.begin_date_year === "number") {
      const albumYear = albumYearData.begin_date_year;
      const answers = generateAnswers(albumYear)
      const shuffledArray = shuffleArray(answers);
      const question = `In which year was ${input} born/founded?`;
      const response = { question: question, answers: shuffledArray, correct_answer: albumYear };
      return response;
    } else {
      return null; // Return empty array if no data or begin_date_year isn't a number
    }
  } catch (error) {
    console.error("Error fetching artist data:", error);
    throw new Error("Failed to fetch artist data.");
  }
}

