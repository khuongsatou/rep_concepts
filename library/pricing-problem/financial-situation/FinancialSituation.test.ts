import { FinancialSituation } from './FinancialSituation';

describe('FinancialSituation', () => {
  let financialSituation: FinancialSituation;

  beforeEach(() => {
    financialSituation = new FinancialSituation(
      15000000, // monthlyIncome
      50000000, // initialInvestment
      2000000,  // rentExpense
      3000000,  // foodAndFuelExpense
      5000000,  // giftExpense
      24        // monthsOfWork
    );
  });

  test('calculateSavings should return correct savings', () => {
    const savings = financialSituation.calculateSavings();
    expect(savings).toBe(260000000);
  });

  test('calculateSavings should handle negative savings', () => {
    financialSituation = new FinancialSituation(
      1000000,  // monthlyIncome
      500000,   // initialInvestment
      2000000,  // rentExpense
      3000000,  // foodAndFuelExpense
      5000000,  // giftExpense
      12        // monthsOfWork
    );

    const savings = financialSituation.calculateSavings();
    expect(savings).toBeLessThan(0);
  });

  // Add more tests as needed...

  test('calculateSavings should handle zero expenses', () => {
    financialSituation = new FinancialSituation(
      10000000, // monthlyIncome
      5000000,  // initialInvestment
      0,        // rentExpense
      0,        // foodAndFuelExpense
      0,        // giftExpense
      6         // monthsOfWork
    );

    const savings = financialSituation.calculateSavings();
    expect(savings).toBe(30000000);
  });
});
