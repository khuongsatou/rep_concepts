// tests/while_loop.test.ts

import { expect } from "chai";
import { sumNumbersUpToLimit, findFirstMultipleOfThree } from "./while_loop";

describe("While Loop Test Suite", () => {
  it("should correctly sum numbers up to a limit", () => {
    expect(sumNumbersUpToLimit(5)).to.equal(15); // 1 + 2 + 3 + 4 + 5 = 15
    expect(sumNumbersUpToLimit(10)).to.equal(55); // 1 + 2 + ... + 10 = 55
  });

  it("should correctly find the first multiple of three", () => {
    expect(findFirstMultipleOfThree(8)).to.equal(9); // 9 is the first multiple of three greater than 8
    expect(findFirstMultipleOfThree(12)).to.equal(12); // 12 is already a multiple of three
  });
});
