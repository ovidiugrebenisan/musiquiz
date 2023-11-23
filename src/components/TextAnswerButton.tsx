import { clsx } from "clsx";

type Props = {
  ButtonLabel: string;
  Answer: string 
  handleClick: (answer:string, label: string) => void;
  status: { 
    label?: string,
    is_correct?: boolean
  }
};

export function TextAnswerButton(props: Props) {
  return (
    <button
      className={clsx("relative h-[4.93vh] w-[38vw] rounded-[36.92px] ", {
        "bg-green-500": props.status.is_correct && props.status.label === props.ButtonLabel,
        "bg-red-500": !props.status.is_correct && props.status.label === props.ButtonLabel,
        "bg-white": props.status.is_correct === undefined,
      })}
      onClick={ () => props.handleClick(props.Answer, props.ButtonLabel)}
    >
      <div className="tracking-[-0.615px absolute left-[3.5vw] top-[0.6vh] flex  h-[3.66vh] w-[3.66vh] flex-col  items-center justify-center rounded-full bg-zinc-300">
        <div className=" h-[1vw] w-[0.89vw] font-metropolis text-lg font-semibold uppercase  tracking-wide text-zinc-800">
          {props.ButtonLabel}
        </div>
      </div>
      <div className="absolute left-[7.3vw] top-[1.26vh] font-metropolis text-2xl font-extrabold uppercase tracking-[-0.615px] text-zinc-800">
        {props.Answer}
      </div>
    </button>
  );
}
