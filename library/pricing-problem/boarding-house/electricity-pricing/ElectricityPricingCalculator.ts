// electricityPricingCalculator.ts
export class ElectricityPricingCalculator {
    private electricityPrices: number[];
    private electricityUsage: number;
  
    constructor(electricityPrices: number[], electricityUsage: number) {
      this.electricityPrices = electricityPrices;
      this.electricityUsage = electricityUsage;
    }
  
    calculateElectricityCost(): number {
      let totalCost = 0;
      for (let i = 0; i < this.electricityPrices.length; i++) {
        if(this.electricityUsage <= 0 ){ // important
          break;
        }
        const currentPrice = this.electricityPrices[i];
        const consumedInTier = i === 0 ? Math.min(50, this.electricityUsage) : Math.min(50, this.electricityUsage - 50); // important
  
        totalCost += consumedInTier * currentPrice; // important
        this.electricityUsage -= consumedInTier; // important
  
        // console.log(`Tier ${i + 1}: ${consumedInTier} kWh x ${currentPrice} VND/kWh = ${consumedInTier * currentPrice} VND`);
      }
  
      return totalCost;
    }
  }
  
  // testElectricityPricingCalculator.ts
  const electricityPrices = [2000, 2500, 3000];
  const electricityUsage = 120;
  
  const calculator = new ElectricityPricingCalculator(electricityPrices, electricityUsage);
  const totalCost = calculator.calculateElectricityCost();
  // console.log(`Total cost: ${totalCost} VND`);
  
