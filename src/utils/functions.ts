import { prisma } from "~/server/db";
import { shuffleArray, getRandomNumber } from "./helper_functions";

export type WhichYear = {
  question: string;
  answers: number[]
} | null

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
        const higher_year = getRandomNumber(
          albumYear - 1,
          albumYear + 1,
          albumYear,
        );
        const lower_year = getRandomNumber(
          albumYear - 2,
          albumYear - 7,
          albumYear,
        );
        const another_year = getRandomNumber(
          albumYear + 2,
          albumYear + 7,
          albumYear,
        );
        const answers: number[] = [
          albumYear,
          higher_year,
          lower_year,
          another_year,
        ];
        const shuffledArray = shuffleArray(answers);
        const question = `In which year was ${input} born/founded?`;
        const response = { question: question, answers: shuffledArray 
        };
        return response;
      } else {
        return null; // Return empty array if no data or begin_date_year isn't a number
      }
    } catch (error) {
      console.error("Error fetching artist data:", error);
      throw new Error("Failed to fetch artist data.");
    }
  }

export async function getChosenArtist(userId: string) {
  const artist = await prisma.user_metadata.findUnique({
    where: {
      user_id: userId
    },
    select: {
      current_artist: true
    }
  })
  if (artist && artist.current_artist) {
    return artist.current_artist
  }
  return null
}