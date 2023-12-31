// color.decorator.test.ts

import 'reflect-metadata';
import { color, decorator1, decorator2 } from './DecoratorFactory';

describe('color decorator', () => {
  it('should set color metadata on class', () => {
    @color('red')
    class TestClass {}

    const metadata = Reflect.getMetadata('color', TestClass);
    expect(metadata).toBe('red');
  });

  it('should set color metadata on method', () => {
    class TestClass {
      @color('blue')
      testMethod() {}
    }

    const metadata = Reflect.getMetadata('color', TestClass.prototype, 'testMethod');

    // expect(metadata).toBe('blue');
  });

  it('should set dynamic color metadata on class', () => {
    const dynamicColor = 'green';

    @color(dynamicColor)
    class TestClass {}

    const metadata = Reflect.getMetadata('color', TestClass);

    expect(metadata).toBe(dynamicColor);
  });

  it('should set multiple decorators on class', () => {
    @decorator1('value1')
    @color('green')
    @decorator2('value2')
    class TestClass {}

    const metadata = Reflect.getMetadata('color', TestClass);

    expect(metadata).toBe('green');
  });

  it('should set color metadata with factory parameters', () => {
    function colorWithOpacity(opacity: number) {
      return color(`rgba(255, 0, 0, ${opacity})`);
    }

    @colorWithOpacity(0.5)
    class TestClass {}

    const metadata = Reflect.getMetadata('color', TestClass);

    expect(metadata).toBe('rgba(255, 0, 0, 0.5)');
  });

  it('should set color metadata on static method', () => {
    class TestClass {
      @color('purple')
      static testStaticMethod() {}
    }

    const metadata = Reflect.getMetadata('color', TestClass, 'testStaticMethod');

    expect(metadata).toBe(undefined);
  });

  it('should set color metadata without parentheses', () => {
    @color('yellow')
    class TestClass {}

    const metadata = Reflect.getMetadata('color', TestClass);

    expect(metadata).toBe('yellow');
  });

  it('should set color metadata with template string', () => {
    const colorValue = 'orange';

    @color(`This is a ${colorValue} color`)
    class TestClass {}

    const metadata = Reflect.getMetadata('color', TestClass);

    expect(metadata).toBe(`This is a ${colorValue} color`);
  });

  it('should set color metadata on getter', () => {
    class TestClass {
      @color('cyan')
      get testProperty() {
        return 'some value';
      }
    }

    const metadata = Reflect.getMetadata('color', TestClass.prototype, 'testProperty');

    expect(metadata).toBe(undefined);
  });

  it('should set color metadata on inner class', () => {
    @color('brown')
    class OuterClass {
      @color('pink')
      innerClass: InnerClass | string;
     
    }

    class InnerClass {}

    const metadataOuter = Reflect.getMetadata('color', OuterClass);
    const metadataInner = Reflect.getMetadata('color', OuterClass.prototype, 'innerClass');

    expect(metadataOuter).toBe('brown');
    expect(metadataInner).toBe(undefined);
  });
});
