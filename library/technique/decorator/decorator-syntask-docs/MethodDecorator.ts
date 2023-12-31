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

function enumerable(value: boolean): any {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
    console.log("In File: MethodDecorator.ts, Line: 20", target, propertyKey);
    console.log("In File: MethodDecorator.ts, Line: 20", value); // Thực thi khi gọi hàm
  };
}

const greet = new Greeter("Khương");

console.log("In File: MethodDecorator.ts, Line: 25", greet.greet());
