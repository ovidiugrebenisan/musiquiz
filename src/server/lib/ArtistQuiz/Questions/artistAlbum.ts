import {
  getArtistTag,
  countAlbumsByTag,
  getAlbumByIndex,
  getAlbumName,
  getArtistName,
} from "../data";
import { randomNumber, shuffleArray } from "~/utils/helper_functions";
import type { ArtistQuizType } from "../definitions";
import { getOfficialAlbums } from "../functions";

export async function artistAlbum(
  artistID: number,
): Promise<ArtistQuizType | null> {
  
  const officialAlbums = await getOfficialAlbums(artistID);

  const chosenAlbum = officialAlbums[
    randomNumber(officialAlbums.length)
  ] as number;

  const artistGenre = await getArtistTag(artistID);

  const otherAlbumsCount = await countAlbumsByTag(artistGenre);

  if (otherAlbumsCount < 4) {
    return null;
  }

  const randomAlbums: number[] = [];

  while (randomAlbums.length < 3) {
    const randomIndex = randomNumber(otherAlbumsCount);

    const album = await getAlbumByIndex(randomIndex, artistGenre);
    if (album === chosenAlbum || randomAlbums.includes(album)) {
      continue;
    }
    randomAlbums.push(album);
  }

  randomAlbums.push(chosenAlbum);

  shuffleArray(randomAlbums);

  const finalAlbums = await Promise.all(
    randomAlbums.map(async (album) => {
      return await getAlbumName(album);
    }),
  );

  const chosenAlbumName = await getAlbumName(chosenAlbum);

  const artistName = await getArtistName(artistID);

  const question = `Which of these albums belongs to ${artistName}?`;

  return {
    question,
    answers: finalAlbums,
    correct_answer: chosenAlbumName,
  };
}
