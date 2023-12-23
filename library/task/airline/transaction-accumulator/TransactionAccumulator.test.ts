import { TransactionAccumulator } from './TransactionAccumulator'; // Thay 'yourFileName' bằng tên tệp chứa mã nguồn

describe('TransactionAccumulator', () => {
  test('getAccountBalance trả về 0 khi không có giao dịch', () => {
    const accumulator = new TransactionAccumulator();
    const accountBalance = accumulator.getAccountBalance();
    expect(accountBalance).toBe(0);
  });

  test('getTransactionHistory trả về mảng rỗng khi không có giao dịch', () => {
    const accumulator = new TransactionAccumulator();
    const transactionHistory = accumulator.getTransactionHistory();
    expect(transactionHistory).toEqual([]);
  });

  test('getAccountBalance tính đúng khi chỉ có giao dịch credit', () => {
    const accumulator = new TransactionAccumulator();
    accumulator.addTransaction({ type: 'credit', amount: 1000, description: 'Credit 1000', timestamp: new Date() });
    const accountBalance = accumulator.getAccountBalance();
    expect(accountBalance).toBe(1000);
  });

  test('getAccountBalance tính đúng khi chỉ có giao dịch debit', () => {
    const accumulator = new TransactionAccumulator();
    accumulator.addTransaction({ type: 'debit', amount: 500, description: 'Debit 500', timestamp: new Date() });
    const accountBalance = accumulator.getAccountBalance();
    expect(accountBalance).toBe(-500);
  });

  test('getAccountBalance tính đúng khi có cả credit và debit', () => {
    const accumulator = new TransactionAccumulator();
    accumulator.addTransaction({ type: 'credit', amount: 1000, description: 'Credit 1000', timestamp: new Date() });
    accumulator.addTransaction({ type: 'debit', amount: 500, description: 'Debit 500', timestamp: new Date() });
    const accountBalance = accumulator.getAccountBalance();
    expect(accountBalance).toBe(500);
  });

  test('getTransactionHistory trả về đúng số lượng giao dịch', () => {
    const accumulator = new TransactionAccumulator();
    accumulator.addTransaction({ type: 'credit', amount: 1000, description: 'Credit 1000', timestamp: new Date() });
    accumulator.addTransaction({ type: 'debit', amount: 500, description: 'Debit 500', timestamp: new Date() });
    const transactionHistory = accumulator.getTransactionHistory();
    expect(transactionHistory).toHaveLength(2);
  });
});
