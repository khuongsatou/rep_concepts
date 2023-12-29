import { Product, OrderItem, Order } from './Order';

describe('OrderManagement', () => {
    let laptop: Product;
    let smartphone: Product;
    let laptopOrderItem: OrderItem;
    let smartphoneOrderItem: OrderItem;
    let order: Order;

    beforeEach(() => {
        laptop = new Product('Laptop', 1000);
        smartphone = new Product('Smartphone', 500);

        laptopOrderItem = new OrderItem(laptop, 2);
        smartphoneOrderItem = new OrderItem(smartphone, 3);

        order = new Order();
    });

    test('should add an item to the order', () => {
        order.addItem(laptopOrderItem);
        expect(order.getTotalOrderAmount()).toBe(2000);
    });

    test('should calculate total order amount', () => {
        order.addItem(laptopOrderItem);
        order.addItem(smartphoneOrderItem);
        expect(order.getTotalOrderAmount()).toBe(3500);
    });

    test('should display order summary', () => {
        order.addItem(laptopOrderItem);
        order.addItem(smartphoneOrderItem);

        const consoleSpy = jest.spyOn(console, 'log');
        order.displayOrderSummary();

        expect(consoleSpy).toHaveBeenCalledTimes(6); // 6 log statements
        expect(consoleSpy).toHaveBeenCalledWith('Order Summary:');
        expect(consoleSpy).toHaveBeenCalledWith('-------------------------');
        expect(consoleSpy).toHaveBeenCalledWith('Laptop - Quantity: 2 - Total: $2000');
        expect(consoleSpy).toHaveBeenCalledWith('Smartphone - Quantity: 3 - Total: $1500');
        expect(consoleSpy).toHaveBeenCalledWith('-------------------------');
        expect(consoleSpy).toHaveBeenCalledWith('Total Order Amount: $3500');
    });
});
