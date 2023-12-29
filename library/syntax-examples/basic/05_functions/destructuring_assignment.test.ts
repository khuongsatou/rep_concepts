// destructuring_assignment.test.ts
import { expect } from "chai";
import { getAddress } from "./destructuring_assignment";

describe("Destructuring Assignment Test Suite", () => {
  it("should destructure the address and return a string", () => {
    const person = {
      name: "John",
      age: 25,
      address: {
        city: "New York",
        country: "USA",
      },
    };

    const result = getAddress(person);
    expect(result).to.equal("I live in New York, USA.");
  });
});
