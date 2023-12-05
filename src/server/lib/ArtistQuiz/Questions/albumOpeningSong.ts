import type { ArtistQuizType } from "../definitions";
import { getOfficialAlbums } from "../functions";
import { randomNumber, shuffleArray } from "~/utils/helper_functions";
import { getReleaseId, getMediumId, getTrackNamesandPositionForMedium, getAlbumName } from "../data";

export async function albumOpeningSong(
    artistID: number,
  ): Promise<ArtistQuizType | null> {
    let tracks: { name: string; position: number }[] = [];

    let albumName = "";

    const officialAlbums = await getOfficialAlbums(artistID)

    while (officialAlbums.length > 0) {

      const randomIndex = randomNumber(officialAlbums.length);

      const chosenAlbum = officialAlbums[randomIndex] as number;

      const chosenReleaseID = await getReleaseId(chosenAlbum);

      const chosenMedium = await getMediumId(chosenReleaseID);

      tracks = await getTrackNamesandPositionForMedium(chosenMedium);

      if (tracks.length < 4) {
        officialAlbums.splice(randomIndex, 1);
        continue;
      }

      if (officialAlbums.length === 0) {
        return null;
      }
      albumName = await getAlbumName(chosenAlbum);
      break;
    }

    const correct_answer = tracks.find((obj) => obj.position === 1)!.name;
  
    tracks = tracks.filter((obj) => obj.position !== 1);
  
    let answers = [];

    answers.push(correct_answer);

    while (answers.length < 4) {
      const randomIndex = randomNumber(tracks.length);
      const track = tracks[randomIndex];
      answers.push(track!.name);
      tracks.splice(randomIndex, 1);
    }

    answers = shuffleArray(answers);

    const question = `What was the opening song of the studio album called ${albumName}?`;
    
    return {
      question,
      answers,
      correct_answer,
    };
  }