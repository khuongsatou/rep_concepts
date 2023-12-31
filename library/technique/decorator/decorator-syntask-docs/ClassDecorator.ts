@sealed()
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function sealed(): any {
  return function sealed(constructor: Function): any {
    console.log("In File: ClassDecorator.ts, Line: 15", "CALL"); // Tạo sao nó app vào trước khi
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log("In File: ClassDecorator.ts, Line: 16", "CALLED");
  };
}

const bugReport = new BugReport("HI");

// console.log("In File: ClassDecorator.ts, Line: 21",bugReport);
