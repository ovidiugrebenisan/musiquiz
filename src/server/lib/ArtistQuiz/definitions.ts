
export type ArtistQuizType = {
  question: string;
  answers: string[];
  correct_answer: string
}

export type ArtistQuizFrontend = {
  question: string;
  answers: string[]
}


export type LinkData = {
  id: number;
  begin_date_year: number | null;
  end_date_year: number | null;
  attribute_count: number;
  ended: boolean;
};


