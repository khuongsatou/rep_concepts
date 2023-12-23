// DebtService.ts
// Công nợ trong ngữ cảnh của hãng bay thường được hiểu là tổng số tiền mà hãng bay phải thanh toán cho các đối tác, như những đơn vị cung cấp dịch vụ, đối tác hợp tác, hay các khoản nợ khác mà hãng bay đã tích luỹ theo thời gian.
// Công nợ là số tiền phải trả cho đại lý.
// Công nợ sẽ là 1 danh sách
// Mỗi khi hãng bay trả tiền cho đại lý thì sẽ bỏ đi 1 row

class DebtService {
    debts: Map<string, number>;
  
    constructor() {
      this.debts = new Map();
    }
  
    recordDebt(vendor: string, amount: number): void {
      if (this.debts.has(vendor)) {
        this.debts.set(vendor, this.debts.get(vendor)! + amount);
      } else {
        this.debts.set(vendor, amount);
      }
    }
  
    payDebt(vendor: string, amount: number): void {
      if (this.debts.has(vendor)) {
        const remainingDebt = this.debts.get(vendor)! - amount;
        // Nếu đã thanh toán hết cột đó
        if (remainingDebt <= 0) {
          this.debts.delete(vendor);
          // console.log(`Debt to ${vendor} fully paid.`);
        } else {
          // Nếu chưa thanh toán hết
          this.debts.set(vendor, remainingDebt);
          // console.log("In File: DebtServices.ts, Line: 32",this.debts);
          // console.log(`Paid ${amount} to ${vendor}. Remaining debt: ${remainingDebt}`);
        }
      } else {
        console.log(`No outstanding debt to ${vendor}.`);
      }
    }
  
    getDebts(): Map<string, number> {
      return this.debts;
    }
  }
  
  export { DebtService };
  