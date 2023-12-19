import { DiscountManager } from './DiscountManager';
import { Discount } from '../models/Discount';

describe('DiscountManager', () => {
  test('should apply discount correctly', () => {
    const discountManager = new DiscountManager();

    const discountA = new Discount('SUMMER2023', 0.1);
    const discountB = new Discount('WINTER2023', 0.15);

    discountManager.addDiscount(discountA);
    discountManager.addDiscount(discountB);

    // Total amount is $100, discount code is 'SUMMER2023', so the discounted amount should be $90
    const discountedAmount = discountManager.applyDiscount(100, 'SUMMER2023');
    expect(discountedAmount).toBe(90);
  });

  test('should handle invalid discount code', () => {
    const discountManager = new DiscountManager();

    // Total amount is $80, discount code is 'INVALIDCODE', so no discount applied, and the amount remains $80
    const discountedAmount = discountManager.applyDiscount(80, 'INVALIDCODE');
    expect(discountedAmount).toBe(80);
  });
});
