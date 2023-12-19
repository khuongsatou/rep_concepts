"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountService = void 0;
var DiscountService = /** @class */ (function () {
    function DiscountService() {
        this.discounts = [];
    }
    DiscountService.prototype.addDiscount = function (discount) {
        this.discounts.push(discount);
    };
    DiscountService.prototype.getDiscountByCode = function (code) {
        return this.discounts.find(function (d) { return d.code === code; });
    };
    return DiscountService;
}());
exports.DiscountService = DiscountService;
