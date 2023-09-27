import { prisma } from "~/server/db";
import { shuffleArray, generateAnswers } from "./helper_functions";

export type WhichYear = {
  question: string;
  answers: number[];
  correct_answer: number;
} | null;

export type WhichAlbum = {
  question: string;
  answers: string[];
  correct_answer: string;
} | null;

// function sleep(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }


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
      const answers = generateAnswers(albumYear);
      const shuffledArray = shuffleArray(answers);
      const question = `In which year was ${input} born/founded?`;
      const response = {
        question: question,
        answers: shuffledArray,
        correct_answer: albumYear,
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

export async function whichAlbum(input: string): Promise<WhichAlbum> {
  try {
    const artistID = await prisma.artist.findFirst({
      where: {
        name: input,
      },
      select: {
        id: true,
      },
    });
    if (artistID) {
      const artistAlbums = await prisma.release_group.findMany({
        where: {
          artist_credit: artistID.id,
          type: 1,
        },
        select: {
          id: true,
          name: true,
        },
      });
      const studioAlbums = [];
      for (const studioAlbum of artistAlbums) {
        const isNotStudio =
          await prisma.release_group_secondary_type_join.findFirst({
            where: {
              release_group: studioAlbum.id,
            },
          });
        console.log(isNotStudio)
        if (isNotStudio) {
          continue;
        } else {
          studioAlbums.push(studioAlbum.name);
        }
      }
      const chosenAlbum =
        studioAlbums[Math.floor(Math.random() * studioAlbums.length)] as string;
      const artistGenre = await prisma.artist_tag.findFirst({
        where: {
          artist: artistID.id,
        },
        orderBy: {
          count: "desc",
        },
        select: {
          tag: true,
        },
      });

      const otherAlbums = await prisma.release_group_tag.findMany({
        where: {
          tag: artistGenre?.tag,
          release_group: {
            not: artistID.id,
          },
        },
        take: 3,
        orderBy: {
          count: "desc",
        },
        select: {
          release_group: true,
        },
      });
      const finalAlbums: string[] = [];
      for (const otherAlbum of otherAlbums) {
        const albumName = await prisma.release_group.findFirst({
          where: {
            id: otherAlbum.release_group,
          },
          select: {
            name: true,
          },
        });
        if (albumName) {
          finalAlbums.push(albumName.name);
        }
      }
      finalAlbums.push(chosenAlbum);
      const question = `Which of these albums belong to ${input}?`;
      const response = {
        question: question,
        answers: finalAlbums,
        correct_answer: chosenAlbum,
      };
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching artist data:", error);
    throw new Error("Failed to fetch artist data.");
  }
}
