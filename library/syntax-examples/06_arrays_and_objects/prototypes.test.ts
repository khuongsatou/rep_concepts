// prototypes.test.ts
import { expect } from "chai";
import { Animal, Dog } from "./prototypes";

describe("Prototypes Test Suite", () => {
  it("should create an instance of Animal and speak", () => {
    const animal = new Animal("Generic Animal");
    const result = animal.speak();
    expect(result).to.equal("Generic Animal makes a sound.");
  });

  it("should create an instance of Dog, bark, and speak", () => {
    const dog = new Dog("Buddy", "Labrador");
    const barkResult = dog.bark();
    const speakResult = dog.speak();

    expect(barkResult).to.equal("Buddy barks.");
    expect(speakResult).to.equal("Buddy makes a sound.");
  });
});
