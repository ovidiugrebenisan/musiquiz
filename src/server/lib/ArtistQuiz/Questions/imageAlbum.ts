import { randomNumber } from "~/utils/helper_functions";
import { getArtistGID } from "../../data";
import type { Album, Image, MusicResponse } from "../../definitions";
import type { ArtistQuizFrontend } from "../definitions";
import axios from "axios";
import { getAlbumNameByGid, getAlbumIDByGID } from "../data";
import { randomArtistAlbums } from "../functions";

export async function imageAlbum(
  artistID: number,
): Promise<ArtistQuizFrontend | null> {
  let imageURL = "";
  let albumGID = "";
  try {
    const artistGID = await getArtistGID(artistID);
    const response = await axios.get<MusicResponse>(
      `https://webservice.fanart.tv/v3/music/${artistGID}?api_key=${process.env.FANART_API_KEY}`,
    );

    if (response.data.albums && Object.keys(response.data.albums).length > 0) {
      const albums = Object.keys(response.data.albums);
      const randomIndex = randomNumber(albums.length)
      const randomAlbum = response.data.albums[
        randomIndex
      ] as Album;

      if (randomAlbum.albumcover && randomAlbum.albumcover.length > 0) {
        const upperLimit = randomAlbum.albumcover.length;
        const randomCover = randomAlbum.albumcover[
          randomNumber(upperLimit)
        ] as Image;
        imageURL = randomCover.url;
        albumGID = albums[randomIndex] as string
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching artist album cover", error);
    return null;
  }

  const correct_answer = await getAlbumNameByGid(albumGID)
  const albumID = await getAlbumIDByGID(albumGID)
  const answers = await randomArtistAlbums(artistID, albumID)
  const question = "What is the name of the album that has the artwork presented on the left?"
}
