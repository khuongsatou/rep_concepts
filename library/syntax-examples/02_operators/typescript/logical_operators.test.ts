// tests/logical_operators.test.ts

import { expect } from "chai";
import { andResult, orResult, notResult } from "./logical_operators";

describe("Logical Operators Test Suite", () => {
  it("should perform logical AND correctly", () => {
    expect(andResult).to.equal(false);
  });

  it("should perform logical OR correctly", () => {
    expect(orResult).to.equal(true);
  });

  it("should perform logical NOT correctly", () => {
    expect(notResult).to.equal(false);
  });
});
