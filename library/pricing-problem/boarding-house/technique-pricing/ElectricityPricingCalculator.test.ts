// ElectricityPricingCalculator.test.ts
import { ElectricityPricingCalculator } from './ElectricityPricingCalculator';

test('calculateElectricityCost should calculate electricity cost correctly', () => {
  const electricityCalculator = new ElectricityPricingCalculator();
  const electricityCost = electricityCalculator.calculateElectricityCost(100); // Sử dụng 100 kWh
  expect(electricityCost).toBe(200000); // Giá điện 2000 VND/kWh, vì vậy 100 kWh * 2000 VND/kWh = 200000 VND
});
