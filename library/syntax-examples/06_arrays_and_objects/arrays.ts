// arrays.ts

export function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  export function findMaxNumber(numbers: number[]): number {
    return Math.max(...numbers);
  }
  
  export function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
  }
  
  export function capitalizeAllStrings(strings: string[]): string[] {
    return strings.map((str) => str.toUpperCase());
  }
  
  export function mergeArrays(arr1: any[], arr2: any[]): any[] {
    return arr1.concat(arr2);
  }
  