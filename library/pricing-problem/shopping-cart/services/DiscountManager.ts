import { Discount } from '../models/Discount';
// Tính giá khuyến mãi
export class DiscountManager {
  private discounts: Discount[] = [];

  addDiscount(discount: Discount) {
    this.discounts.push(discount);
  }

  applyDiscount(totalAmount: number, discountCode: string): number {
    const appliedDiscount = this.getDiscountByCode(discountCode);

    if (appliedDiscount) {
      const discountedAmount = totalAmount * (1 - appliedDiscount.percentage); // important Lấy tổng tiền - tổng tiền * % giảm giá
      return discountedAmount;
    } else {
      return totalAmount; // No discount applied
    }
  }

  private getDiscountByCode(discountCode: string): Discount | undefined {
    return this.discounts.find((d) => d.code === discountCode);
  }
}
