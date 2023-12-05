import type { ArtistQuizType, LinkData } from "../definitions";
import {
  getArtistType,
  getartistArtistLinks,
  getLinkData,
  getArtistName,
  getLinkAttributes,
  getAttributeName,
} from "../data";
import { randomNumber, shuffleArray } from "~/utils/helper_functions";

export async function whatInstrumentPlayed(
  artistID: number,
): Promise<ArtistQuizType | null> {
  const artistType = await getArtistType(artistID);
  if (artistType === 1) {
    return null;
  }

  const relationships = await getartistArtistLinks(artistID);
  if (relationships.length === 0) {
    return null;
  }

  const linkIds = relationships.map((linkID) => linkID.link);
  const linksData = await Promise.all(
    linkIds.map(async (link) => {
      return await getLinkData(link);
    }),
  );
  const filteredData = linksData.filter((link) => link.attribute_count > 0);
  if (filteredData.length === 0) {
    return null;
  }
  const bandName = await getArtistName(artistID);
  const chosenLink = filteredData[
    randomNumber(filteredData.length)
  ] as LinkData;
  const chosenLinkAttrs = await getLinkAttributes(chosenLink.id);
  const chosenLinkAttrNames = (
    await Promise.all(
      chosenLinkAttrs.map(async (attr) => {
        const attrName = await getAttributeName(attr);
        return attrName;
      }),
    )
  ).filter((item) => item !== "original");
  const chosenAttr = chosenLinkAttrNames[
    randomNumber(chosenLinkAttrNames.length)
  ] as string;

  const otherAttrIDs = await Promise.all(
    filteredData.map(async (id) => {
      const attrid = await getLinkAttributes(id.id);
      return attrid;
    }),
  );

  const flattenedUniqueOptions = [...new Set(otherAttrIDs.flat())];
  const removeDuplicates = (
    await Promise.all(
      flattenedUniqueOptions.map(async (link) => {
        const attr = await getAttributeName(link);
        return attr;
      }),
    )
  ).filter((attr) => attr !== chosenAttr && attr !== "original");
  shuffleArray(removeDuplicates);
  const options = removeDuplicates.slice(0, 3);
  const answers = [...options, chosenAttr];
  const chosenArtistID = relationships.filter(
    (rel) => rel.link === chosenLink.id,
  )[0]!.entity0;
  const artistName = await getArtistName(chosenArtistID);

  const question = `What role did ${artistName} have during his time in ${bandName}?`;

  return {
    question,
    answers,
    correct_answer: chosenAttr,
  };
}
