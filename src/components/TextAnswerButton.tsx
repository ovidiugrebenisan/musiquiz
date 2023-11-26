import { clsx } from "clsx";
import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";

type Props = {
  ButtonLabel: string;
  Answer: string;
  disabled: boolean;
  set_disabled: React.Dispatch<React.SetStateAction<boolean>>;
  next_quiz: React.Dispatch<React.SetStateAction<number>>;
  reset_button: number
};

export function TextAnswerButton({
  ButtonLabel,
  Answer,
  disabled,
  set_disabled,
  next_quiz,
  reset_button,
}: Props) {
  const [checkResponse, setCheckResponse] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  function handleClick() {
    set_disabled(true);
    setCheckResponse(true);
  }
  const queryResult = api.mbdb.getArtistQuizAnswer.useQuery(Answer, {
    enabled: checkResponse,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (queryResult.isSuccess) {
      setIsCorrect(queryResult.data);
      setCheckResponse(false);
      const timer = setTimeout(() => {
        next_quiz((prevQuiz) => prevQuiz + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [queryResult.isSuccess]);

  useEffect(() => {
    setIsCorrect(null);
  }, [reset_button]);

  const backgroundColorClass = clsx({
    "bg-green-500": isCorrect === true,
    "bg-red-500": isCorrect === false,
    "bg-white": isCorrect === null,
  });
  return (
    <button
      className={`relative h-[4.93vh] w-[38vw] rounded-[36.92px] ${backgroundColorClass}`}
      onClick={() => handleClick()}
      disabled={disabled}
    >
      <div className="tracking-[-0.615px absolute left-[3.5vw] top-[0.6vh] flex  h-[3.66vh] w-[3.66vh] flex-col  items-center justify-center rounded-full bg-zinc-300">
        <div className=" h-[1vw] w-[0.89vw] font-metropolis text-lg font-semibold uppercase  tracking-wide text-zinc-800">
          {ButtonLabel}
        </div>
      </div>
      <div className="absolute left-[7.3vw] top-[1.26vh] font-metropolis text-2xl font-extrabold uppercase tracking-[-0.615px] text-zinc-800">
        {Answer}
      </div>
    </button>
  );
}
