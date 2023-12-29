// do_while_loop.ts

export function sumNumbersUntilThreshold(threshold: number): number {
    let result: number = 0;
    let counter: number = 1;
  
    do {
      result += counter;
      counter++;
    } while (counter <= threshold);
  
    return result;
  }
  
  export function findFirstMultipleOfFour(startingNumber: number): number {
    let currentNumber: number = startingNumber;
  
    do {
      currentNumber++;
    } while (currentNumber % 4 !== 0);
  
    return currentNumber;
  }
  