import type { ArtistQuizType } from "../definitions";
import {
  getArtistType,
  getLinkData,
  getartistArtistLinks,
  getArtistName,
  getLinkAttributes,
  getAttributeName,
} from "../data";
import { randomNumber, shuffleArray } from "~/utils/helper_functions";
import type { LinkData } from "../definitions";

export async function whoWasInstrumentist(
  artistID: number,
): Promise<ArtistQuizType | null> {
  const artistType = await getArtistType(artistID);

  if (artistType === 1) {
    return null;
  }

  const relationships = await getartistArtistLinks(artistID);

  if (relationships.length < 4) {
    return null;
  }
  const linkIds = relationships.map((linkID) => linkID.link);

  const linksData = await Promise.all(
    linkIds.map(async (link) => {
      return await getLinkData(link);
    }),
  );

  const filteredData = linksData.filter(
    (link) => link.attribute_count > 0 && link.begin_date_year,
  );

  if (filteredData.length < 4) {
    return null;
  }
  const artistName = await getArtistName(artistID);

  const chosenLink = filteredData[
    randomNumber(filteredData.length)
  ] as LinkData;

  const chosenLinkAttrs = await getLinkAttributes(chosenLink.id);

  const chosenAttr = chosenLinkAttrs[
    randomNumber(chosenLinkAttrs.length)
  ] as number;

  const chosenAttrName = await getAttributeName(chosenAttr);

  const removeDuplicates = (
    await Promise.all(
      filteredData.map(async (link) => {
        return {
          link,
          attrs: await getLinkAttributes(link.id),
        };
      }),
    )
  )
    .filter((item) => !item.attrs.includes(chosenAttr))
    .map((item) => item.link);

  if (removeDuplicates.length < 4) {
    return null;
  }
  const chosenArtistID = relationships.filter(
    (rel) => rel.link === chosenLink.id,
  )[0]!.entity0;
  const correct_answer = await getArtistName(chosenArtistID);
  const startYear = chosenLink.begin_date_year;
  const endYear =
    chosenLink.ended === false ? "current times" : chosenLink.end_date_year;

  const otherNamesIDsfiltered = removeDuplicates
    .filter((name) => name !== chosenLink)
    .map((id) => id.id);
  shuffleArray(otherNamesIDsfiltered);
  const others = otherNamesIDsfiltered.slice(0, 3);

  const otherArtistIds = relationships
    .filter((id) => others.includes(id.link))
    .map((id) => id.entity0);

  const otherArtistNames = await Promise.all(
    otherArtistIds.map(async (id) => {
      return await getArtistName(id);
    }),
  );

  let question = "";

  const answers = [...otherArtistNames, correct_answer];

  question =
    chosenAttrName === "original"
      ? `Who was a founding member of ${artistName}?`
      : `Who played the role of ${chosenAttrName} for ${artistName} from ${startYear} to ${endYear} ?`;

  return {
    question,
    correct_answer,
    answers,
  };
}
