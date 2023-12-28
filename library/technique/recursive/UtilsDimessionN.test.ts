import {
    iterateNestedArray,
    mapNestedArray,
    flattenNestedArray,
  } from './UtilsDimessionN'; // Thay đổi đường dẫn tới file của bạn
  
  describe('iterateNestedArray', () => {
    it('should iterate through all elements of a nested array', () => {
      const array1 = [1, [2, [3, 4]], [5, 6]];
      const result: any[] = [];
  
      iterateNestedArray(array1, (element) => {
        result.push(element);
      });
  
      const expected = [1, 2, 3, 4, 5, 6];
      expect(result).toEqual(expected);
    });
  });
  
  describe('mapNestedArray', () => {
    it('should create a new nested array by applying the callback', () => {
      const array2 = [1, [2, [3, 4]], [5, 6]];
  
      const newArray = mapNestedArray(array2, (element) => element * 2);
      const expected = [2, [4, [6, 8]], [10, 12]];
  
      expect(newArray).toEqual(expected);
    });
  });
  
  describe('flattenNestedArray', () => {
    it('should flatten a nested array', () => {
      const nestedArray = [1, [2, [3, 4]], [5, 6]];
  
      const flatArray = flattenNestedArray(nestedArray);
      const expected = [1, 2, 3, 4, 5, 6];
  
      expect(flatArray).toEqual(expected);
    });
  });
  