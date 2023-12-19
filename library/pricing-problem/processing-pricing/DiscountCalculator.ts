export class DiscountCalculator {
    calculateTotalAmount(totalAmount: number, discountPercentage: number): number {
      const discount = totalAmount * (discountPercentage / 100); // important
      const totalAfterDiscount = totalAmount - discount; // important
      return totalAfterDiscount;
    }
  }
  