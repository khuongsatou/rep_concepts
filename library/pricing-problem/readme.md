![alt](https://github.com/khuongsatou/rep_concepts/blob/dev_1/library/pricing-problem/discount.png)

# Các vấn đề:
# Các vấn đề cơ bản
1. Tính tổng tiền các sản phẩm: Tổng tiền = giá tiền SP * SL SP
2. Thêm giảm giá: Tổng tiền đã giảm giá  = Tổng tiền * (1- % giảm giá)
3. Thêm thuế: Tổng tiền thuế = Tổng tiền - Tổng tiền * % thuế
________________________________________________________________
# Các vấn đề khác
1. Phí vận chuyển và giảm giá: Tổng tiền Phí vận chuyển + giảm giá
```javascript
  calculateTotalWithDiscountAndShipping(discountRate: number, shippingCost: number): number {
    const discountedTotal = this.applyDiscount(discountRate);
    return discountedTotal + shippingCost;
  }
```
2. Tính chi phí tồn kho: Phí tồn kho = phí sản phẩm * số lượng tồn kho
```javascript
 calculateInventoryValue(costPerItem: number, quantityInStock: number): number {
    return costPerItem * quantityInStock;
  }
```
3. Tính lợi nhuận: tổng lợi nhuận = tổng doanh thu - tổng chi phí
```javascript
calculateProfit(totalCost: number): number {
    const totalRevenue = this.calculateTotal();
    return totalRevenue - totalCost;
  }
```
4. Tính chi phí tồn kho còn lại trong sản phẩm: tổng = phí * số lượng
```javascript
  calculateInventoryValue(costPerItem: number): number {
    return this.items.reduce((total, item) => total + costPerItem * item.quantity, 0);
  }


```
5. Tính lợi nhuận: tổng lợi nhuận = tổng chi phí x (% lợi nhuận mong muốn)
```javascript
  calculateProjectPrice(projectCost: number, desiredProfit: number): number {
    const totalCost = this.calculateTotal() + projectCost;
    const totalRevenue = totalCost + totalCost * (desiredProfit / 100);
    return totalRevenue;
  }

```



- Tính tiền sau khi áp dụng thuế và mã giảm giá.
// Tính toán tổng giá trị sau khi áp dụng thuế
const totalWithTax = discountedTotal + discountedTotal * taxRate;
```javascript
const shoppingCart = new ShoppingCart([
  { price: 10, quantity: 2 },
  { price: 5, quantity: 3 },
  { price: 8, quantity: 1 },
]);

// Áp dụng giảm giá 10% và tính tổng giá trị sau khi áp dụng thuế 5%
const totalWithTax = shoppingCart.calculateTotalWithTax(0.05);

// In ra kết quả
console.log("Tổng giá trị sau khi áp dụng giảm giá và thuế là:", totalWithTax);

```
Tổng giá trị sau khi áp dụng giảm giá và thuế là: 45.15


- Tính giá khuyến mãi: Áp dụng giảm giá bằng cách trừ đi một phần của tổng giá trị
const discountedTotal = total - total * discountRate;
=> Tính toán giảm giá bằng cách trừ đi một phần của tổng giá trị
```javascript
const customerTotalAmount = 100; // Tổng giá trị trước khi giảm giá
const appliedDiscount = { percentage: 0.1 }; // Giả sử giảm giá 10%

const discountedAmount = customerTotalAmount * (1 - appliedDiscount.percentage);

console.log("Tổng giá trị sau khi giảm giá là:", discountedAmount);
(1 - 0.1) * 100 = 0.9 * 100 = 90
```
Tổng giá trị sau khi giảm giá là: 90



- Tính tổng tiền các đối tượng trong mảng price * quantity: this.items.reduce((total, item) => total + item.price * item.quantity, 0)
```javascript

const shoppingCart = new ShoppingCart([
  { price: 10, quantity: 2 },
  { price: 5, quantity: 3 },
  { price: 8, quantity: 1 },
]);
(10×2)+(5×3)+(8×1)=20+15+8=43
```
=> Tổng: 43
