type Props = {
  ButtonLabel: string;
  Answer: string | number | undefined
};

export function TextAnswerButton(props: Props) {
  return (

    
    <button className="relative h-[4.93vh] w-[38vw] rounded-[36.92px] bg-white">
      <div className="absolute flex justify-center flex-col items-center  left-[3.5vw] top-[0.6vh] h-[3.66vh]  w-[3.66vh] rounded-full bg-zinc-300 tracking-[-0.615px">
         <div className=" w-[0.89vw] h-[1vw] text-zinc-800 text-lg font-semibold font-metropolis  uppercase tracking-wide">{props.ButtonLabel}</div>
      </div>
      <div className="absolute left-[7.3vw] top-[1.26vh] font-metropolis text-zinc-800 uppercase text-2xl font-extrabold tracking-[-0.615px]">{props.Answer}</div>
    </button>
  );
}
