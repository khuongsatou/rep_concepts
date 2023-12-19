import { DiscountCalculator } from './DiscountCalculator';

describe('DiscountCalculator', () => {
  let discountCalculator: DiscountCalculator;

  beforeEach(() => {
    discountCalculator = new DiscountCalculator();
  });

  test('calculateTotalAmount should apply the discount correctly', () => {
    const totalAmount = 100;
    const discountPercentage = 10; // 10% discount
    const totalAfterDiscount = discountCalculator.calculateTotalAmount(totalAmount, discountPercentage);

    expect(totalAfterDiscount).toBe(90); // 100 - (10% of 100) = 90
  });
});
