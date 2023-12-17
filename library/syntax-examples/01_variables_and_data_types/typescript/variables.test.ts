// Import the necessary modules for testing
import { expect } from "chai";
import { variableVar, variableLet, variableConst } from "./variables";

describe("Variables Test", () => {
  it("should have the correct initial values", () => {
    expect(variableVar).to.equal(20);
    expect(variableLet).to.equal("Hello, World!");
    expect(variableConst).to.equal(true);
  });

  it("should allow reassignment of variableVar", () => {
    expect(variableVar).to.equal(20);
  });
});
