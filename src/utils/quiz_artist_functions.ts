import { prisma } from "~/server/db";
import {
  shuffleArray,
  generateAnswerswhichYear,
} from "./helper_functions";

export type NumberQuestion = {
  question: string;
  answers: number[];
  correct_answer: number;
};

export type StringQuestion = {
  question: string;
  answers: string[];
  correct_answer: string;
};

export  function whichYearArtistStarted(
  begin_date_year: number,
  artistName: string,
): NumberQuestion {
  const answers = generateAnswerswhichYear(begin_date_year);
  const shuffledArray = shuffleArray(answers);
  const question = `In which year was ${artistName} born/founded?`;
  const response = {
    question: question,
    answers: shuffledArray,
    correct_answer: begin_date_year,
  };
  return response;
}

async function getArtistStudioAlbums(artistID: number) {
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
  return studioAlbums;
}

export async function whichAlbumBelongsArtist(
  artistID: number,
  artistName: string,
): Promise<StringQuestion> {
  try {
    const studioAlbums = await getArtistStudioAlbums(artistID);
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
    answerAlbums = shuffleArray(answerAlbums);
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

// async function getRandomTrackFromAlbum(releaseGroupId: number) {
//   const releaseID = await prisma.release.findFirst({
//     where: {
//       release_group: releaseGroupId,
//     },
//     select: {
//       id: true,
//     },
//   });
//   if (releaseID) {
//     const albumMedium = await prisma.medium.findFirst({
//       where: {
//         release: releaseID.id,
//       },
//       select: {
//         id: true,
//       },
//     });
//     if (albumMedium) {
//       const albumTracks = await prisma.track.findMany({
//         where: {
//           medium: albumMedium.id,
//         },
//         select: {
//           name: true,
//         },
//       });
//       if (albumTracks) {
//         const pickedTrack = albumTracks[randomNumber(albumTracks.length)]?.name;
//         return pickedTrack;
//       }
//     }
//   }
// }

// export async function whichSongBelongsAlbum(
//   artistID: number,
// ): Promise<StringQuestion> {
//   const studioAlbums = await getArtistStudioAlbums(artistID);
//   const randomIndex = randomNumber(studioAlbums.length);
//   const pickedAlbum = studioAlbums[randomIndex];
//   studioAlbums.slice(randomIndex, 1);
//   const shuffledAlbums = shuffleArray(studioAlbums);
//   shuffledAlbums.slice(0, 3);
//   let answers: string[] = [];
//   let question = "";
//   let answer;
//   if (pickedAlbum) {
//     answer = await getRandomTrackFromAlbum(pickedAlbum.id);
//     for (const album of shuffledAlbums) {
//       answers.push(await getRandomTrackFromAlbum(album.id));
//     }
//     answers.push(answer);
//     answers = shuffleArray(allTracks);
//     question = `Which of these songs belongs to the ${pickedAlbum.name} album?`;
//     return {
//       question,
//       answers: allTracks,
//     };
//   }
// }
