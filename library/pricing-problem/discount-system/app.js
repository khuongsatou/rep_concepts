"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EligibilityChecker_1 = require("./services/EligibilityChecker");
var discountService_1 = require("./services/discountService");
var discountService = new discountService_1.DiscountService();
var eligibilityChecker = new EligibilityChecker_1.EligibilityChecker();
var discountA = { code: 'SUMMER2023', percentage: 0.1 };
discountService.addDiscount(discountA);
var customerTotalAmount = 120;
var customerDiscountCode = 'SUMMER2023';
var appliedDiscount = discountService.getDiscountByCode(customerDiscountCode);
if (appliedDiscount && eligibilityChecker.isEligibleForDiscount(appliedDiscount, customerTotalAmount)) {
    var discountedAmount = customerTotalAmount * (1 - appliedDiscount.percentage);
    console.log("Customer is eligible for a ".concat(appliedDiscount.percentage * 100, "% discount. Total amount after discount: $").concat(discountedAmount));
}
else {
    console.log('No eligible discount applied.');
}
