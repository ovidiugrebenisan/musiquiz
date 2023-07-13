import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import Link  from "next/link"

export default function Quiz() {
  const [artistData, setArtistData] = useState("");
  useEffect(() => {
    const artistPicked = localStorage.getItem("artistPicked");
    if (artistPicked) setArtistData(artistPicked);
  },[]);
  const options = api.mbdb.getArtistAlbum.useQuery(artistData);

  return (
    <div className="bg-quiz w-screen h-screen bg-cover">
      <div className="flex w-[163px] h-[26px] flex-col flex-shrink
                        text-white font-metropolis text-[27px]
                        non-italic font-black leading-normal
                        left-104 top-68" >
      <Link href="/">musiquiz.co</Link>  
      </div>
      <div>Test Data: {options.data?.name}</div>   
    </div>
  );
}

