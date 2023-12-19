import { PriceItem } from '../models/PriceItem';

export class PriceCalculator {
  private items: PriceItem[] = [];

  addItem(item: PriceItem) {
    this.items.push(item);
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyDiscount(discountRate: number): number {
    const total = this.calculateTotal();
    return total - total * discountRate;
  }
}
