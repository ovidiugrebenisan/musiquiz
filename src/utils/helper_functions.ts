
export function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex: number;
  let temporaryValue: T;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex] as T;
    array[currentIndex] = array[randomIndex] as T;
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function generateAnswers(correct_answer: number): number[] {
  const answers: number[] = [];
  let random = 0;
    const min = correct_answer - 5
    const max = correct_answer + 5
  while (answers.length < 3) {
    const delta = Math.round(Math.random());
    if (delta === 0) {
      random = Math.floor(Math.random() * (correct_answer - min ) + min);
    } else {
      random = Math.ceil(Math.random() * (max - correct_answer ) + correct_answer)
    }
    if (answers.includes(random)) {
      continue;
    }
    answers.push(random);
  }
  console.log(answers)
  answers.push(correct_answer)
  return answers;
}
