
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

export function generateAnswers(base: number): number[] {
  const answers: number[] = [];
  let random = 0;
    const min = base - 6
    const max = base + 6
  while (answers.length < 3) {
    const delta = Math.round(Math.random());
    if (delta === 0) {
      random = Math.round(Math.random() * Math.floor(base - min ) + min);
    } else {
      random = Math.round(Math.random() * (max - base ) + base)
    }
    if (answers.includes(random)) {
      continue;
    }
    answers.push(random);
  }
  console.log(answers)
  answers.push(base)
  return answers;
}
