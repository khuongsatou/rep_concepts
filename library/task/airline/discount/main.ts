// main.ts

import { Ticket } from './Ticket';
import { Discount } from './Discount';

// Tạo đối tượng Ticket với giá cơ bản là 1000
const ticket = new Ticket(1000);

// Thêm các chiết khấu
const discount1 = new Discount('Frequent Flyer', 100);
const discount2 = new Discount('Early Booking', 50);

ticket.addDiscount(discount1);
ticket.addDiscount(discount2);

// Tính giá cuối cùng sau chiết khấu
const finalPrice = ticket.calculateFinalPrice();

console.log('Final Price after Discounts:', finalPrice);
