import { Discount } from '../models/Discount';

export class EligibilityChecker {
  isEligibleForDiscount(discount: Discount, totalAmount: number): boolean {
    // Logic kiểm tra điều kiện để đạt được giảm giá
    return totalAmount > 100; // Ví dụ: Giả sử cần tổng giá trị đơn hàng > 100 để được giảm giá
  }
}
