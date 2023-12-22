// arrayUtilities.test.ts
import { expect } from 'chai';
import { findMinMax, filterArray, calculateSum, shuffleArray, isPalindrome } from './arrayUtilities';

describe('Array Utilities', () => {
  // Test for findMinMax function
  it('should find Min and Max in an array', () => {
    const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    expect(findMinMax(numbers)).to.deep.equal({ min: 1, max: 9 });
  });

  // Test for filterArray function
  it('should filter even numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(filterArray(numbers, (num) => num % 2 === 0)).to.deep.equal([2, 4, 6, 8]);
  });

  // Test for calculateSum function
  it('should calculate sum of numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(calculateSum(numbers)).to.equal(15);
  });

  // Test for shuffleArray function
  it('should shuffle an array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray([...originalArray]);
    expect(shuffledArray).to.not.deep.equal(originalArray);
  });

  // Test for isPalindrome function
  it('should check if an array is palindrome', () => {
    const palindromeArray = [1, 2, 3, 2, 1];
    const nonPalindromeArray = [1, 2, 3, 4, 5];
    expect(isPalindrome(palindromeArray)).to.equal(true);
    expect(isPalindrome(nonPalindromeArray)).to.equal(false);
  });
});
