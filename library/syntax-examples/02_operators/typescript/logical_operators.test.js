"use strict";
// tests/logical_operators.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const logical_operators_1 = require("./logical_operators");
describe("Logical Operators Test Suite", () => {
    it("should perform logical AND correctly", () => {
        (0, chai_1.expect)(logical_operators_1.andResult).to.equal(false);
    });
    it("should perform logical OR correctly", () => {
        (0, chai_1.expect)(logical_operators_1.orResult).to.equal(true);
    });
    it("should perform logical NOT correctly", () => {
        (0, chai_1.expect)(logical_operators_1.notResult).to.equal(false);
    });
});
