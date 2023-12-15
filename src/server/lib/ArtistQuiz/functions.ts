import {
  getArtistAlbums,
  getArtistAlbumNoSecType,
  isAlbumOfficial,

} from "./data";

import { getArtistTag, countAlbumsByTag, getAlbumByIndex, getAlbumName } from "./data";
import { randomNumber, shuffleArray } from "~/utils/helper_functions";


export async function getOfficialAlbums(artistID: number): Promise<number[]> {
  const albums = await getArtistAlbums(artistID);

  const noSecTypeAlbums = (
    await Promise.all(
      albums.map(async (album) => {
        const noSecAlbum = await getArtistAlbumNoSecType(album);
        return !noSecAlbum ? album : null;
      }),
    )
  ).filter((album): album is number => album !== null);

  const officialAlbums = (
    await Promise.all(
      noSecTypeAlbums.map(async (album) => {
        const official_album = await isAlbumOfficial(album);
        return official_album ? album : null;
      }),
    )
  ).filter((album): album is number => album !== null);

  return officialAlbums
}


export async function randomArtistAlbums(artistID: number, chosenAlbum: number): Promise<string[] | null> {
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

  return finalAlbums
}







