import { prisma } from "~/server/db";
import { shuffleArray, generateAnswerswhichYear } from "./helper_functions";


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


export async function whichYear(artistID: number, artistName: string ): Promise<WhichYear> {
  try {
    const albumYearData = await prisma.artist.findFirst({
      where: {
        id: artistID,
      },
      select: {
        begin_date_year: true,
      },
    });

    if (albumYearData && typeof albumYearData.begin_date_year === "number") {
      const albumYear = albumYearData.begin_date_year;
      const answers = generateAnswerswhichYear(albumYear);
      const shuffledArray = shuffleArray(answers);
      const question = `In which year was ${artistName} born/founded?`;
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

export async function whichAlbum(artistID: number, artistName: string): Promise<WhichAlbum> {
  try {
      const artistAlbums = await prisma.release_group.findMany({
        where: {
          artist_credit: artistID,
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
        if (isNotStudio) {
          continue;
        } else {
          studioAlbums.push(studioAlbum);
        }
      }
      const chosenAlbum = studioAlbums[
        Math.floor(Math.random() * studioAlbums.length)
      ] as { id: number; name: string };

      const artistGenre = await prisma.artist_tag.findFirst({
        where: {
          artist: artistID,
        },
        orderBy: {
          count: "desc",
        },
        select: {
          tag: true,
        },
      });

      const chosenAlbumYear = await prisma.release_group_meta.findFirst({
        where: {
          id: chosenAlbum.id,
        },
        select: {
          first_release_date_year: true,
        },
      });

      const otherAlbumsGenre = await prisma.release_group_tag.findMany({
        where: {
          tag: artistGenre?.tag,
          release_group: {
            not: chosenAlbum.id,
          },
        },
        select: {
          release_group: true,
        },
      });

      const otherAlbumsYear = await prisma.release_group_meta.findMany({
        where: {
          first_release_date_year: chosenAlbumYear?.first_release_date_year,
          id: {
            not: chosenAlbum.id,
          },
        },
        select: {
          id: true,
        },
      });
      let answerAlbums: string[] = [];
      const otherAlbumsYearValues = otherAlbumsYear.map((rg) => rg.id);
      const otherAlbumsGenreValues = otherAlbumsGenre.map(
        (rg) => rg.release_group,
      );
      const otherAlbumsGenreSet = new Set(otherAlbumsGenreValues);
      const finalAlbums = otherAlbumsYearValues.filter((album) =>
        otherAlbumsGenreSet.has(album),
      );
      const randomAlbums = shuffleArray(finalAlbums);
      const finalRandomAlbums = randomAlbums.slice(0, 3);

      for (const randomAlbum of finalRandomAlbums) {
        const album = await prisma.release_group.findFirst({
          where: {
            id: randomAlbum,
          },
          select: {
            name: true,
          },
        });
        if (album) {
          answerAlbums.push(album.name);
        }
        
      }

      answerAlbums.push(chosenAlbum.name);
      answerAlbums = shuffleArray(answerAlbums)
      const question = `Which of these albums belongs to ${artistName}?`;
      const response = {
        question: question,
        answers: answerAlbums,
        correct_answer: chosenAlbum.name,
      };
      return response;

  } catch (error) {
    console.error("Error fetching artist data:", error);
    throw new Error("Failed to fetch artist data.");
  }
}

