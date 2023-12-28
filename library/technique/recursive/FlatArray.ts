export function customFlatten(arr: any[]): any[] {
  const flattenedArray: any[] = [];

  function flattenHelper(subArray: any[]): void {
    subArray.forEach((element) => {
      if (Array.isArray(element)) {
        flattenHelper(element);
      } else {
        flattenedArray.push(element);
      }
    });
  }

  flattenHelper(arr);
  return flattenedArray;
}

// Ví dụ sử dụng
const nestedArrayy = [1, [2, [3, 4]], [5, 6]];
const flatArray = customFlatten(nestedArrayy);
console.log(flatArray);
