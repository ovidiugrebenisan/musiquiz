import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

type Props = {
  ButtonLabel: string;
  Answer: string;
  disabled: boolean;
  set_disabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TextAnswerButton(props: Props) {
  const [checkResponse, setCheckResponse] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)


  function handleClick() {
    setCheckResponse(true);
  }
  const queryResult = api.mbdb.getArtistQuizAnswer.useQuery(props.Answer, {
    enabled: checkResponse,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (queryResult.isSuccess) {
      setIsCorrect(queryResult.data);
      setCheckResponse(false)
      props.set_disabled(true)
    }
  }, [queryResult, props]);

  const backgroundColorClass = clsx({
    "bg-green-500": isCorrect === false,
    "bg-red-500": isCorrect === true,
    "bg-white": isCorrect === null,
  });
  return (
    <button
      className={`relative h-[4.93vh] w-[38vw] rounded-[36.92px] ${backgroundColorClass}`}
      onClick={() => handleClick()}
      disabled={props.disabled}
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
