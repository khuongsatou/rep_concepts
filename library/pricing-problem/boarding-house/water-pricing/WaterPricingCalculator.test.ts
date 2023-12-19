import {WaterPricingCalculator} from './WaterPricingCalculator';

test('calculateWaterCost function with different scenarios', () => {
  const waterPrices = [5000, 7000, 10000];
  const waterCalculator = new WaterPricingCalculator(waterPrices);

  // Test with 80 cubic meters
  const cubicMeters1 = 80;
  const cost1 = waterCalculator.calculateWaterCost(cubicMeters1);
  expect(cost1).toBe(460000); // Expected result: 400,000 VND

  // Test with 50 cubic meters
  const cubicMeters2 = 50;
  const cost2 = waterCalculator.calculateWaterCost(cubicMeters2);
  expect(cost2).toBe(250000); // Expected result: 250,000 VND

  // Test with 150 cubic meters
  const cubicMeters3 = 150;
  const cost3 = waterCalculator.calculateWaterCost(cubicMeters3);
  expect(cost3).toBe(1100000); // Expected result: 1,450,000 VND

  // Add more test scenarios if needed
});
