// expressions.test.ts
import { expect } from "chai";
import { add, subtract, multiply, divide } from "./expressions";

describe("Expressions Test Suite", () => {
  it("should add two numbers", () => {
    const result = add(5, 3);
    expect(result).to.equal(8);
  });

  it("should subtract two numbers", () => {
    const result = subtract(8, 3);
    expect(result).to.equal(5);
  });

  it("should multiply two numbers", () => {
    const result = multiply(4, 6);
    expect(result).to.equal(24);
  });

  it("should divide two numbers", () => {
    const result = divide(10, 2);
    expect(result).to.equal(5);
  });

  it("should handle division by zero", () => {
    const result = divide(5, 0);
    expect(result).to.equal("Cannot divide by zero");
  });
});
