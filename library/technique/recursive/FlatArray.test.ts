import { customFlatten } from './FlatArray'; // Thay đổi đường dẫn tới file của bạn

describe('customFlatten', () => {
  it('should flatten a 1D array', () => {
    const array1D = [1, 2, 3];
    expect(customFlatten(array1D)).toEqual([1, 2, 3]);
  });

  it('should flatten a 2D array', () => {
    const array2D = [1, [2, [3, 4]], [5, 6]];
    expect(customFlatten(array2D)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should flatten a 3D array', () => {
    const array3D = [1, [2, [3, [4, 5]]], [6, [7, 8]]];
    expect(customFlatten(array3D)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
