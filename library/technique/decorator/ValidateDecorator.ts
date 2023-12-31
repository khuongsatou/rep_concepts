export function validateStringLength(min: number, max: number): any {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = () => value;

    const setter = (newValue: string) => {
      if (newValue.length >= min && newValue.length <= max) {
        value = newValue;
      } else {
        throw new Error(`Invalid length for ${key}`);
        // return null;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export class Person {
  @validateStringLength(2, 10)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("John Doe");
console.log(person.name); // Outputs: John Doe

// This will throw an error
try {
  person.name = "J"; // Throws: Invalid length for name
} catch (error:any) {
  console.error(error.message);
}
