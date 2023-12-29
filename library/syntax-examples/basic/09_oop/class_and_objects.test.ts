// tests/class_and_objects.test.ts

import { expect } from "chai";
import { Rectangle } from "./class_and_objects";

describe("Class and Objects Test Suite", () => {
  it("should correctly calculate the area and perimeter of a rectangle", () => {
    const rectangle = new Rectangle(4, 5);

    expect(rectangle.getArea()).to.equal(20);
    expect(rectangle.getPerimeter()).to.equal(18);
  });

  it("should correctly calculate the area and perimeter of a square", () => {
    const square = new Rectangle(3, 3);

    expect(square.getArea()).to.equal(9);
    expect(square.getPerimeter()).to.equal(12);
  });
});
