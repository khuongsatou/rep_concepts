// constructor_functions.test.ts
import { expect } from "chai";
import { createPerson } from "./constructor_functions";

describe("Constructor Functions Test Suite", () => {
  it("should create an instance of Person and say hello", () => {
    const person: any = {};
    createPerson.call(person, "John", 25);
    const result = person.sayHello();
    expect(result).to.equal("Hello, my name is John and I am 25 years old.");
  });
});
