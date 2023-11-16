import { api } from "~/utils/api";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { TextAnswerButton } from "~/components/TextAnswerButton";

export default function Quiz() {
  const router = useRouter();
  const { artistID, artistName, artistImage } = router.query;

  if (
    !artistID ||
    !artistName ||
    Array.isArray(artistID) ||
    Array.isArray(artistName)
  ) {
    return <div>Loading...</div>;
  }
  const artistLogo = api.mbdb.getArtistLogo.useQuery(artistID, {
    refetchOnWindowFocus: false,
  });
  const quiz = api.mbdb.constructArtistQuiz.useQuery(
    { artistID, artistName },
    {
      refetchOnWindowFocus: false,
    },
  );

  if (artistLogo.isFetching || artistLogo.isLoading) {
    return <div> Loading...</div>;
  }

  let logoSrc = "/default.png";
  if (artistLogo.data) {
    logoSrc = artistLogo.data;
  }

  if (quiz.isFetching || quiz.isLoading) {
    return <div>Loading...</div>;
  }

  if (quiz.error) {
    return <div>Something went wrong</div>
  }

  if (!quiz.data) {
    return <Link href="/Search">Back to Search</Link>;
  }

  const quizData = quiz.data;


  const artistPicked = quizData.question;
  const answers = quizData.answers;
  let imageSrc = "/default.png";
  if (artistImage && !Array.isArray(artistImage)) {
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
