import {
  randomNumber,
  shuffleArray,
  generateAnswerswhichYear,
} from "~/utils/helper_functions";
import {
  getAlbumReleaseYear,
  getArtistGenre,
  getArtistStartYear,
  getArtistStudioAlbums,
  getStudioAlbumsNoSec,
  getAlbumsNames,
  getAlbumName,
  getTrackIDsByMedium,
  getReleaseIDS,
  getMediumsbyReleaseIDs,
  getTracksbyMediumIDS,
  getTrackNamebyID,
  getTrackNamesbyIDS,
  getReleaseId,
  getMediumId,
  getArtistName,
  countAlbumsByTag,
  getAlbumByIndex,
  getArtistType,
  getTrackNamesandPositionForMedium,
  getartistArtistLinks,
  getLinksData,
  getLinkAttributes,
  getAttributeName,
  getArtistNames,
} from "./data";

import type { ArtistQuizType } from "./definitions";

export async function artistYear(artistID: number): Promise<ArtistQuizType> {
  const artistStartYear = await getArtistStartYear(artistID);
  const currentYear = new Date().getFullYear()
  const maxYear = Math.min(currentYear - artistStartYear, 5)
  const answers = generateAnswerswhichYear(
    artistStartYear,
    artistStartYear - 5,
    artistStartYear + maxYear
  );
  const shuffledArray = shuffleArray(answers);
  const answersStrings = shuffledArray.map((answer) => answer.toString());
  const artistName = await getArtistName(artistID);
  const artistType = await getArtistType(artistID);
  const adjective = artistType !== 1 ? "founded" : "born";

  const question = `In which year was ${artistName} ${adjective}?`;
  const correct_answer = artistStartYear.toString();
  return {
    question,
    answers: answersStrings,
    correct_answer,
  };
}

export async function artistAlbum(
  artistID: number,
): Promise<ArtistQuizType | null> {
  const studioAlbums = await getArtistStudioAlbums(artistID);
  const validStudioAlbums = await getStudioAlbumsNoSec(studioAlbums);
  const chosenAlbum = validStudioAlbums[
    randomNumber(validStudioAlbums.length)
  ] as number;
  const artistGenre = await getArtistGenre(artistID);
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
  const finalAlbums = await getAlbumsNames(randomAlbums);
  const chosenAlbumName = await getAlbumName(chosenAlbum);
  const artistName = await getArtistName(artistID);
  const question = `Which of these albums belongs to ${artistName}?`;
  return {
    question,
    answers: finalAlbums,
    correct_answer: chosenAlbumName,
  };
}

export async function albumSong(artistID: number): Promise<ArtistQuizType> {
  const studioAlbums = await getArtistStudioAlbums(artistID);
  const filteredAlbums = await getStudioAlbumsNoSec(studioAlbums);
  const chosenAlbum = filteredAlbums[
    randomNumber(filteredAlbums.length)
  ] as number;
  const chosenReleaseID = await getReleaseId(chosenAlbum);
  const chosenMedium = await getMediumId(chosenReleaseID);
  const chosenTracks = await getTrackIDsByMedium(chosenMedium);
  const chosenTrack = await getTrackNamebyID(
    chosenTracks[randomNumber(chosenTracks.length)] as number,
  );
  const albumName = await getAlbumName(chosenAlbum);
  const otherAlbums = filteredAlbums.filter((album) => album !== chosenAlbum);
  const releaseIDs = await getReleaseIDS(otherAlbums);
  const mediums = await getMediumsbyReleaseIDs(releaseIDs);
  const otherTracks = await getTracksbyMediumIDS(mediums);
  shuffleArray(otherTracks);
  const finalOtherTracks = otherTracks.slice(0, 3);

  const trackNames = await getTrackNamesbyIDS(finalOtherTracks);
  return {
    question: `Which of these songs belongs to the album called ${albumName}`,
    answers: shuffleArray([...trackNames, chosenTrack]),
    correct_answer: chosenTrack,
  };
}

export async function albumYear(artistID: number): Promise<ArtistQuizType> {
  const artistAlbums = await getArtistStudioAlbums(artistID);
  const artistStudioAlbums = await getStudioAlbumsNoSec(artistAlbums);
  const chosenAlbum = artistStudioAlbums[
    randomNumber(artistStudioAlbums.length)
  ] as number;
  const chosenAlbumName = await getAlbumName(chosenAlbum);
  const chosenAlbumYear = await getAlbumReleaseYear(chosenAlbum);
  const currentYear = new Date().getFullYear();
  const maxYear = Math.min(currentYear - chosenAlbumYear, 5)
  const answers = generateAnswerswhichYear(
    chosenAlbumYear,
    chosenAlbumYear - 5,
    chosenAlbumYear + maxYear
  );
  const shuffledAnswers = shuffleArray(answers);
  const stringAnswers = shuffledAnswers.map((answer) => answer.toString());
  const question = `In which year was the album ${chosenAlbumName} released?`;
  const correct_answer = chosenAlbumYear.toString();
  return {
    question,
    answers: stringAnswers,
    correct_answer,
  };
}

export async function studioAlbumCount(
  artistID: number,
): Promise<ArtistQuizType> {
  const artistAlbums = await getArtistStudioAlbums(artistID);
  const artistName = await getArtistName(artistID);
  const artistStudioAlbumsCount = (await getStudioAlbumsNoSec(artistAlbums))
    .length;
  const minCount = Math.max(artistStudioAlbumsCount -5, 1)
  const answers = shuffleArray(
    generateAnswerswhichYear(artistStudioAlbumsCount, minCount, artistStudioAlbumsCount + 5),
  ).map((answer) => answer.toString());
  const question = `How many studio albums does ${artistName} have?`;
  const correct_answer = artistStudioAlbumsCount.toString();

  return {
    question,
    answers,
    correct_answer,
  };
}

export async function albumOpeningSong(
  artistID: number,
): Promise<ArtistQuizType | null> {
  let tracks: { name: string; position: number }[] = [];
  let albumName = "";
  const artistAlbums = await getArtistStudioAlbums(artistID);
  const artistStudioAlbums = await getStudioAlbumsNoSec(artistAlbums);
  while (artistStudioAlbums.length > 0) {
    const randomIndex = randomNumber(artistStudioAlbums.length);
    const chosenAlbum = artistStudioAlbums[randomIndex] as number;
    const chosenReleaseID = await getReleaseId(chosenAlbum);
    const chosenMedium = await getMediumId(chosenReleaseID);
    tracks = await getTrackNamesandPositionForMedium(chosenMedium);
    if (tracks.length < 4) {
      artistStudioAlbums.splice(randomIndex, 1);
      continue;
    }
    if (artistStudioAlbums.length === 0) {
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
    const track = tracks[randomIndex] 
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

type LinkData = {
  id: number;
  begin_date_year: number | null
  end_date_year: number | null
  attribute_count: number;
  ended: boolean
}

export async function whoWasInstrumentist(artistID: number ): Promise<ArtistQuizType | null> {
  const artistType = await getArtistType(artistID)
  if (artistType === 1) {
    return null
  }

  const relationships = await getartistArtistLinks(artistID)

  if (relationships.length < 4) {
    return null
  }
  const linkIds = relationships.map(linkID => linkID.link)
  const linksData = await getLinksData(linkIds)
  const filteredData = linksData.filter(link => link.attribute_count > 0 && link.begin_date_year)
  if (filteredData.length < 4) {
    return null
  }
  const artistName = await getArtistName(artistID)
  const chosenLink = filteredData[randomNumber(filteredData.length)] as LinkData
  const chosenLinkAttrs = await getLinkAttributes(chosenLink.id)
  const chosenAttr = chosenLinkAttrs[randomNumber(chosenLinkAttrs.length)] as number

  const chosenAttrName = await getAttributeName(chosenAttr)
  const removeDuplicates = filteredData.filter(async  (link) => {
    !(await getLinkAttributes(link.id)).includes(chosenAttr)
  })
  if (removeDuplicates.length < 4) {
    return null
  }
  const chosenArtistID = relationships.filter(rel => rel.link === chosenLink.id)[0]!.entity0
  const correct_answer = await getArtistName(chosenArtistID)
  const startYear = chosenLink.begin_date_year
  const endYear = chosenLink.ended === false ? "current times" : chosenLink.end_date_year

  const otherNamesIDsfiltered = removeDuplicates.filter(name => name !== chosenLink).map(id => id.id)
  shuffleArray(otherNamesIDsfiltered)
  const others = otherNamesIDsfiltered.slice(0, 3)

  const otherArtistIds = relationships.filter(id => others.includes(id.link) ).map(id => id.entity0)

  const otherArtistNames = await getArtistNames(otherArtistIds)

  let question = ""
  const answers = [...otherArtistNames, correct_answer]
  question = chosenAttrName === "original" ? `Who was a founding member of ${artistName}?` : `Who played the role of ${chosenAttrName} for ${artistName} from ${startYear} to ${endYear} ?`

  return {
    question,
    correct_answer,
    answers
  }
}
