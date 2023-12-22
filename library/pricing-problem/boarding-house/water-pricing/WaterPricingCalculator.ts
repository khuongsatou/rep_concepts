// Tính tiền nước sử dụng
export class WaterPricingCalculator {
    private waterPrices: number[];
  
    constructor(waterPrices: number[]) {
      this.waterPrices = waterPrices;
    }
  
    calculateWaterCost(cubicMeters: number): number {
      let totalCost = 0;
      let remainingCubicMeters = cubicMeters;
  
      for (let i = 0; i < this.waterPrices.length; i++) {
        if (remainingCubicMeters <= 0) {
          break;
        }
  
        const currentPrice = this.waterPrices[i];
        const consumedInTier = this.getConsumedInTier(i, remainingCubicMeters);
  
        totalCost += consumedInTier * currentPrice;
        remainingCubicMeters -= consumedInTier;
      }
  
      return Math.max(totalCost, 0);
    }
  
    private getConsumedInTier(tierIndex: number, remainingCubicMeters: number): number {
      const tierSize = tierIndex === 0 ? 50 : this.getTierSize();
      return Math.min(tierSize, remainingCubicMeters);
    }
  
    private getTierSize(): number {
      return 50;
    }
  }
  
  // Test
  const waterPrices = [5000, 7000, 10000];
  const waterCalculator = new WaterPricingCalculator(waterPrices);
  
  const cubicMeters = 120;
  const waterCost = waterCalculator.calculateWaterCost(cubicMeters);
//   console.log(`Water cost for ${cubicMeters} cubic meters: ${waterCost} VND`);
  