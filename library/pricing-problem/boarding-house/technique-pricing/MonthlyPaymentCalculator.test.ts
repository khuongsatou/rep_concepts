// MonthlyPaymentCalculator.test.ts
import { MonthlyPaymentCalculator } from './MonthlyPaymentCalculator';

test('calculateMonthlyPayment should calculate monthly payment correctly', () => {
  const monthlyPaymentCalculator = new MonthlyPaymentCalculator();
  const monthlyPayment = monthlyPaymentCalculator.calculateMonthlyPayment(210000, 3); // Thanh toán trong 3 tháng
  expect(monthlyPayment).toBe(70000); // Tổng chi phí là 210000 VND, chia đều trong 3 tháng: 210000 VND / 3 = 70000 VND/tháng
});
