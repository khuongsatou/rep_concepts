// tests/objects.test.ts

import { expect } from "chai";
import { getPersonDetails, mergeObjects, getPropertyCount } from "./objects";

describe("Objects Test Suite", () => {
  it("should correctly get person details", () => {
    const person = { name: "Alice", age: 25, gender: "female" };
    expect(getPersonDetails(person)).to.equal("Alice is 25 years old and identifies as female.");
  });

  it("should correctly merge two objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(mergeObjects(obj1, obj2)).to.deep.equal({ a: 1, b: 3, c: 4 });
  });

  it("should correctly get the property count of an object", () => {
    const obj = { name: "John", age: 30, gender: "male" };
    expect(getPropertyCount(obj)).to.equal(3);
  });
});
