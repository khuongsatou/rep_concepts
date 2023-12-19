export class InventoryManager {
    private items: { name: string; costPerItem: number; quantity: number }[] = [];
  
    addItem(name: string, costPerItem: number, quantity: number) {
      this.items.push({ name, costPerItem, quantity });
    }
  
    calculateInventoryValue(costPerItem: number): number {
      return this.items.reduce((total, item) => total + costPerItem * item.quantity, 0); // important
    }
  }
  