import { api } from "~/utils/api";
import Link from "next/link";
import { AnswerButton } from "~/components/AnswerButton";
import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();
  const { artistName } = router.query;
  if (!artistName || Array.isArray(artistName)) {
    return <div>Loading...</div>;
  }
  const quiz = api.mbdb.constructArtistQuiz.useQuery(artistName, {
    refetchOnWindowFocus: false
  });

  if (quiz.isFetching || quiz.isLoading) {
    return <div>Loading...</div>;
  }

  const artistPicked = quiz.data?.whichAlbum?.question as string
  const answers = quiz.data?.whichAlbum?.answers as number[] | string[]
  const correctAnswer = quiz.data?.whichAlbum?.correct_answer as number | string

  return (
    <div className="relative h-screen w-screen bg-gradient-to-t from-black to-white to-20% ">
      <div className="absolute h-full w-full bg-black opacity-80"></div>
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
                  text-center font-metropolis text-[64px] font-black leading-none text-white"
      >
        {artistPicked} 
      </p>
      <div className=" absolute bottom-1/4 left-1/2 flex h-[320px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[15px]">
        <AnswerButton
          option={answers[0] as number | string }
          correct={correctAnswer}
        />
        <AnswerButton
          option={answers[1] as number | string}
          correct={correctAnswer}
        />
        <AnswerButton
          option={answers[2] as number | string }
          correct={correctAnswer}
        />
        <AnswerButton
          option={answers[3] as number | string}
          correct={correctAnswer}
        />
      </div>
    </div>
  );
}
