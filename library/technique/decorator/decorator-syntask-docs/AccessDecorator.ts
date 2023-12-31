class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}

function configurable(value: boolean):any {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("In File: AccessDecorator.ts, Line: 26",target,propertyKey,descriptor);
    descriptor.configurable = value;
  };
}

const point = new Point(0, 0);

console.log("In File: AccessDecorator.ts, Line: 30", point.x, point.y);
