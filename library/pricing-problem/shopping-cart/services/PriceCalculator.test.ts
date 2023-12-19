import { PriceCalculator } from './PriceCalculator';
import { PriceItem } from '../models/PriceItem';

describe('PriceCalculator', () => {
  test('should calculate total and apply discount', () => {
    const priceCalculator = new PriceCalculator();
    const itemA = new PriceItem('Product A', 20, 2);
    const itemB = new PriceItem('Product B', 30, 1);

    priceCalculator.addItem(itemA);
    priceCalculator.addItem(itemB);

    // Total without discount: 20*2 + 30*1 = 70
    expect(priceCalculator.calculateTotal()).toBe(70);

    // Apply 10% discount: 70 - 70*0.1 = 63
    expect(priceCalculator.applyDiscount(0.1)).toBe(63);
  });
});
