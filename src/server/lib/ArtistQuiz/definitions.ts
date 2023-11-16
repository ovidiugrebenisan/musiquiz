export type ArtistPushQuiz = {
  question: string;
  answers: string[],
  correct_answer: string,
}
  
export type ArtistQuizUserFacing = {
  question: string;
  answers: string[];
  id: string
}

