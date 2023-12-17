// closures.test.ts
import { expect } from "chai";
import { outerFunction } from "./closures";

describe("Closures Test Suite", () => {
  it("should create a closure and access outer variable", () => {
    // Tạo closure với outerValue là 10
    const closureInstance = outerFunction(10);
    // Gọi closure với innerValue là 5
    const result = closureInstance(5);

    // Kết quả là 10 (outerValue) + 5 (innerValue) = 15
    expect(result).to.equal(15);
  });

  it("should create another closure with a different outer variable", () => {
    // Tạo closure khác với outerValue là 20
    const closureInstance = outerFunction(20);

    // Gọi closure với innerValue là 8
    const result = closureInstance(8);

    // Kết quả là 20 (outerValue) + 8 (innerValue) = 28
    expect(result).to.equal(28);
  });
});
