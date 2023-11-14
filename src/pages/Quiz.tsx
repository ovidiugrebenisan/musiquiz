import { api } from "~/utils/api";
import Link from "next/link";
import { AnswerButton } from "~/components/AnswerButton";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { TextAnswerButton } from "~/components/TextAnswerButton";

export default function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const router = useRouter();
  const { artistID, artistName } = router.query;

  if (
    !artistID ||
    !artistName ||
    Array.isArray(artistID) ||
    Array.isArray(artistName)
  ) {
    return <div>Loading...</div>;
  }
  const quiz = api.mbdb.constructArtistQuiz.useQuery(
    { artistID, artistName },
    {
      refetchOnWindowFocus: false,
    },
  );

  if (quiz.isFetching || quiz.isLoading) {
    return <div>Loading...</div>;
  }

  if (!quiz.data || questionNumber >= quiz.data.length) {
    return <Link href="/Search">Back to Search</Link>;
  }

  const quizData = quiz.data[questionNumber];

  const artistPicked = quizData?.question;
  const answers = quizData?.answers as number[] | string[];

  return (
    <>
      <Image src="/paper.png" alt="background image" fill={true} />
      <div className="absolute right-[9.8vw] top-[30.75vh] h-[42.18vh] w-[27.43vw] origin-center rotate-12 bg-white">
        <Image src="/Tape.png" alt="sticky tape" width={186} height={186} />
      </div>

      <p className="absolute left-[10.5vw] top-[36vh] h-[7vh] w-[44.72.9vw] font-metropolis text-[40.62px] font-extrabold leading-[39.9px]  text-zinc-800">
        {artistPicked}
      </p>
      <div className=" absolute left-[11.25vw] top-[48.9vh] flex h-[23vh] w-[38.4vw] flex-col gap-[0.5vh]">
        <TextAnswerButton ButtonLabel="A" Answer={answers[0]} />
        <TextAnswerButton ButtonLabel="B" Answer={answers[1]} />
        <TextAnswerButton ButtonLabel="C" Answer={answers[2]} />
        <TextAnswerButton ButtonLabel="D" Answer={answers[3]} />
      </div>
    </>
  );
}
