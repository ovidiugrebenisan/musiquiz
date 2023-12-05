import type { ArtistQuizType } from "../definitions";
import { getArtistAlbums, getArtistName, getArtistAlbumNoSecType, isAlbumOfficial } from "../data";
import { shuffleArray, generateAnswerswhichYear } from "~/utils/helper_functions";


export async function studioAlbumCount(
    artistID: number,
  ): Promise<ArtistQuizType> {
    const artistAlbums = await getArtistAlbums(artistID);

    const artistName = await getArtistName(artistID);

    const artistAlbumsNoSec = (await Promise.all(
        artistAlbums.map(async (album) => {
            const no_sec = await getArtistAlbumNoSecType(album)
            return !no_sec ? album : null
        })
    )).filter((album): album is number => album !== null)

    const officialAlbums = (await Promise.all(
        artistAlbumsNoSec.map(async (album) => {
            const is_off = await isAlbumOfficial(album)
            return is_off ? album : null
        })
    )).filter((album): album is number => album !== null).length

    const minCount = Math.max(officialAlbums - 5, 1);
    const answers = shuffleArray(
      generateAnswerswhichYear(
        officialAlbums,
        minCount,
        officialAlbums + 5,
      ),
    ).map((answer) => answer.toString());
    const question = `How many studio albums does ${artistName} have?`;
    const correct_answer = officialAlbums.toString();
  
    return {
      question,
      answers,
      correct_answer,
    };
  }