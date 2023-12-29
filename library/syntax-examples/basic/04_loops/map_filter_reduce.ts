// map_filter_reduce.ts
function doubleArray(numbers: number[]): number[] {
    return numbers.map((num) => num * 2);
  }
  
  function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
  }
  
  function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  // 0 +1 =1 
  // 1 +2 = 3
  // 3 +3 = 6
  // 6 +4 = 10
  // 10 + 5 = 15
  export { doubleArray, filterEvenNumbers, sumArray };
  