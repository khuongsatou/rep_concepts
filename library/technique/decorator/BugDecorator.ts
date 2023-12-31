@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: Function):any {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  console.log("In File: BugDecorator.ts, Line: 14","HI Sealed");
}

const bugReport = new BugReport("HI");

console.log("In File: BugDecorator.ts, Line: 18", bugReport);
