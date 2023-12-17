// local_scope.ts

export function calculateSum(a: number, b: number): number {
    // Biến sum chỉ có hiệu lực trong phạm vi hàm
    const sum = a + b;
    return sum;
  }
  
  export function calculateProduct(x: number, y: number): number {
    // Biến product chỉ có hiệu lực trong phạm vi hàm
    const product = x * y;
    return product;
  }
  