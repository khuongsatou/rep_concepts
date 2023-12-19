import { ProfitCalculator } from './ProfitCalculator';

describe('ProfitCalculator', () => {
  test('should calculate profit correctly', () => {
    const profitCalculator = new ProfitCalculator();

    // Total cost is $500, desired profit is 20%
    const totalCost = 500;
    const desiredProfit = 20;

    // Expected profit = 500 * (20 / 100) = 100
    const calculatedProfit = profitCalculator.calculateProfit(totalCost, desiredProfit);
    expect(calculatedProfit).toBe(100);
  });

  test('should handle zero total cost', () => {
    const profitCalculator = new ProfitCalculator();

    // When total cost is 0, profit should also be 0
    const totalCost = 0;
    const desiredProfit = 15;

    const calculatedProfit = profitCalculator.calculateProfit(totalCost, desiredProfit);
    expect(calculatedProfit).toBe(0);
  });
});
