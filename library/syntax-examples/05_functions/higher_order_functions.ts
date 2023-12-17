// higher_order_functions.ts
interface MathOperation {
    (a: number, b: number): number;
  }
  
  function add(a: number, b: number): number {
    return a + b;
  }
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  function divide(a: number, b: number): number {
    return b !== 0 ? a / b : NaN;
  }
  
  function performOperation(operation: MathOperation, a: number, b: number): number {
    return operation(a, b);
  }
  
  export { add, subtract, multiply, divide, performOperation };
  