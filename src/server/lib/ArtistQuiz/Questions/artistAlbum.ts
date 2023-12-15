import {
  getAlbumName,
  getArtistName,
} from "../data";
import { randomNumber } from "~/utils/helper_functions";
import type { ArtistQuizType } from "../definitions";
import { getOfficialAlbums, randomArtistAlbums } from "../functions";

export async function artistAlbum(
  artistID: number,
): Promise<ArtistQuizType | null> {
  
  const officialAlbums = await getOfficialAlbums(artistID);

  const chosenAlbum = officialAlbums[
    randomNumber(officialAlbums.length)
  ] as number;

  const answers = await randomArtistAlbums(artistID, chosenAlbum)

  if (!answers) {
    return null
  }

  const chosenAlbumName = await getAlbumName(chosenAlbum);

  const artistName = await getArtistName(artistID);

  const question = `Which of these albums belongs to ${artistName}?`;

  return {
    question,
    answers,
    correct_answer: chosenAlbumName,
  };
}
