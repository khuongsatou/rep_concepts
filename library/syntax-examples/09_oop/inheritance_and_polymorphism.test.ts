// tests/inheritance_and_polymorphism.test.ts

import { expect } from "chai";
import { Circle, Square } from "./inheritance_and_polymorphism";

describe("Inheritance and Polymorphism Test Suite", () => {
  it("should correctly calculate the area of a circle", () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).to.closeTo(78.54, 0.01); // So sánh với sai số 0.01
  });

  it("should correctly calculate the area of a square", () => {
    const square = new Square(4);
    expect(square.calculateArea()).to.equal(16);
  });

  it("should correctly display information about a circle", () => {
    const circle = new Circle(5);
    expect(circle.displayInfo()).to.equal("This is a circle.");
  });

  it("should correctly display information about a square", () => {
    const square = new Square(4);
    expect(square.displayInfo()).to.equal("This is a square.");
  });
});
