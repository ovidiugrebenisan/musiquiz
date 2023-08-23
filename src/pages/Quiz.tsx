import { api } from "~/utils/api";
import Link from "next/link";
import { useAtomValue } from "jotai/react";
import { artistAtom } from "./Search";
import { AnswerButton } from "~/components/AnswerButton";



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
  const artistPicked = useAtomValue(artistAtom);
  const albumYear = api.mbdb.getArtistData.useQuery(artistPicked, {
    staleTime: Infinity,
    retry: false,
  }).data as number;

  const randomCoverArt = api.mbdb.getArtistRandomCoverArt.useQuery(artistPicked, {
    staleTime: Infinity,
    retry: false
  }).data



  const higher_year = getRandomNumber(albumYear - 1, albumYear + 1, albumYear);
  const lower_year = getRandomNumber(albumYear - 2, albumYear - 7, albumYear);
  const another_year = getRandomNumber(albumYear + 2, albumYear + 7, albumYear);

  const answers: number[] = [albumYear, higher_year, lower_year, another_year];
  const shuffledArray = shuffle(answers);
  return (
    <div className="relative h-screen w-screen bg-cover saturate-0"
    style={{backgroundImage: `url(${randomCoverArt})`}}>
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
