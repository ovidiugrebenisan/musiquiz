import { api } from "~/utils/api";
import Link from "next/link";
import { AnswerButton } from "~/components/AnswerButton";

export default function Quiz() {
  const { data: artistData, isLoading: artistLoading } =
    api.mbdb.getChosenArtist.useQuery();
  const artistPicked = artistData as string;

  const { data: shuffledArrayData, isLoading: shuffledArrayLoading } =
    api.mbdb.getAnswers.useQuery(artistPicked, {
      refetchOnWindowFocus: false,
      enabled: !!artistPicked,
    });
  const shuffledArray = shuffledArrayData as number[];

  const isLoading = artistLoading || shuffledArrayLoading;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative h-screen w-screen bg-quiz bg-cover saturate-0">
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
