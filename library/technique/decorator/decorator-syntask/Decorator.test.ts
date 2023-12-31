// decorators.test.ts

import 'reflect-metadata';
import { classDecorator, propertyDecorator, methodDecorator,decorator1,decorator2 } from './Decorator';

describe('Decorators', () => {
  it('should apply class decorator', () => {
    @classDecorator
    class TestClass {}

    // Access metadata from the class
    const metadataValue = Reflect.getMetadata('classMetadataKey', TestClass);
    expect(metadataValue).toBe('Class metadata value');
    // expect(metadataValue).toBe(undefined);
  });

  it('should apply property decorator', () => {
    class TestClass {
      @propertyDecorator
      testProperty: string | undefined;
    }

    // Access metadata from the property
    const metadataValue = Reflect.getMetadata('propertyMetadataKey', new TestClass(), 'testProperty');
    expect(metadataValue).toBe('Property metadata value');
    // expect(metadataValue).toBe(undefined);
  });

  it('should apply method decorator', () => {
    class TestClass {
      @methodDecorator
      testMethod() {
        console.log('Original method');
      }
    }

    // Spy on the console.log method
    const spy = jest.spyOn(console, 'log');

    // Call the decorated method
    new TestClass().testMethod();

    // Assert that the method was called
    expect(spy).toHaveBeenCalledWith('Modified method');
  });

  it('should apply multiple decorators on class', () => {
    @decorator1('value1')
    @decorator2('value2')
    @classDecorator
    class TestClass {}

    const metadata1 = Reflect.getMetadata('decorator1', TestClass);
    const metadata2 = Reflect.getMetadata('decorator2', TestClass);
    const classMetadata = Reflect.getMetadata('classMetadataKey', TestClass);

    expect(metadata1).toBe('value1');
    expect(metadata2).toBe('value2');
    expect(classMetadata).toBe('Class metadata value');
  });

  // Add more tests for edge cases or specific scenarios as needed
});

// decorators.ts

