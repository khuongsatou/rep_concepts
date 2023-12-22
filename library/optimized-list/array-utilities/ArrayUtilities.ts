// arrayUtilities.ts

interface MinMaxResult {
    min: number;
    max: number;
  }
  //Hàm Tìm Phần Tử Lớn Nhất và Nhỏ Nhất:
  function findMinMax(arr: number[]): MinMaxResult | string {
    if (arr.length === 0) {
      return "Mảng rỗng.";
    }
  
    let min: number = arr[0];
    let max: number = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
  
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }
  //Hàm Lọc Các Phần Tử Theo Điều Kiện:
  function filterArray(arr: number[], condition: (num: number) => boolean): number[] {
    return arr.filter(condition);
  }
  //Hàm Tổng Các Phần Tử:
  function calculateSum(arr: number[]): number {
    return arr.reduce((acc, current) => acc + current, 0);
  }
  //Hàm Xáo Trộn Mảng:
  function shuffleArray(arr: number[]): number[] {
    return arr.sort(() => Math.random() - 0.5);
  }
  // Hàm Kiểm Tra Mảng Đối Xứng:
  function isPalindrome(arr: number[]): boolean {
    const reversedArray: number[] = [...arr].reverse();
    return JSON.stringify(arr) === JSON.stringify(reversedArray);
  }
  
  export { findMinMax, filterArray, calculateSum, shuffleArray, isPalindrome };
  