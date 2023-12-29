// basic_functions.ts

export function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  export function multiplyNumbers(a: number, b: number): number {
    return a * b;
  }
  
  export function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  export function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  
  export function capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  