import { prisma } from "~/server/db";
import type { Result, NumberQuestion, StringQuestion } from "./definitions";
import {
  generateAnswerswhichYear,
  shuffleArray,
} from "~/utils/helper_functions";
import { getArtistStudioAlbums, getStudioAlbumsNoSec } from "./data";

export async function whichYearArtistStarted(
  artistID: number,
  artistName: string,
): Promise<Result<NumberQuestion>> {
  const artistStartYear = await prisma.artist.findFirst({
    where: {
      id: artistID,
    },
    select: {
      begin_date_year: true,
    },
  });

  if (!artistStartYear || !artistStartYear.begin_date_year) {
    return { type: "failure", error: "Artist does not have start year" };
  }
  const answers = generateAnswerswhichYear(artistStartYear.begin_date_year);
  const shuffledArray = shuffleArray(answers);
  const question = `In which year was ${artistName} born/founded?`;
  const response = {
    question: question,
    answers: shuffledArray,
    correct_answer: artistStartYear.begin_date_year,
  };
  return { type: "success", value: response };
}

export async function whichAlbumBelongsArtist(
  artistID: number,
  artistName: string,
): Promise<Result<StringQuestion>> {
  try {
    const studioAlbums = await getArtistStudioAlbums(artistID);
    if (studioAlbums.length === 0) {
      return { type: "failure", error: "Not enough data" };
    }

    const validStudioAlbums = (
      await Promise.all(
        studioAlbums.map(async (album) => {
          const releaseDateInfo = await prisma.release_group_meta.findFirst({
            where: {
              id: album.id,
            },
            select: {
              first_release_date_year: true,
            },
          });

          if (releaseDateInfo && releaseDateInfo.first_release_date_year) {
            return {
              id: album.id,
              name: album.name,
              releaseDate: releaseDateInfo.first_release_date_year,
            };
          }
          return null;
        }),
      )
    ).filter(
      (album): album is { id: number; name: string; releaseDate: number } =>
        album !== null,
    );

    if (validStudioAlbums.length === 0) {
      return { type: "failure", error: "Not enough data" };
    }

    const chosenAlbum = validStudioAlbums[
      Math.floor(Math.random() * validStudioAlbums.length)
    ] as { id: number; name: string; releaseDate: number };

    const chosenAlbumYear = chosenAlbum.releaseDate;

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

    if (artistGenre === null) {
      return { type: "failure", error: "Not enough data" };
    }

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
        first_release_date_year: chosenAlbumYear,
        id: {
          not: chosenAlbum.id,
        },
      },
      select: {
        id: true,
      },
    });
    const otherAlbumsYearValues = otherAlbumsYear.map((rg) => rg.id);
    const otherAlbumsGenreValues = otherAlbumsGenre.map(
      (rg) => rg.release_group,
    );
    const otherAlbumsGenreSet = new Set(otherAlbumsGenreValues);
    const finalAlbums = otherAlbumsYearValues.filter((album) =>
      otherAlbumsGenreSet.has(album),
    );
    const randomAlbums = shuffleArray(finalAlbums);
    const randomStudioAlbums = await getStudioAlbumsNoSec(randomAlbums);
    if (randomStudioAlbums.length === 0) {
      return { type: "failure", error: "Not enough data" };
    }
    const finalRandomAlbums = randomStudioAlbums.slice(0, 3);

    let answerAlbums = await Promise.all(
      finalRandomAlbums.map(async (albumID) => {
        const albumName = await prisma.release_group.findFirst({
          where: {
            id: albumID,
          },
          select: {
            name: true,
          },
        });
        return albumName!.name;
      }),
    );

    answerAlbums.push(chosenAlbum.name);
    answerAlbums = shuffleArray(answerAlbums);
    const question = `Which of these albums belongs to ${artistName}?`;
    const response = {
      question: question,
      answers: answerAlbums,
      correct_answer: chosenAlbum.name,
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
