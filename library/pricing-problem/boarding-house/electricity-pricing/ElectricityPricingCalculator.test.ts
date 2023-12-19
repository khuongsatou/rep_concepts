// electricityPricingCalculator.test.ts
import {ElectricityPricingCalculator} from './ElectricityPricingCalculator';

test('calculateElectricityCost function with different scenarios', () => {
  // Test Case 1: Normal case with 120 kWh
  let calculator = new ElectricityPricingCalculator([2000, 2500, 3000], 120);
  expect(calculator.calculateElectricityCost()).toBe(150000);

  // Test Case 2: Edge case with 0 kWh
  calculator = new ElectricityPricingCalculator([2000, 2500, 3000], 0);
  expect(calculator.calculateElectricityCost()).toBe(0);

  // Test Case 3: Usage exactly at the tier limit (150 kWh)
  calculator = new ElectricityPricingCalculator([2000, 2500, 3000], 150);
  expect(calculator.calculateElectricityCost()).toBe(225000);

  // Test Case 4: Usage exceeding all tiers (400 kWh)
  calculator = new ElectricityPricingCalculator([2000, 2500, 3000], 400);
  expect(calculator.calculateElectricityCost()).toBe(375000);

  // Test Case 5: Usage with different pricing (50 kWh)
  calculator = new ElectricityPricingCalculator([1500, 2000, 2500], 50);
  expect(calculator.calculateElectricityCost()).toBe(75000);
});
