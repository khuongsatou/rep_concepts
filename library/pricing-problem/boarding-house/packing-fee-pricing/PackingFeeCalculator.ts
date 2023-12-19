export class ParkingFeeCalculator {
    private vehicleRates: Record<string, number> = {
      'motorbike': 2000,
      'car': 5000,
    };
  
    calculateParkingFee(vehicleType: string, hoursParked: number): number {
      const rate = this.vehicleRates[vehicleType] || 0;
      
      // Calculate hourly fee
      const hourlyFee = rate * hoursParked;
  
      // Apply fixed fee for parking over 3 hours
      const fixedFee = hoursParked >= 3 ? 10000 : 0;
  
      // Sum hourly fee and fixed fee
      return hourlyFee + fixedFee;
    }
  }