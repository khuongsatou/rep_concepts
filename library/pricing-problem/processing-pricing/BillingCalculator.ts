export class BillingCalculator {
    private totalAmount: number;
    private fees: number;
  
    constructor() {
      this.totalAmount = 0;
      this.fees = 0;
    }
  
    addAmount(amount: number): void {
      this.totalAmount += amount;
    }
  
    calculateTax(taxRate: number): number {
      return this.totalAmount * (taxRate / 100);
    }
  
    applyDiscount(discount: number): void {
      this.totalAmount -= discount;
    }
  
    addFee(fee: number): void {
        this.fees += fee;
      }
    
    calculateTotalAmount(): number {
    return this.totalAmount + this.fees;
    }
  }
  