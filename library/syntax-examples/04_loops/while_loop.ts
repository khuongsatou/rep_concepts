// while_loop.ts

export function sumNumbersUpToLimit(limit: number): number {
    let result: number = 0;
    let counter: number = 1;
  
    while (counter <= limit) {
      result += counter;
      counter++;
    }
  
    return result;
  }
  
  export function findFirstMultipleOfThree(startingNumber: number): number {
    let currentNumber: number = startingNumber;
  
    while (currentNumber % 3 !== 0) {
      currentNumber++;
    }
  
    return currentNumber;
  }
  