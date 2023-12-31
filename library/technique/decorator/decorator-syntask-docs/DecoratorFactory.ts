// trong ngữ cảnh của decorators trong TypeScript, Reflect.defineMetadata thường được sử dụng để gán thông tin liên quan đến decorator cho các class, phương thức, hoặc thuộc tính.
import 'reflect-metadata';
// decorator1.decorator.ts
export function decorator1(value: string) {
  return function (target: any) {
    // This is the decorator logic
    // You can perform actions on 'target' and 'value' here
    Reflect.defineMetadata('decorator1', value, target);
  };
}

// decorator2.decorator.ts

export function decorator2(value: string) {
  return function (target: any, key?: string) {
    // This is the decorator logic
    // You can perform actions on 'target', 'value', and 'key' here
    const metadataKey = key || 'decorator2';
    Reflect.defineMetadata(metadataKey, value, target);
  };
}



export function color(value: string):any {
  return function (target: any) {
    // This is the decorator logic
    console.log("In File: DecoratorFactory.ts, Line: 34",value);
    console.log("In File: DecoratorFactory.ts, Line: 34",target);
    // You can perform actions on 'target' and 'value' here
    Reflect.defineMetadata('color', value, target);
    // return value;
  };
}


@color('red')
class TestClass {}

const metadata = Reflect.getMetadata('color', TestClass);
// expect(metadata).toBe('red');
console.log("In File: DecoratorFactory.ts, Line: 42",metadata);