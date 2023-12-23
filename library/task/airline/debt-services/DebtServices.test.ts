// DebtService.test.ts
// Công nợ trong ngữ cảnh của hãng bay thường được hiểu là tổng số tiền mà hãng bay phải thanh toán cho các đối tác, như những đơn vị cung cấp dịch vụ, đối tác hợp tác, hay các khoản nợ khác mà hãng bay đã tích luỹ theo thời gian.
import { DebtService } from './DebtServices';

describe('DebtService', () => {
  let debtService: DebtService;

  beforeEach(() => {
    debtService = new DebtService();
  });

  test('recordDebt should record debt correctly', () => {
    debtService.recordDebt('Vendor A', 500);
    debtService.recordDebt('Vendor B', 1000);

    const debts = debtService.getDebts();
    expect(debts.get('Vendor A')).toBe(500);
    expect(debts.get('Vendor B')).toBe(1000);
  });

  test('payDebt should reduce debt amount or delete entry if fully paid', () => {
    debtService.recordDebt('Vendor C', 700);

    // Partial payment
    debtService.payDebt('Vendor C', 300);
    let debts = debtService.getDebts();
    expect(debts.get('Vendor C')).toBe(400);

    // Full payment
    debtService.payDebt('Vendor C', 400);
    debts = debtService.getDebts();
    expect(debts.has('Vendor C')).toBeFalsy();
  });

  test('payDebt should handle cases where no outstanding debt exists', () => {
    debtService.recordDebt('Vendor D', 800);

    // Full payment
    debtService.payDebt('Vendor D', 800);
    // Attempt to pay debt again
    debtService.payDebt('Vendor D', 200);

    const debts = debtService.getDebts();
    expect(debts.has('Vendor D')).toBeFalsy();
  });

  test('getDebts should return the current outstanding debts', () => {
    debtService.recordDebt('Vendor E', 1200);
    debtService.recordDebt('Vendor F', 600);

    const debts = debtService.getDebts();
    expect(debts.size).toBe(2);
    expect(debts.get('Vendor E')).toBe(1200);
    expect(debts.get('Vendor F')).toBe(600);
  });
});
