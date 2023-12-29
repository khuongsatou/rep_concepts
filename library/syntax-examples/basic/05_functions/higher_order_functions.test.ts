// higher_order_functions.test.ts
import { expect } from "chai";
import { add, subtract, multiply, divide, performOperation } from "./higher_order_functions";

describe("Higher-Order Functions Test Suite", () => {
  it("should add two numbers", () => {
    const result = performOperation(add, 5, 3);
    expect(result).to.equal(8);
  });

  it("should subtract two numbers", () => {
    const result = performOperation(subtract, 8, 3);
    expect(result).to.equal(5);
  });

  it("should multiply two numbers", () => {
    const result = performOperation(multiply, 4, 6);
    expect(result).to.equal(24);
  });

  it("should divide two numbers", () => {
    const result = performOperation(divide, 10, 2);
    expect(result).to.equal(5);
  });

  it("should handle division by zero", () => {
    const result = performOperation(divide, 5, 0);
    expect(result).to.be.NaN;
  });
});
