// tests/if_else_statements.test.ts

import { expect } from "chai";
import { isEvenNumber, getGrade } from "./if_else_statements";

describe("If-Else Statements Test Suite", () => {
  it("should correctly identify even numbers", () => {
    expect(isEvenNumber(4)).to.equal(true);
    expect(isEvenNumber(7)).to.equal(false);
  });

  it("should correctly determine grades", () => {
    expect(getGrade(95)).to.equal("A");
    expect(getGrade(85)).to.equal("B");
    expect(getGrade(75)).to.equal("C");
    expect(getGrade(65)).to.equal("D");
    expect(getGrade(55)).to.equal("F");
  });
});
