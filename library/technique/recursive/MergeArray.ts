const integerArray2D: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const stringArray2D: string[][] = [
  ["apple", "banana", "cherry"],
  ["date", "fig", "grape"],
  ["kiwi", "lemon", "mango"],
];

// Gộp mảng thành mảng object
// Trong file của bạn
export function mergeArrays(
  integerArray2D: number[][],
  stringArray2D: string[][]
): { numberValue: number; stringValue: string }[] {
  return integerArray2D
    .map((row, rowIndex) =>
      row.map((integerValue, columnIndex) => ({
        numberValue: integerValue,
        stringValue: stringArray2D[rowIndex][columnIndex],
      }))
    )
    .flat();
}



console.log(mergeArrays);
