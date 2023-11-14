import Image from "next/image";
import Flag from "react-flagkit";
import { useRouter } from "next/router";

export interface SearchResultsProps {
  artistID: number;
  countryCode: string;
  description: string;
  imageURL: string;
  artistName: string;
  countryName: string;
}

export function SearchResult(props: SearchResultsProps) {
  const router = useRouter();

  let imageUrl = props.imageURL;
  if (!props.imageURL) {
    imageUrl = "/default.png";
  }
  return (
    <button
      onClick={() =>
        void router.push(
          "/Quiz?artistID=" +
            encodeURIComponent(props.artistID) +
            "&artistName=" +
            encodeURIComponent(props.artistName)
        )
      }
      className="group relative h-[322px] w-[640px] bg-cover "
    >
      <Image
        src={imageUrl}
        fill={true}
        alt="Artist image"
        className="saturate-0 transition duration-300 ease-in-out group-hover:blur-md"
      ></Image>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <p className="font-['Metropolis'] text-[64px] font-normal text-white">
          {props.description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 flex items-end p-4 transition duration-300 ease-in-out group-hover:opacity-0">
        <p
          className="mr-4 max-w-[20rem] flex-shrink-0 text-center font-metropolis
        text-[4rem] font-black leading-normal text-white"
        >
          {props.countryName}
        </p>
        <Flag
          country={props.countryCode}
          className="h-[4.1875rem] w-[4.1875rem] flex-shrink-0 -translate-y-[1rem] transform"
        />
      </div>
    </button>
  );
}
