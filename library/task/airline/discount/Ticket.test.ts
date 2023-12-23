// Ticket.test.ts

import { Ticket } from './Ticket';
import { Discount } from './Discount';

describe('Ticket', () => {
  test('calculateFinalPrice should return base price if no discount applied', () => {
    const ticket = new Ticket(1000);
    const finalPrice = ticket.calculateFinalPrice();
    expect(finalPrice).toBe(1000);
  });

  test('calculateFinalPrice should apply discounts correctly', () => {
    const ticket = new Ticket(1000);

    const discount1 = new Discount('Frequent Flyer', 100);
    const discount2 = new Discount('Early Booking', 50);

    ticket.addDiscount(discount1);
    ticket.addDiscount(discount2);

    const finalPrice = ticket.calculateFinalPrice();
    // 1000 - 100 - 50 = 850
    expect(finalPrice).toBe(850);
  });

  test('calculateFinalPrice should not allow negative prices', () => {
    const ticket = new Ticket(500);

    const discount = new Discount('Frequent Flyer', 600);

    ticket.addDiscount(discount);

    const finalPrice = ticket.calculateFinalPrice();
    // The final price should not be negative, so it should be 0
    expect(finalPrice).toBe(0);
  });
});
