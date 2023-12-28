import { mergeArrays } from './MergeArray'; // Đường dẫn tới file của bạn

describe('mergeArrays', () => {
  it('should merge 2D arrays into an array of objects', () => {
    const integerArray2D: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const stringArray2D: string[][] = [
      ['apple', 'banana', 'cherry'],
      ['date', 'fig', 'grape'],
      ['kiwi', 'lemon', 'mango'],
    ];

    const expectedMergedArray = [
      { numberValue: 1, stringValue: 'apple' },
      { numberValue: 2, stringValue: 'banana' },
      { numberValue: 3, stringValue: 'cherry' },
      { numberValue: 4, stringValue: 'date' },
      { numberValue: 5, stringValue: 'fig' },
      { numberValue: 6, stringValue: 'grape' },
      { numberValue: 7, stringValue: 'kiwi' },
      { numberValue: 8, stringValue: 'lemon' },
      { numberValue: 9, stringValue: 'mango' },
    ];

    const mergedArray = mergeArrays(integerArray2D, stringArray2D);
    expect(mergedArray).toEqual(expectedMergedArray);
  });
});
