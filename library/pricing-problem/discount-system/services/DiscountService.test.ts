import { DiscountService } from './DiscountService';
import { Discount } from '../models/Discount';

describe('DiscountService', () => {
  test('should add and retrieve discounts', () => {
    const discountService = new DiscountService();
    const discountA = new Discount('SUMMER2023', 0.1);
    const discountB = new Discount('WINTER2023', 0.15);

    discountService.addDiscount(discountA);
    discountService.addDiscount(discountB);

    expect(discountService.getDiscountByCode('SUMMER2023')).toEqual(discountA);
    expect(discountService.getDiscountByCode('WINTER2023')).toEqual(discountB);
  });
});
