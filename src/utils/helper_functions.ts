export function getRandomNumber(
    lowerLimit: number,
    upperLimit: number,
    exception: number,
  ): number {
    const range: number = upperLimit - lowerLimit + 1;
  
    let randomNumber: number = Math.floor(Math.random() * range) + lowerLimit;
  
    if (randomNumber === exception) {
      randomNumber = getRandomNumber(lowerLimit, upperLimit, exception);
    }
    return randomNumber;
  }
  
 export  function shuffleArray<T>(array: T[]): T[] {
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