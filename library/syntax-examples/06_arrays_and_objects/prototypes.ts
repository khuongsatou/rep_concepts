// prototypes.ts
class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak(): string {
      return `${this.name} makes a sound.`;
    }
  }
  
  class Dog extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name);
      this.breed = breed;
    }
  
    bark(): string {
      return `${this.name} barks.`;
    }
  }
  
  export { Animal, Dog };
  