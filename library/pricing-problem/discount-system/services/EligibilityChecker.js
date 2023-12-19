"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EligibilityChecker = void 0;
var EligibilityChecker = /** @class */ (function () {
    function EligibilityChecker() {
    }
    EligibilityChecker.prototype.isEligibleForDiscount = function (discount, totalAmount) {
        // Logic kiểm tra điều kiện để đạt được giảm giá
        return totalAmount > 100; // Ví dụ: Giả sử cần tổng giá trị đơn hàng > 100 để được giảm giá
    };
    return EligibilityChecker;
}());
exports.EligibilityChecker = EligibilityChecker;
