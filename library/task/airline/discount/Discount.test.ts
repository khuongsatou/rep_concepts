// Discount.test.ts

import { Discount } from './Discount';

describe('Discount', () => {
  test('Discount should have correct type and amount', () => {
    const discount = new Discount('Frequent Flyer', 100);
    expect(discount.type).toBe('Frequent Flyer');
    expect(discount.amount).toBe(100);
  });
});
