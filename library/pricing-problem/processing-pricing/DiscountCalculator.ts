export class DiscountCalculator {
    calculateTotalAmount(totalAmount: number, discountPercentage: number): number {
      const discount = totalAmount * (discountPercentage / 100);
      const totalAfterDiscount = totalAmount - discount;
      return totalAfterDiscount;
    }
  }
  