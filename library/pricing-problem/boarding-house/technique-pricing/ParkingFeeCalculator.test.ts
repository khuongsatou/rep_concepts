// ParkingFeeCalculator.test.ts
import { ParkingFeeCalculator } from './ParkingFeeCalculator';

test('calculateParkingFee should calculate parking fee correctly', () => {
  const parkingFeeCalculator = new ParkingFeeCalculator();
  const parkingFee = parkingFeeCalculator.calculateParkingFee(2); // Gửi xe trong 2 giờ
  expect(parkingFee).toBe(10000); // Chi phí gửi xe 5000 VND/giờ, vì vậy 2 giờ * 5000 VND/giờ = 10000 VND
});
