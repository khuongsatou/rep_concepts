// electricityPricingCalculator.ts
// Đoạn code của bạn là một máy tính giá điện dựa trên các mức giá và lượng sử dụng điện khác nhau
// Điện sẽ chia theo móc cứ 50kw sẽ là 1 móc
export class ElectricityPricingCalculator {
    private electricityPrices: number[];// Giá điện
    private electricityUsage: number;// Số điện đã sử dụng
  
    constructor(electricityPrices: number[], electricityUsage: number) {
      this.electricityPrices = electricityPrices;
      this.electricityUsage = electricityUsage;
    }
  
    calculateElectricityCost(): number {
      let totalCost = 0;// Cho tổng chi phí = 0
      for (let i = 0; i < this.electricityPrices.length; i++) {
        if(this.electricityUsage <= 0 ){ // important nếu giá điện nhỏ hơn hoặc = 0 thì trả về 0
          break;
        }
        const currentPrice = this.electricityPrices[i];
        const consumedInTier = i === 0 ? Math.min(50, this.electricityUsage) : Math.min(50, this.electricityUsage - 50); // important nếu giá điện thứ 0 thì lấy điện nhỏ nhất là 50 ngược lại từ vị trí thứ 3 thì sẽ là móc giá điện - 50 = 100
  
        totalCost += consumedInTier * currentPrice; // important lấy số kw mỗi móc * giá điện
        this.electricityUsage -= consumedInTier; // important giảm móc giá điện lại
  
        // console.log(`Tier ${i + 1}: ${consumedInTier} kWh x ${currentPrice} VND/kWh = ${consumedInTier * currentPrice} VND`);
      }
  
      return totalCost;
    }
  }
  
  // testElectricityPricingCalculator.ts
  const electricityPrices = [2000, 2500, 3000];// Giá điện theo các móc
  const electricityUsage = 120;
  
  const calculator = new ElectricityPricingCalculator(electricityPrices, electricityUsage);
  const totalCost = calculator.calculateElectricityCost();
  // console.log(`Total cost: ${totalCost} VND`);
  
