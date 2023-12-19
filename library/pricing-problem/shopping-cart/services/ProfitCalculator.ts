export class ProfitCalculator {
    calculateProfit(totalCost: number, desiredProfit: number): number {
      return totalCost * (desiredProfit / 100); // important
    }
  }
  