// constructor_functions.ts
interface Person {
    name: string;
    age: number;
    sayHello: () => string;
  }
  
  function createPerson(this: Person, name: string, age: number) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function (): string {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
  }
  
  export { createPerson };
  