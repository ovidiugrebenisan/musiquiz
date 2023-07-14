import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Quiz() {
  const [artistData, setArtistData] = useState("");
  useEffect(() => {
    const artistPicked = localStorage.getItem("artistPicked");
    if (artistPicked) setArtistData(artistPicked);
  }, []);
  const options = api.mbdb.getArtistAlbum.useQuery(artistData);

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
        href="/signin"
        className="absolute right-[180px] top-[75px]
        font-metropolis text-[27px] font-black leading-normal text-white"
      >
        Sign In
      </Link>
      <p
        className="absolute left-1/2 top-1/4 h-[110px] w-[1160px] -translate-x-1/2 -translate-y-1/2
    text-center font-metropolis text-[64px] font-black leading-normal text-white"
      >
        Which band wrote the song In A Gadda Da Vida?
      </p>
      <div className=" gap-[15px] absolute bottom-1/4 left-1/2 flex h-[320px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col">
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
          Iron Butterfly
        </button>
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
          Journey
        </button>
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
          REO SpeedWagon
        </button>
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
          The Night Flight Orchestra
        </button>
      </div>
    </div>
  );
}
