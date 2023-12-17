// tests/data_types.test.ts

import { expect } from "chai";
import {
  numberVar,
  stringVar,
  booleanVar,
  numberArray,
  stringArray,
  person,
  tupleVar,
  colorVar,
  dynamicVar,
} from "./data_types";

describe("Data Types Test Suite", () => {
  it("should have the correct value for numberVar", () => {
    expect(numberVar).to.equal(42);
  });

  it("should have the correct value for stringVar", () => {
    expect(stringVar).to.equal("TypeScript");
  });

  it("should have the correct value for booleanVar", () => {
    expect(booleanVar).to.equal(true);
  });

  it("should have the correct value for numberArray", () => {
    expect(numberArray).to.deep.equal([1, 2, 3]);
  });

  it("should have the correct value for stringArray", () => {
    expect(stringArray).to.deep.equal(["a", "b", "c"]);
  });

  it("should have the correct value for person", () => {
    expect(person).to.deep.equal({ name: "John", age: 30 });
  });

  it("should have the correct value for tupleVar", () => {
    expect(tupleVar).to.deep.equal(["example", 42]);
  });

  it("should have the correct value for colorVar", () => {
    expect(colorVar).to.equal(0); // Color.Red
  });

  it("should have the correct value for dynamicVar", () => {
    expect(dynamicVar).to.equal("dynamic value");
  });
});
