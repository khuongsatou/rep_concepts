import { getArrayDimensions } from './DimessionN'; // Đường dẫn tới file của bạn

describe('getArrayDimensions', () => {
  it('should return 1 for a 1D array', () => {
    const array1DDDD = [1, 2, 3];
    expect(getArrayDimensions(array1DDDD)).toBe(1);
  });

  it('should return 2 for a 2D array', () => {
    const array2DDDD = [[1, 2, 3], [4, 5, 6]];
    expect(getArrayDimensions(array2DDDD)).toBe(2);
  });

  it('should return 3 for a 3D array', () => {
    const array3DDDD = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    expect(getArrayDimensions(array3DDDD)).toBe(3);
  });
});
