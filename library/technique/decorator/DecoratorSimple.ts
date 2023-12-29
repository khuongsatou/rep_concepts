function enumerable(value: boolean):any {
  return function (target?: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
    descriptor!.enumerable = value;
    console.log("In File: DecoratorSimple.ts, Line: 4",descriptor);
    console.log("In File: DecoratorSimple.ts, Line: 4",value);
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
 
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}


let greeter = new Greeter("Khương");
console.log("In File: DecoratorSimple.ts, Line: 21",greeter.greet());