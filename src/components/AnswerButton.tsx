interface AnswerButtonProps {
    answer: number;
}


export function AnswerButton(props:AnswerButtonProps) {
    return (
        <button className="bg-white text-center font-metropolis text-[38px] font-extrabold leading-normal text-black">
        {props.answer}
      </button>
    )
}