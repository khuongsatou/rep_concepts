// arrow_functions.ts
const add = (a: number, b: number): number => {
    return a + b;
  };
  
  const multiply = (a: number, b: number): number => a * b;
  
  const greet = (name: string): string => `Hello, ${name}!`;
  
  // Arrow function with no parameters
  const getRandomNumber = (): number => Math.random();
  
  export { add, multiply, greet, getRandomNumber };
  