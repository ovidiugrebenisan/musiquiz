import {

  getReleaseId,
  getMediumId,
  getTrackIDsByMedium,
  getTrackNamebyID,
  getAlbumName,
} from "../data";
import { randomNumber, shuffleArray } from "~/utils/helper_functions";
import type { ArtistQuizType } from "../definitions";
import { getOfficialAlbums } from "../functions";

export async function albumSong(artistID: number): Promise<ArtistQuizType> {
  const officialAlbums = await getOfficialAlbums(artistID)

  const chosenAlbum = officialAlbums[
    randomNumber(officialAlbums.length)
  ] as number;

  const chosenReleaseID = await getReleaseId(chosenAlbum);

  const chosenMedium = await getMediumId(chosenReleaseID);

  const chosenTracks = await getTrackIDsByMedium(chosenMedium);

  const chosenTrack = await getTrackNamebyID(
    chosenTracks[randomNumber(chosenTracks.length)] as number,
  );

  const albumName = await getAlbumName(chosenAlbum);

  const otherAlbums = officialAlbums.filter((album) => album !== chosenAlbum);
  const releaseIDs = await Promise.all(
    otherAlbums.map(async (album) => {
      return await getReleaseId(album);
    }),
  );

  const mediums = await Promise.all(
    releaseIDs.map(async (release) => {
      return await getMediumId(release);
    }),
  );

  const otherTracks = await Promise.all(
    mediums.map(async (medium) => {
      return await getTrackIDsByMedium(medium);
    }),
  );

  const flattenedTracks = [...new Set(otherTracks.flat())];
  shuffleArray(flattenedTracks);
  const finalOtherTracks = flattenedTracks.slice(0, 3);

  const trackNames = (await Promise.all(
    finalOtherTracks.map(async (track) => {
        return await getTrackNamebyID(track)
    })
  ))
  return {
    question: `Which of these songs belongs to the album called ${albumName}`,
    answers: shuffleArray([...trackNames, chosenTrack]),
    correct_answer: chosenTrack,
  };
}
