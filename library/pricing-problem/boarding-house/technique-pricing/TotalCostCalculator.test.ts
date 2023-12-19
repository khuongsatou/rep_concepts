// TotalCostCalculator.test.ts
import { TotalCostCalculator } from './TotalCostCalculator';

test('calculateTotalCost should calculate total cost correctly', () => {
  const totalCostCalculator = new TotalCostCalculator();
  const totalCost = totalCostCalculator.calculateTotalCost(200000, 10000); // Tổng chi phí gồm điện và gửi xe
  expect(totalCost).toBe(210000); // Tổng chi phí là 200000 (điện) + 10000 (gửi xe) = 210000 VND
});
