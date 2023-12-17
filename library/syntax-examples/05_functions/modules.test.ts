// modules.test.ts
import { expect } from "chai";
import * as math from "./modules";

describe("Modules Test Suite", () => {
  it("should add two numbers using module", () => {
    const result = math.add(5, 3);
    expect(result).to.equal(8);
  });

  it("should subtract two numbers using module", () => {
    const result = math.subtract(10, 4);
    expect(result).to.equal(6);
  });

  it("should multiply two numbers using module", () => {
    const result = math.multiply(4, 6);
    expect(result).to.equal(24);
  });

  it("should divide two numbers using module", () => {
    const result = math.divide(20, 5);
    expect(result).to.equal(4);
  });

  it("should throw an error when dividing by zero using module", () => {
    expect(() => math.divide(10, 0)).to.throw("Cannot divide by zero");
  });
});
