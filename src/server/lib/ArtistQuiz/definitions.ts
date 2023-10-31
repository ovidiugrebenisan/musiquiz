export type NumberQuestion = {
    question: string;
    answers: number[];
    correct_answer: number;
  };
  
  export type StringQuestion = {
    question: string;
    answers: string[];
    correct_answer: string;
  };
  
export   type Result<T, E = string> =
    | { type: "success"; value: T }
    | { type: "failure"; error: E };