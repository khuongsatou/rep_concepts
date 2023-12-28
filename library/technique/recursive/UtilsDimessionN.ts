// Duyệt qua Tất Cả Các Phần Tử (N Duyệt Lồng Nhau):
export function iterateNestedArray(arr: any, callback: (element: any) => void): void {
  if (Array.isArray(arr)) {
    arr.forEach((element) => {
      iterateNestedArray(element, callback);
    });
  } else {
    callback(arr);
  }
}

const array1 = [1, [2, [3, 4]], [5, 6]];

// Sử dụng:
iterateNestedArray(array1, (element) => {
  console.log(element);
});

//Tạo Mảng Mới (N Duyệt Lồng Nhau):
export function mapNestedArray(arr: any, callback: (element: any) => any): any {
  if (Array.isArray(arr)) {
    return arr.map((element) => mapNestedArray(element, callback));
  } else {
    return callback(arr);
  }
}

// Sử dụng
const array2 = [1, [2, [3, 4]], [5, 6]];

const newArray = mapNestedArray(array2, (element) => element * 2);
console.log(newArray);

export function flattenNestedArray(arr: any): any[] {
  return Array.isArray(arr) ? arr.flat(Infinity) : [arr];
}

const nestedArray = [1, [2, [3, 4]], [5, 6]];
const flatArrayy = flattenNestedArray(nestedArray);
console.log(flatArrayy);
