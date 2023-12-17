// tests/basic_functions.test.ts

import { expect } from "chai";
import {
  addNumbers,
  multiplyNumbers,
  greet,
  isEven,
  capitalizeString,
} from "./basic_functions";

describe("Basic Functions Test Suite", () => {
  it("should correctly add two numbers", () => {
    expect(addNumbers(3, 7)).to.equal(10);
    expect(addNumbers(-5, 12)).to.equal(7);
  });

  it("should correctly multiply two numbers", () => {
    expect(multiplyNumbers(4, 5)).to.equal(20);
    expect(multiplyNumbers(0, 8)).to.equal(0);
  });

  it("should correctly greet a person", () => {
    expect(greet("Alice")).to.equal("Hello, Alice!");
    expect(greet("Bob")).to.equal("Hello, Bob!");
  });

  it("should correctly determine if a number is even", () => {
    expect(isEven(6)).to.equal(true);
    expect(isEven(3)).to.equal(false);
  });

  it("should correctly capitalize a string", () => {
    expect(capitalizeString("javascript")).to.equal("Javascript");
    expect(capitalizeString("typescript")).to.equal("Typescript");
  });
});
