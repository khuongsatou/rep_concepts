interface MathOperations {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const MathMixin: MathOperations = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

// Sử dụng mixin
const calculator: MathOperations = { ...MathMixin };

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 2)); // Output: 3
