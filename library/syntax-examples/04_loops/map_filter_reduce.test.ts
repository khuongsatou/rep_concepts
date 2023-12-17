// map_filter_reduce.test.ts
import { expect } from "chai";
import { doubleArray, filterEvenNumbers, sumArray } from "./map_filter_reduce";

describe("Map, Filter, Reduce Test Suite", () => {
  it("should double each number in the array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = doubleArray(inputArray);
    expect(result).to.deep.equal([2, 4, 6, 8, 10]);
  });

  it("should filter even numbers in the array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = filterEvenNumbers(inputArray);
    expect(result).to.deep.equal([2, 4]);
  });

  it("should sum all numbers in the array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = sumArray(inputArray);
    expect(result).to.equal(15);
  });
});
