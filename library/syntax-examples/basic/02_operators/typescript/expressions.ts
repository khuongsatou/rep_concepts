// expressions.ts
const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => a - b;

const multiply = (a: number, b: number): number => a * b;

const divide = (a: number, b: number): number | string => (b !== 0 ? a / b : "Cannot divide by zero");

export { add, subtract, multiply, divide };
