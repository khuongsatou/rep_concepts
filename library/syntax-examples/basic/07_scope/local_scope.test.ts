// tests/local_scope.test.ts

import { expect } from "chai";
import { calculateSum, calculateProduct } from "./local_scope";

describe("Local Scope Test Suite", () => {
  it("should correctly calculate the sum", () => {
    expect(calculateSum(3, 4)).to.equal(7);
    expect(calculateSum(-2, 5)).to.equal(3);
  });

  it("should correctly calculate the product", () => {
    expect(calculateProduct(2, 3)).to.equal(6);
    expect(calculateProduct(0, 8)).to.equal(0);
  });
});
