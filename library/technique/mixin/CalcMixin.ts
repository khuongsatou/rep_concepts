const MathMixinCalc = {
    add(a, b) {
      return a + b;
    },
    multiply(a, b) {
      return a * b;
    }
  };
  
  // Sử dụng mixin
  const calculatorMinx = {};
  Object.assign(calculatorMinx, MathMixin);
  
  console.log((calculatorMinx as any).add(2, 3));      // Output: 5
  console.log((calculatorMinx as any).multiply(2, 3)); // Output: 6
  