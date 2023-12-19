import { BillingCalculator } from './BillingCalculator';

describe('BillingCalculator', () => {
  let billingCalculator: BillingCalculator;

  beforeEach(() => {
    billingCalculator = new BillingCalculator();
  });

  test('addAmount should add the given amount to the total', () => {
    billingCalculator.addAmount(100);
    expect(billingCalculator.calculateTotalAmount()).toBe(100);
  });

  test('calculateTax should calculate tax correctly', () => {
    billingCalculator.addAmount(200);
    const tax = billingCalculator.calculateTax(10); // 10% tax on 200
    expect(tax).toBe(20);
  });

  test('applyDiscount should apply discount correctly', () => {
    billingCalculator.addAmount(300);
    billingCalculator.applyDiscount(50);
    expect(billingCalculator.calculateTotalAmount()).toBe(250); // 300 - 50 discount
  });

  test('calculateTotalAmount should return the total amount', () => {
    billingCalculator.addAmount(100);
    billingCalculator.addAmount(200);
    expect(billingCalculator.calculateTotalAmount()).toBe(300);
  });

  test('addFee should add the given fee to the total', () => {
    billingCalculator.addFee(30);
    expect(billingCalculator.calculateTotalAmount()).toBe(30);
  });

  test('calculateTotalAmount should include fees in the total', () => {
    billingCalculator.addAmount(100);
    billingCalculator.addFee(20);
    expect(billingCalculator.calculateTotalAmount()).toBe(120); // 100 (amount) + 20 (fee)
  });
});
