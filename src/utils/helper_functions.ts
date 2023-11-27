
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


export function generateAnswerswhichYear(correct_answer: number, min: number, max:number): number[] {
  const answers: number[] = [];
  let random = 0;
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
  answers.push(correct_answer)
  return answers;
}


export function randomNumber(upperLimit: number): number {
  return Math.floor(Math.random() * upperLimit)
}

export function arrayIntersection(arr1: number[], arr2: number[]) {
  const set = new Set(arr2);
  return arr1.filter(value => set.has(value));
}
