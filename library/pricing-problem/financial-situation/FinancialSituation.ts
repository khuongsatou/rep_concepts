export class FinancialSituation {
    private monthlyIncome: number;
    private initialInvestment: number;
    private rentExpense: number;
    private foodAndFuelExpense: number;
    private giftExpense: number;
    private monthsOfWork: number;
  
    constructor(
      monthlyIncome: number,
      initialInvestment: number,
      rentExpense: number,
      foodAndFuelExpense: number,
      giftExpense: number,
      monthsOfWork: number
    ) {
      this.monthlyIncome = monthlyIncome;
      this.initialInvestment = initialInvestment;
      this.rentExpense = rentExpense;
      this.foodAndFuelExpense = foodAndFuelExpense;
      this.giftExpense = giftExpense;
      this.monthsOfWork = monthsOfWork;
    }
  
    calculateSavings(): number {
      const totalExpense =
        this.rentExpense +
        this.foodAndFuelExpense +
        this.giftExpense * this.monthsOfWork;
  
      const totalIncome = this.monthlyIncome * this.monthsOfWork;
  
      const savings = totalIncome - this.initialInvestment - totalExpense;
  
      return savings;
    }
  }
  
  // Example usage:
  
  const financialSituation = new FinancialSituation(
    15000000, // monthlyIncome
    50000000, // initialInvestment
    2000000,  // rentExpense
    3000000,  // foodAndFuelExpense
    5000000,  // giftExpense
    24        // monthsOfWork
  );
  
  const savings = financialSituation.calculateSavings();
  
  console.log(`Total Savings: ${savings} VND`);
  