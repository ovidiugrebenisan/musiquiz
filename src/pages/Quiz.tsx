import { api } from "~/utils/api";
import Link from "next/link";
import { AnswerButton } from "~/components/AnswerButton";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

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
  const correctAnswer = quizData?.correct_answer as number | string;

  const handleAnswerSelected = () => {
    setIsAnswerSelected(true);
  };

  const handleNext = () => {
    setIsAnswerSelected(false);
    setQuestionNumber((prev) => prev + 1);
  };

  return (
    <>
      <Image src="/paper.png" alt="background image" fill={true} />
      <p className="absolute left-[14.84vw] top-[25.625vh] h-[5vh] w-[62.9] font-metropolis text-[40.62px] font-extrabold leading-[39.9px]  text-zinc-800">
        {artistPicked}
      </p>
      <div className=" absolute bottom-1/4 left-1/2 flex h-[320px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col gap-[15px]">
        <AnswerButton
          option={answers[0] as number | string}
          correct={correctAnswer}
          onAnswerSelected={handleAnswerSelected}
          onProceedToNext={handleNext}
          disabled={isAnswerSelected}
        />
        <AnswerButton
          option={answers[1] as number | string}
          correct={correctAnswer}
          onAnswerSelected={handleAnswerSelected}
          onProceedToNext={handleNext}
          disabled={isAnswerSelected}
        />
        <AnswerButton
          option={answers[2] as number | string}
          correct={correctAnswer}
          onAnswerSelected={handleAnswerSelected}
          onProceedToNext={handleNext}
          disabled={isAnswerSelected}
        />
        <AnswerButton
          option={answers[3] as number | string}
          correct={correctAnswer}
          onAnswerSelected={handleAnswerSelected}
          onProceedToNext={handleNext}
          disabled={isAnswerSelected}
        />
      </div>
    </>
  );
}
