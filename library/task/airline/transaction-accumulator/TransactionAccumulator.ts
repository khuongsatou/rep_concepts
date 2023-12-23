interface Transaction {
    type: 'credit' | 'debit';
    amount: number;
    description: string;
    timestamp: Date;
  }
  
 export class TransactionAccumulator {
    private transactions: Transaction[] = [];
  
    // Thêm giao dịch vào lịch sử
    addTransaction(transaction: Transaction): void {
      this.transactions.push(transaction);
    }
  
    // Lấy tổng số dư tài khoản
    getAccountBalance(): number {
      return this.transactions.reduce((balance, transaction) => {
        if (transaction.type === 'credit') {
          return balance + transaction.amount;
        } else {
          return balance - transaction.amount;
        }
      }, 0);
    }
  
    // Lấy lịch sử giao dịch
    getTransactionHistory(): Transaction[] {
      return this.transactions;
    }
  }
  
  // Sử dụng
  const transactionAccumulator = new TransactionAccumulator();
  
  // Thực hiện các giao dịch
  transactionAccumulator.addTransaction({
    type: 'credit',
    amount: 1000,
    description: 'Nạp tiền vào tài khoản',
    timestamp: new Date(),
  });
  
  transactionAccumulator.addTransaction({
    type: 'debit',
    amount: 500,
    description: 'Mua vé máy bay',
    timestamp: new Date(),
  });
  
  transactionAccumulator.addTransaction({
    type: 'debit',
    amount: 200,
    description: 'Mua thức ăn trên máy bay',
    timestamp: new Date(),
  });
  
  // Lấy thông tin số dư và lịch sử giao dịch
  const accountBalance = transactionAccumulator.getAccountBalance();
  const transactionHistory = transactionAccumulator.getTransactionHistory();
  
  console.log('Account Balance:', accountBalance);
  console.log('Transaction History:', transactionHistory);
  