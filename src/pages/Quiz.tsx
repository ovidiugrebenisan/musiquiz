import { api } from "~/utils/api";
import { useRouter } from "next/router";
import Image from "next/image";
import { TextAnswerButton } from "~/components/TextAnswerButton";
import { useEffect, useState } from "react";
import type { ArtistQuizFrontend } from "~/server/lib/ArtistQuiz/definitions";

export default function Quiz() {
  const router = useRouter();
  const { artistID, artistImage } = router.query;
  const [quiz, setQuiz] = useState<ArtistQuizFrontend | null>(null);
  const [nextQuiz, setNextquiz] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [resetButtonColor, setResetButtonColor] = useState(0)

  const generateQuiz = api.mbdb.constructArtistQuiz.useQuery(
    artistID as string,
    {
      refetchOnWindowFocus: false,
      enabled: router.isReady,
    },
  );

  const quizData = api.mbdb.getArtistQuiz.useQuery(nextQuiz, {
    enabled: generateQuiz.isSuccess,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (quizData.data && quizData.isSuccess) {
      setButtonDisabled(false)
      setResetButtonColor(prev => prev + 1)
      setQuiz(quizData.data);
    } else if (quizData.data === null && nextQuiz !== 0) {
      void router.push("/Search")
    }
  }, [quizData.isSuccess]);


  const artistLogo = api.mbdb.getArtistLogo.useQuery(artistID as string, {
    refetchOnWindowFocus: false,
    enabled: router.isReady,
  });

  if (artistLogo.isLoading || generateQuiz.isLoading) {
    return <div> Loading...</div>;
  }

  let logoSrc = "/default.png";
  if (artistLogo.data) {
    logoSrc = artistLogo.data;
  }

  if (generateQuiz.error) {
    return <div>Something went wrong</div>;
  }

  let imageSrc = "/default.png";
  if (artistImage && !Array.isArray(artistImage) && artistImage !== "null") {
    imageSrc = artistImage;
  }

  return (
    <>
      <Image src="/paper.png" alt="background image" fill={true} />
      <div className="fixed  right-[9.8vw] top-[30.75vh] h-[42.18vh] w-[27.43vw] origin-center rotate-[7.45deg] bg-white">
        <div className="relative ">
          <div className="absolute left-1/2 top-0 h-[12.91vw] w-[12.91vw] origin-center -translate-x-1/2 -translate-y-1/2 rotate-[5.75deg] transform">
            <Image src="/Tape.png" alt="paper sticker" fill={true} />
          </div>
          <div className="absolute left-[2.3vw] top-[4.4vh] h-[23.63vh] w-[22.84vw]  ">
            <Image src={imageSrc} alt="Artist Image" fill={true} />
          </div>
          <div className="absolute left-[3.65vw] top-[29.5vh] h-[11vh] w-[20.13vw]">
            <Image src={logoSrc} alt="artist logo" fill={true} />
          </div>
        </div>
      </div>

      <p className="absolute left-[10.5vw] top-[36vh] h-[7vh] w-[44.72vw] font-metropolis text-[40.62px] font-extrabold leading-[39.9px]  tracking-[-1.015px] text-zinc-800">
        {quiz?.question}
      </p>
      <div className=" absolute left-[11.25vw] top-[48.9vh] flex h-[23vh] w-[38.4vw] flex-col gap-[0.5vh]">
        <TextAnswerButton
          ButtonLabel="A"
          Answer={quiz?.answers[0] as string}
          disabled={buttonDisabled}
          set_disabled={setButtonDisabled}
          next_quiz={setNextquiz}
          reset_button={resetButtonColor}
        />
        <TextAnswerButton
          ButtonLabel="B"
          Answer={quiz?.answers[1] as string}
          disabled={buttonDisabled}
          set_disabled={setButtonDisabled}
          next_quiz={setNextquiz}
          reset_button={resetButtonColor}
        />
        <TextAnswerButton
          ButtonLabel="C"
          Answer={quiz?.answers[2] as string}
          disabled={buttonDisabled}
          set_disabled={setButtonDisabled}
          next_quiz={setNextquiz}
          reset_button={resetButtonColor}
        />
        <TextAnswerButton
          ButtonLabel="D"
          Answer={quiz?.answers[3] as string}
          disabled={buttonDisabled}
          set_disabled={setButtonDisabled}
          next_quiz={setNextquiz}
          reset_button={resetButtonColor}
        />
      </div>
    </>
  );
}
