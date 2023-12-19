import { Discount } from '../models/Discount';

export class DiscountManager {
  private discounts: Discount[] = [];

  addDiscount(discount: Discount) {
    this.discounts.push(discount);
  }

  applyDiscount(totalAmount: number, discountCode: string): number {
    const appliedDiscount = this.getDiscountByCode(discountCode);

    if (appliedDiscount) {
      const discountedAmount = totalAmount * (1 - appliedDiscount.percentage);
      return discountedAmount;
    } else {
      return totalAmount; // No discount applied
    }
  }

  private getDiscountByCode(discountCode: string): Discount | undefined {
    return this.discounts.find((d) => d.code === discountCode);
  }
}
