import { api } from "~/utils/api";
import Link from "next/link";
import { useAtomValue } from "jotai/react";
import { artistAtom } from "./Search";
import { AnswerButton } from "~/components/AnswerButton";
import { type release } from "@prisma/client";
import { useEffect, useState } from "react";

function getRandomElement(arr: release[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex;
}

export interface CoverArt {
  images?: (ImagesEntity)[] | null;
  release: string;
}
export interface ImagesEntity {
  approved: boolean;
  back: boolean;
  comment: string;
  edit: number;
  front: boolean;
  id: number;
  image: string;
  thumbnails: Thumbnails;
  types?: (string)[] | null;
}
export interface Thumbnails {
  250: string;
  500: string;
  1200: string;
  large: string;
  small: string;
}


function getRandomNumber(
  lowerLimit: number,
  upperLimit: number,
  exception: number,
): number {
  const range: number = upperLimit - lowerLimit + 1;

  let randomNumber: number = Math.floor(Math.random() * range) + lowerLimit;

  if (randomNumber === exception) {
    randomNumber = getRandomNumber(lowerLimit, upperLimit, exception);
  }
  return randomNumber;
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex: number;
  let temporaryValue: T;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex] as T;
    array[currentIndex] = array[randomIndex] as T;
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function Quiz() {
  const [coverArt, setCoverArt] = useState<string | null>(null)
  const artistPicked = useAtomValue(artistAtom);
  const artistData = api.mbdb.getAristData.useQuery(artistPicked, {
    staleTime: Infinity,
    retry: false,
  }).data;

  let albumYear = 0;
  let artistId = 0;

  if (artistData && artistData.begin_date_year) {
    albumYear = artistData.begin_date_year;
  }

  if (artistData && artistData.id) {
    artistId = artistData.id;
  }

  const artistReleases = api.mbdb.getArtistReleases.useQuery(artistId, {
    staleTime: Infinity,
    retry: false,
    enabled: !!artistId
  }).data;
  let randomIndex = 0;
  let release;
  if (artistReleases) {
    randomIndex = getRandomElement(artistReleases);
    release = artistReleases[randomIndex];

  }

  const releaseID = release?.gid
  const coverArtURL = "https://coverartarchive.org/release/" + releaseID


  useEffect(() => {
    // Ensure there's a releaseID before fetching
    if (releaseID) {
        fetch(coverArtURL)
            .then((res) => res.json())
            .then((data: CoverArt) => {
                // Assuming the first image is the one you want.
                if (data.images && data.images.length > 0) {
                  const imageUrl = data.images?.[0]?.image ?? null;
                    setCoverArt(imageUrl);
                }
            })
            .catch((e) => {
                console.error("Error fetching cover art:", e);
            });
    }
}, []);

  console.log(coverArt)



  const higher_year = getRandomNumber(albumYear - 1, albumYear + 1, albumYear);
  const lower_year = getRandomNumber(albumYear - 2, albumYear - 7, albumYear);
  const another_year = getRandomNumber(albumYear + 2, albumYear + 7, albumYear);

  const answers: number[] = [albumYear, higher_year, lower_year, another_year];
  const shuffledArray = shuffle(answers);
  return (
    <div className="relative h-screen w-screen bg-cover saturate-0"
      style={{ backgroundImage: `url(${coverArt})`}}>
      <div className="absolute h-full w-full bg-black bg-opacity-25"> </div>
      <Link
        href="/"
        className="absolute left-[100px] top-[80px]
         font-metropolis text-[27px] font-black leading-normal text-white"
      >
        musiquiz.co
      </Link>
      <Link
        href="/signin"
        className=" absolute right-[365px] top-[75px]
        font-metropolis text-[27px] font-black leading-normal text-white"
      >
        Sign In
      </Link>
      <Link
        href="/signout"
        className="absolute right-[180px] top-[75px]
        font-metropolis text-[27px] font-black leading-normal text-white"
      >
        Sign Out
      </Link>
      <p
        className="absolute left-1/2 top-1/4 h-[110px] w-[1160px] -translate-x-1/2 -translate-y-1/2
                  text-center font-metropolis text-[64px] font-black leading-normal text-white"
      >
        In which year was {artistPicked} founded?
      </p>
      <div className=" absolute bottom-1/4 left-1/2 flex h-[320px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[15px]">
        <AnswerButton answer={shuffledArray[0] as number} />
        <AnswerButton answer={shuffledArray[1] as number} />
        <AnswerButton answer={shuffledArray[2] as number} />
        <AnswerButton answer={shuffledArray[3] as number} />
      </div>
    </div>
  );
}
