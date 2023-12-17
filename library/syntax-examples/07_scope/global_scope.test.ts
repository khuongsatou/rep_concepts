// tests/global_scope.test.ts

import { expect } from "chai";
import { getGlobalVariable, setGlobalVariable } from "./global_scope";

describe("Global Scope Test Suite", () => {
  it("should correctly get the global variable", () => {
    expect(getGlobalVariable()).to.equal("I am a global variable");
  });

  it("should correctly set the global variable", () => {
    setGlobalVariable("New value for the global variable");
    expect(getGlobalVariable()).to.equal("New value for the global variable");
  });
});
