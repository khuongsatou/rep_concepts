// tests/for_loop.test.ts

import { expect } from "chai";
import { sumNumbers, multiplyNumbers } from "./for_loop";

describe("For Loop Test Suite", () => {
  it("should correctly sum numbers", () => {
    expect(sumNumbers(5)).to.equal(15); // 1 + 2 + 3 + 4 + 5 = 15
    expect(sumNumbers(10)).to.equal(55); // 1 + 2 + ... + 10 = 55
  });

  it("should correctly multiply numbers in an array", () => {
    expect(multiplyNumbers([2, 3, 4])).to.equal(24); // 2 * 3 * 4 = 24
    expect(multiplyNumbers([5, 2, 8])).to.equal(80); // 5 * 2 * 8 = 80
  });
});
