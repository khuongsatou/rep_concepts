// template_literals.test.ts
import { expect } from "chai";
import { createMessage } from "./template_literals";

describe("Template Literals Test Suite", () => {
  it("should create a message using template literals", () => {
    const result = createMessage("John", 25);
    expect(result).to.equal("Hello, my name is John and I am 25 years old.");
  });

  it("should handle special characters in template literals", () => {
    const result = createMessage("Alice", 30);
    expect(result).to.equal("Hello, my name is Alice and I am 30 years old.");
  });
});
