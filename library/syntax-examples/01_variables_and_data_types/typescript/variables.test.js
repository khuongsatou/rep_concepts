"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the necessary modules for testing
const chai_1 = require("chai");
const variables_1 = require("./variables");
describe("Variables Test", () => {
    it("should have the correct initial values", () => {
        (0, chai_1.expect)(variables_1.variableVar).to.equal(20);
        (0, chai_1.expect)(variables_1.variableLet).to.equal("Hello, World!");
        (0, chai_1.expect)(variables_1.variableConst).to.equal(true);
    });
    it("should allow reassignment of variableVar", () => {
        (0, chai_1.expect)(variables_1.variableVar).to.equal(20);
    });
});
