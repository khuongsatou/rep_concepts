// tests/arithmetic_operators.test.ts

import { expect } from "chai";
import {
  sum,
  difference,
  product,
  quotient,
  remainder,
} from "./arithmetic_operators";

describe("Arithmetic Operators Test Suite", () => {
  it("should perform addition correctly", () => {
    expect(sum).to.equal(8);
  });

  it("should perform subtraction correctly", () => {
    expect(difference).to.equal(5);
  });

  it("should perform multiplication correctly", () => {
    expect(product).to.equal(12);
  });

  it("should perform division correctly", () => {
    expect(quotient).to.equal(5);
  });

  it("should calculate remainder correctly", () => {
    expect(remainder).to.equal(1);
  });
});
