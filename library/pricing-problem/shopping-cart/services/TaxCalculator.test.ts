import { TaxCalculator } from './TaxCalculator';

describe('TaxCalculator', () => {
  test('should calculate tax correctly', () => {
    const taxCalculator = new TaxCalculator();

    // Total revenue is $800, tax rate is 15%
    const totalRevenue = 800;
    const taxRate = 15;

    // Expected tax = 800 * (15 / 100) = 120
    const calculatedTax = taxCalculator.calculateTax(totalRevenue, taxRate);
    expect(calculatedTax).toBe(120);
  });

  test('should handle zero total revenue', () => {
    const taxCalculator = new TaxCalculator();

    // When total revenue is 0, tax should also be 0
    const totalRevenue = 0;
    const taxRate = 10;

    const calculatedTax = taxCalculator.calculateTax(totalRevenue, taxRate);
    expect(calculatedTax).toBe(0);
  });
});
