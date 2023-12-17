// for_loop.ts

export function sumNumbers(n: number): number {
    let result: number = 0;
  
    for (let i = 1; i <= n; i++) {
      result += i;
    }
  
    return result;
  }
  
  export function multiplyNumbers(arr: number[]): number {
    let result: number = 1;
  
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i];
    }
  
    return result;
  }
  