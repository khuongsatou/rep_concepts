// ParkingFeeCalculator.ts
export class ParkingFeeCalculator {
    calculateParkingFee(hoursParked: number): number {
      const hourlyRate = 5000; // Chi phí gửi xe 5000 VND/giờ
      return hoursParked * hourlyRate;
    }
  }
  