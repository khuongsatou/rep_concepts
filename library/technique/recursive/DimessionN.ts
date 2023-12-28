export function getArrayDimensions(arr: any): number {
  if (Array.isArray(arr) && arr.length > 0) {
    const innerDimension = getArrayDimensions(arr[0]);
    return innerDimension + 1;
  } else {
    return 0; // Đây là mảng 1 chiều
  }
}

// Ví dụ sử dụng
const array1DDDD = [1, 2, 3];
const array2DDDD = [
  [1, 2, 3],
  [4, 5, 6],
];
const array3DDDD = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

console.log(getArrayDimensions(array1DDDD)); // Kết quả: 1
console.log(getArrayDimensions(array2DDDD)); // Kết quả: 2
console.log(getArrayDimensions(array3DDDD)); // Kết quả: 3
