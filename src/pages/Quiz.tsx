import { api } from "~/utils/api";
import Link from "next/link";
import { useAtomValue } from "jotai/react";
import { artistAtom } from "./Search";
import { useEffect, useState } from "react";
import { AnswerButton } from "~/components/AnswerButton";

function getRandomNumber(lowerLimit: number, upperLimit: number): number {
  const range: number = upperLimit - lowerLimit + 1;

  const randomNumber: number = Math.floor(Math.random() * range) + lowerLimit;

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
  const [albumYear, setAlbumYear] = useState(0);
  const [artistName, setArtistName] = useState("");
  const res = api.mbdb.getArtistAlbum.useQuery(artistPicked, {
    staleTime: Infinity,
    retry: false,
  });

  useEffect(() => {
    const correct_year = res.data?.begin_date_year;
    const artist_name = res.data?.name;
    if (typeof correct_year === "number") {
      setAlbumYear(correct_year);
    }
    if (typeof artist_name === "string") {
      setArtistName(artist_name);
    }
  }, [res.data]);
  let higher_year = 0;
  let lower_year = 0;
  let another_year = 0;
  if (albumYear) {
    higher_year = getRandomNumber(albumYear, albumYear + 5);
    lower_year = getRandomNumber(albumYear - 5, albumYear);
    another_year = getRandomNumber(albumYear - 10, albumYear - 5);
  }

  const answers: number[] = [albumYear, higher_year, lower_year, another_year];
  const shuffledArray = shuffle(answers);
  return (
    <div className="relative h-screen w-screen bg-quiz bg-cover saturate-0">
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
        In which year was {artistName} founded?
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
