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

type Result<T, E = string> = { type: 'success', value: T } | { type: 'failure', error: E };

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
  const studioAlbums = (await Promise.all(
    artistAlbums.map( async (album) => {
      const isNotStudio = await prisma.release_group_secondary_type_join.findFirst({
        where: {
          release_group: album.id
        }
      })
      return isNotStudio ? null : album
    })
  )).filter((album) : album is { id:number; name:string} => album !== null)

  return studioAlbums

}

async function getStudioAlbumsNoSec(albums: number[]) {
  const filteredAlbums = (await Promise.all(
    albums.map( async (album) => {
      const isNotStudio = await prisma.release_group_secondary_type_join.findFirst({
        where: {
          release_group: album
        }
      })
      return isNotStudio ? null : album
    })
  )).filter((album): album is number => album !== null)

  return filteredAlbums
}

export async function whichAlbumBelongsArtist(
  artistID: number,
  artistName: string,
): Promise<Result<StringQuestion>> {
  try {
    const studioAlbums = await getArtistStudioAlbums(artistID);
    if (studioAlbums.length === 0) {
      return { type: 'failure', error: 'Not enough data'}
    } 

    const validStudioAlbums = (await Promise.all(
      studioAlbums.map(async (album) => {
        const releaseDateInfo = await prisma.release_group_meta.findFirst({
          where: {
            id: album.id
          },
          select: {
            first_release_date_year: true
          }
        });
    
        if (releaseDateInfo && releaseDateInfo.first_release_date_year) {
          return {
            id: album.id,
            name: album.name,
            releaseDate: releaseDateInfo.first_release_date_year
          };
        }
        return null;
      })
    )).filter((album): album is { id: number; name: string; releaseDate: number } => album !== null);
    

    if (validStudioAlbums.length === 0) {
      return { type: 'failure', error: 'Not enough data'}
    }

    const chosenAlbum = validStudioAlbums[
      Math.floor(Math.random() * validStudioAlbums.length)
    ] as { id: number; name: string; releaseDate: number };

    const chosenAlbumYear = chosenAlbum.releaseDate



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
      return { type: 'failure', error: 'Not enough data'}
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
    const randomStudioAlbums = await getStudioAlbumsNoSec(randomAlbums)
    if (randomStudioAlbums.length === 0) {
      return {type: 'failure', error: 'Not enough data'}
    }
    const finalRandomAlbums = randomStudioAlbums.slice(0, 3);

    let answerAlbums = await Promise.all(
      finalRandomAlbums.map(async (albumID) => {
        const albumName = await prisma.release_group.findFirst({
          where: {
            id: albumID
          },
          select: {
            name: true
          }
        })
        return albumName!.name
      })
    )

    answerAlbums.push(chosenAlbum.name);
    answerAlbums = shuffleArray(answerAlbums);
    const question = `Which of these albums belongs to ${artistName}?`;
    const response = {
      question: question,
      answers: answerAlbums,
      correct_answer: chosenAlbum.name,
    };
    return {
      type: 'success',
      value: response
    };
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
