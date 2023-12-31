function first():any {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
    };
  }
   
  function second():any {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("second(): called");
    };
  }
   
  class ExampleClass {
    @first()
    @second()
    method() {
      console.log("In File: OrderDecorator.ts, Line: 19","HIH");
    }
  }

const exampleClass = new ExampleClass();
exampleClass.method();