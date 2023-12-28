const memoizedSumm: { [key: string]: number } = {};

function calculateSumm(row: number[], columnIndex: number): number {
  const key = `${row.toString()}-${columnIndex}`;

  if (memoizedSum[key] !== undefined) {
    return memoizedSum[key];
  }

  // Tính toán tổng và lưu vào memoization
  const sum = row.reduce((acc, element) => acc + element, 0);
  memoizedSum[key] = sum;

  return sum;
}

// Sử dụng hàm đã được memoization
const array2DD: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const totalSumm: number = array2D.reduce((acc, row) => acc + calculateSumm(row, 0), 0);

console.log(totalSumm); // Kết quả: 45
