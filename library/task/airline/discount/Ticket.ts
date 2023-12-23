// Ticket.ts

//Chiết khấu hàng không là một chính sách giảm giá được áp dụng trong ngành hàng không để khuyến khích đặt vé một cách linh hoạt và thúc đẩy việc bán vé máy bay. Chính sách này có thể áp dụng cho một số hành khách hoặc tình huống cụ thể. Dưới đây là một số loại chiết khấu phổ biến trong ngành hàng không:
// Muốn tính 1 vé gồm nhiều loại chiết khấu: ví dụ : khách hàng vip 10%, khách hàng thân thiết 2%
// Tổng tiền - sum[% chiếc khấu]
import { Discount } from './Discount';

class Ticket {
  basePrice: number;
  discounts: Discount[];

  constructor(basePrice: number) {
    this.basePrice = basePrice;
    this.discounts = [];
  }

  addDiscount(discount: Discount): void {
    this.discounts.push(discount);
  }

  calculateFinalPrice(): number {
    // Tính tổng chiết khấu
    const totalDiscount = this.discounts.reduce((sum, discount) => sum + discount.amount, 0);

    // Áp dụng chiết khấu vào giá vé cơ bản
    const finalPrice = this.basePrice - totalDiscount;

    // Đảm bảo giá không âm
    return Math.max(finalPrice, 0);
  }
}

export { Ticket };
