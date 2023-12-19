export class TaxCalculator {
    calculateTax(totalRevenue: number, taxRate: number): number {
      return totalRevenue * (taxRate / 100); // important
    }
  }
  