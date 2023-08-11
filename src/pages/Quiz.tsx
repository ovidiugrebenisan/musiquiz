import { api } from "~/utils/api";
import Link from "next/link";
import { useAtomValue } from "jotai/react";
import { artistAtom } from "./Search";

function getRandomNumber(lowerLimit: number, upperLimit: number): number {
  // Calculate the range of numbers
  const range: number = upperLimit - lowerLimit + 1;

  // Generate a random number within the range
  const randomNumber: number = Math.floor(Math.random() * range) + lowerLimit;

  return randomNumber;
}

export default function Quiz() {
  const artistPicked = useAtomValue(artistAtom);

  const res = api.mbdb.getArtistAlbum.useQuery(artistPicked);
  const correct_year = res.data?.begin_date_year;
  const artist_name = res.data?.name;
  let higher_year = 0;
  let lower_year = 0;
  let another_year = 0;
  if (correct_year) {
    higher_year = getRandomNumber(correct_year, correct_year + 5);
    lower_year = getRandomNumber(correct_year - 5, correct_year);
    another_year = getRandomNumber(correct_year - 10, correct_year - 5);
  }

  return (
    <div className="relative h-screen w-screen bg-quiz bg-cover">
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
        In which year was {artist_name} founded?
      </p>
      <div className=" absolute bottom-1/4 left-1/2 flex h-[320px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[15px]">
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
          {correct_year}
        </button>
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
          {lower_year}
        </button>
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
          {higher_year}
        </button>
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
          {another_year}
        </button>
      </div>
    </div>
  );
}
