import {ParkingFeeCalculator} from './PackingFeeCalculator';
test('calculateParkingFee function with different scenarios', () => {
    const parkingCalculator = new ParkingFeeCalculator();
  
    // Test case 1
    const feeMotorbike = parkingCalculator.calculateParkingFee('motorbike', 2);
    expect(feeMotorbike).toBe(4000); // Expected result: 4,000 VND
  
    // Test case 2
    const feeCar = parkingCalculator.calculateParkingFee('car', 4);
    expect(feeCar).toBe(30000); // Expected result: 24,000 VND
  
    // Test case 3
    const feeMotorbikeOver3Hours = parkingCalculator.calculateParkingFee('motorbike', 4);
    expect(feeMotorbikeOver3Hours).toBe(18000); // Expected result: 12,000 VND
  
    // Add more test scenarios if needed
  });