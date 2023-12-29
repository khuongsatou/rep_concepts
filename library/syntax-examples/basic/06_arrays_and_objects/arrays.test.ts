// tests/arrays.test.ts

import { expect } from "chai";
import {
  sumArray,
  findMaxNumber,
  filterEvenNumbers,
  capitalizeAllStrings,
  mergeArrays,
} from "./arrays";

describe("Arrays Test Suite", () => {
  it("should correctly sum an array of numbers", () => {
    expect(sumArray([1, 2, 3, 4, 5])).to.equal(15);
    expect(sumArray([10, 20, 30])).to.equal(60);
  });

  it("should correctly find the maximum number in an array", () => {
    expect(findMaxNumber([5, 12, 8, 3])).to.equal(12);
    expect(findMaxNumber([50, 20, 30])).to.equal(50);
  });

  it("should correctly filter even numbers from an array", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5])).to.deep.equal([2, 4]);
    expect(filterEvenNumbers([10, 15, 20, 25])).to.deep.equal([10, 20]);
  });

  it("should correctly capitalize all strings in an array", () => {
    expect(capitalizeAllStrings(["apple", "banana", "cherry"])).to.deep.equal([
      "APPLE",
      "BANANA",
      "CHERRY",
    ]);
    expect(capitalizeAllStrings(["javascript", "typescript"])).to.deep.equal([
      "JAVASCRIPT",
      "TYPESCRIPT",
    ]);
  });

  it("should correctly merge two arrays", () => {
    expect(mergeArrays([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
    expect(mergeArrays(["a", "b"], ["c", "d"])).to.deep.equal(["a", "b", "c", "d"]);
  });
});
