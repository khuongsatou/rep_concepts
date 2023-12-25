export class Product {
    constructor(public name: string, public price: number) {}
}

export class OrderItem {
    constructor(public product: Product, public quantity: number) {}

    getTotal(): number {
        return this.product.price * this.quantity;
    }
}

export class Order {
    private orderItems: OrderItem[] = [];

    addItem(item: OrderItem): void {
        this.orderItems.push(item);
    }

    getTotalOrderAmount(): number {
        return this.orderItems.reduce((total, item) => total + item.getTotal(), 0);
    }

    displayOrderSummary(): void {
        console.log('Order Summary:');
        console.log('-------------------------');
        this.orderItems.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity} - Total: $${item.getTotal()}`);
        });
        console.log('-------------------------');
        console.log(`Total Order Amount: $${this.getTotalOrderAmount()}`);
    }
}

// Example Usage:

const laptop = new Product('Laptop', 1000);
const smartphone = new Product('Smartphone', 500);

const laptopOrderItem = new OrderItem(laptop, 2);
const smartphoneOrderItem = new OrderItem(smartphone, 3);

const order = new Order();
order.addItem(laptopOrderItem);
order.addItem(smartphoneOrderItem);

order.displayOrderSummary();
