import { PriceCalculator } from './services/PriceCalculator';
import { PriceItem } from './models/PriceItem';

const priceCalculator = new PriceCalculator();

const itemA = new PriceItem('Product A', 20, 2);
const itemB = new PriceItem('Product B', 30, 1);

priceCalculator.addItem(itemA);
priceCalculator.addItem(itemB);

const totalWithoutDiscount = priceCalculator.calculateTotal();
console.log('Total without discount:', totalWithoutDiscount);

const discountedTotal = priceCalculator.applyDiscount(0.1); // 10% discount
console.log('Discounted total:', discountedTotal);
