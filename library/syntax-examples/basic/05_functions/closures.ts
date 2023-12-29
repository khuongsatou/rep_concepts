// closures.ts
function outerFunction(outerValue: number) {
    // Hàm này là closure vì nó chứa biến outerValue từ phạm vi ngoài
    function innerFunction(innerValue: number): number {
      return outerValue + innerValue;
    }
  
    return innerFunction;
  }
  
  export { outerFunction };
  