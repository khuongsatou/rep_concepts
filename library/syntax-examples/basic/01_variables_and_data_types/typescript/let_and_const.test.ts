// let_and_const.test.ts
import { expect } from "chai";
import { letExample, constExample } from "./let_and_const";

describe("let and const Test Suite", () => {
  it("should demonstrate the use of 'let'", () => {
    letExample();
    // Không thể truy cập x ở đây vì nó đã hết phạm vi trong hàm letExample
    // expect(() => console.log(x)).to.throw("x is not defined");
  });

  it("should demonstrate the use of 'const'", () => {
    constExample();
    // Không thể truy cập y ở đây vì nó đã hết phạm vi trong hàm constExample
    // expect(() => console.log(y)).to.throw("y is not defined");
  });
});
