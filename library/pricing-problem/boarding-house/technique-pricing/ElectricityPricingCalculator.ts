// ElectricityPricingCalculator.ts
export class ElectricityPricingCalculator {
    calculateElectricityCost(usage: number): number {
      const unitPrice = 2000; // Giá điện 2000 VND/kWh
      return usage * unitPrice;
    }
  }
  