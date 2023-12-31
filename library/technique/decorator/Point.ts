function configurable(value: boolean):any {
    return function (
      target: any,
      propertyKey: string,
      descriptor?: PropertyDescriptor
    ) :any{

      console.log("In File: Point.ts, Line: 8",descriptor);
      console.log("In File: Point.ts, Line: 8",value);
      descriptor!.configurable = value;
    };
  }

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




console.log("In File: Point.ts, Line: 31",new Point(5,20).x);