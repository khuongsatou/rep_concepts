import 'reflect-metadata';

// // Decorator for a class
// export function classDecorator(target: any) {
//   // You can perform actions on the class constructor (target) here
//   console.log(`Class decorated: ${target.name}`);
// }

// // Decorator for a property
// export function propertyDecorator(target: any, key: string) {
//   // You can perform actions on the class instance and property key here
//   const metadataValue = `Metadata for ${key}`;
//   Reflect.defineMetadata('customMetadataKey', metadataValue, target, key);
// }

// // Decorator for a method
// export function methodDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   // You can perform actions on the class instance, method key, and method descriptor here
//   console.log(`Method decorated: ${key}`);
// }


export function classDecorator(target: any) {
  // You can perform actions on the class constructor (target) here
  Reflect.defineMetadata('classMetadataKey', 'Class metadata value', target);
}

export function propertyDecorator(target: any, key: string) {
  // You can perform actions on the class instance and property key here
  Reflect.defineMetadata('propertyMetadataKey', 'Property metadata value', target, key);
}

export function methodDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // You can perform actions on the class instance, method key, and method descriptor here
  const originalMethod = descriptor.value;

  descriptor.value = function () {
    console.log('Modified method');
    originalMethod.apply(this, arguments);
  };
}



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
  
// Applying decorators

@classDecorator
export class ExampleClass {
  @propertyDecorator
  exampleProperty: string | undefined;

  @methodDecorator
  exampleMethod() {
    console.log('Method called');
  }
}

// Create an instance of the class
const exampleInstance = new ExampleClass();

// Access metadata from the property
const metadataValue = Reflect.getMetadata('customMetadataKey', exampleInstance, 'exampleProperty');
console.log(metadataValue);  // Output: Metadata for exampleProperty

// Call the decorated method
exampleInstance.exampleMethod();
