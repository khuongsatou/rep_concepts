// tests/do_while_loop.test.ts

import { expect } from "chai";
import { sumNumbersUntilThreshold, findFirstMultipleOfFour } from "./do_while_loop";

describe("Do-While Loop Test Suite", () => {
  it("should correctly sum numbers until a threshold", () => {
    expect(sumNumbersUntilThreshold(5)).to.equal(15); // 1 + 2 + 3 + 4 + 5 = 15
    expect(sumNumbersUntilThreshold(10)).to.equal(55); // 1 + 2 + ... + 10 = 55
  });

  it("should correctly find the first multiple of four", () => {
    expect(findFirstMultipleOfFour(8)).to.equal(12); // 12 is the first multiple of four greater than 8
    expect(findFirstMultipleOfFour(10)).to.equal(12); // 12 is the first multiple of four greater than 10
  });
});
