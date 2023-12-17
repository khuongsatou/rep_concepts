"use strict";
// tests/arithmetic_operators.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const arithmetic_operators_1 = require("./arithmetic_operators");
describe("Arithmetic Operators Test Suite", () => {
    it("should perform addition correctly", () => {
        (0, chai_1.expect)(arithmetic_operators_1.sum).to.equal(8);
    });
    it("should perform subtraction correctly", () => {
        (0, chai_1.expect)(arithmetic_operators_1.difference).to.equal(5);
    });
    it("should perform multiplication correctly", () => {
        (0, chai_1.expect)(arithmetic_operators_1.product).to.equal(12);
    });
    it("should perform division correctly", () => {
        (0, chai_1.expect)(arithmetic_operators_1.quotient).to.equal(5);
    });
    it("should calculate remainder correctly", () => {
        (0, chai_1.expect)(arithmetic_operators_1.remainder).to.equal(1);
    });
});
