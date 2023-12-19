import { Discount } from '../models/Discount';

export class DiscountService {
  private discounts: Discount[] = [];

  addDiscount(discount: Discount) {
    this.discounts.push(discount);
  }

  getDiscountByCode(code: string): Discount | undefined {
    return this.discounts.find((d) => d.code === code);
  }
}
