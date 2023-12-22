// Tạo ra hóa đơn từ các chi phí
// Tính tổng tiền các chi phí
class RentCalculator {
    calculateRentCost(months: number): number {
      // Logic tính phí thuê nhà dựa trên số tháng thuê
      // ...
      return 0 /* calculated rent cost */;
    }
  }
  
  class ElectricityPricingCalculator {
    calculateElectricityCost(usage: number): number {
      // Logic tính phí điện dựa trên lượng sử dụng
      // ...
      return 0 /* calculated electricity cost */;
    }
  }
  
  class WaterPricingCalculator {
    calculateWaterCost(usage: number): number {
      // Logic tính phí nước dựa trên lượng sử dụng
      // ...
      return 0 /* calculated water cost */;
    }
  }
  
  class ParkingFeeCalculator {
    calculateParkingFee(vehicleType: string, hoursParked: number): number {
      // Logic tính phí gửi xe dựa trên loại xe và thời gian gửi
      // ...
      return 0 /* calculated parking fee */;
    }
  }
  
  class AdditionalServiceCalculator {
    calculateServiceCost(serviceType: string, usage: number): number {
      // Logic tính phí cho các dịch vụ bổ sung khác
      // ...
      return 0 /* calculated additional service cost */;
    }
  }
  
  class Invoice {
    private details: string[];// Chi tiết
    private totalAmount: number;// tổng tiền
  
    constructor() {
      this.details = [];
      this.totalAmount = 0;
    }
  
    addDetail(detail: string, amount: number): void {
      this.details.push(detail);
      this.totalAmount += amount;
    }
  
    printInvoice(): void {
      console.log('Invoice Details:');
      this.details.forEach((detail, index) => console.log(`${index + 1}. ${detail}`));// Hiển thị danh sách từng sản phẩm
      console.log(`Total Amount: ${this.totalAmount} VND`);
    }
  }
  
export  class RentalProperty {
    private rentCalculator: RentCalculator;
    private electricityCalculator: ElectricityPricingCalculator;
    private waterCalculator: WaterPricingCalculator;
    private parkingFeeCalculator: ParkingFeeCalculator;
    private additionalServiceCalculator: AdditionalServiceCalculator;
  
    constructor() {
      this.rentCalculator = new RentCalculator();
      this.electricityCalculator = new ElectricityPricingCalculator();
      this.waterCalculator = new WaterPricingCalculator();
      this.parkingFeeCalculator = new ParkingFeeCalculator();
      this.additionalServiceCalculator = new AdditionalServiceCalculator();
    }
  
    calculateTotalCosts(months: number, electricityUsage: number, waterUsage: number, vehicleType: string, parkingDuration: number, additionalServiceType: string, additionalServiceUsage: number): number {
      const rentCost = this.rentCalculator.calculateRentCost(months);
      const electricityCost = this.electricityCalculator.calculateElectricityCost(electricityUsage);
      const waterCost = this.waterCalculator.calculateWaterCost(waterUsage);
      const parkingFee = this.parkingFeeCalculator.calculateParkingFee(vehicleType, parkingDuration);
      const additionalServiceCost = this.additionalServiceCalculator.calculateServiceCost(additionalServiceType, additionalServiceUsage);
  
      return rentCost + electricityCost + waterCost + parkingFee + additionalServiceCost; // important
    }
  
    generateInvoiceAndSave(months: number, electricityUsage: number, waterUsage: number, vehicleType: string, parkingDuration: number, additionalServiceType: string, additionalServiceUsage: number): void {
      const totalCosts = this.calculateTotalCosts(months, electricityUsage, waterUsage, vehicleType, parkingDuration, additionalServiceType, additionalServiceUsage);
  
      // Create a new invoice
      const invoice = new Invoice();
  
      // Add details to the invoice
      invoice.addDetail(`Rent cost: ${totalCosts} VND`, totalCosts);
  
      // Save the invoice or send it to the tenant
      // In this example, we'll just print the invoice
      invoice.printInvoice();
    }
  }
  
  // Example usage:
  const rentalProperty = new RentalProperty();
  rentalProperty.generateInvoiceAndSave(1, 100, 5, 'car', 4, 'internet', 2);
  