import { useState } from "react";

interface AnswerButtonProps {
  option: number | string;
  correct: number | string;
}

export function AnswerButton(props: AnswerButtonProps) {
  const [isCorrectAnswer, setCorrectAnswer] = useState<boolean | null >(null);
  function handleClick() {
    const isCorrect = props.option === props.correct;
    setCorrectAnswer(isCorrect);
  }

  let buttonColor = "bg-white"
  if (isCorrectAnswer === true) {
    buttonColor = "bg-green-500"
  } else if (isCorrectAnswer === false) {
    buttonColor = "bg-red-500"
  }

  return (
    <button
      className={`${buttonColor} text-center font-metropolis text-[38px] font-extrabold leading-normal text-black`}
      onClick={handleClick}
    >
      {props.option}
    </button>
  );
}
