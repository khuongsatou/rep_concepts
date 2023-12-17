
// arrow_functions.test.ts
import { expect } from "chai";
import { add, multiply, greet, getRandomNumber } from "./arrow_functions";

describe("Arrow Functions Test Suite", () => {
  it("should add two numbers using arrow function", () => {
    const result = add(5, 3);
    expect(result).to.equal(8);
  });

  it("should multiply two numbers using arrow function", () => {
    const result = multiply(4, 6);
    expect(result).to.equal(24);
  });

  it("should generate a greeting using arrow function", () => {
    const result = greet("John");
    expect(result).to.equal("Hello, John!");
  });

  it("should generate a random number using arrow function", () => {
    const result = getRandomNumber();
    expect(result).to.be.a("number");
  });
});
