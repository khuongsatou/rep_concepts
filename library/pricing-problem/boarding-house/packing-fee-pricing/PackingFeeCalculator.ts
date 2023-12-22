// Tính giá gửi xe theo giờ
// Sao cho gửi hơn 3h thì sẽ thêm phí là 10k
export class ParkingFeeCalculator {
    private vehicleRates: Record<string, number> = {// Khởi tạo 1 object key về loại xe gửi
      'motorbike': 2000,
      'car': 5000,
    };
  
    calculateParkingFee(vehicleType: string, hoursParked: number): number {
      const rate = this.vehicleRates[vehicleType] || 0;// Lấy ra giá tiền
      
      // Calculate hourly fee
      const hourlyFee = rate * hoursParked; // important giá tiền * số giờ gửi
  
      // Apply fixed fee for parking over 3 hours
      const fixedFee = hoursParked >= 3 ? 10000 : 0; // important Nếu điều kiện gửi hơn 3 tiếng sẽ thêm phí 10k
  
      // Sum hourly fee and fixed fee
      return hourlyFee + fixedFee; // important
    }
  }