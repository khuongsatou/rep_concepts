//Trong ngữ cảnh của ngành hàng không, "giá net" thường là giá cuối cùng mà hành khách phải thanh toán cho một vé máy bay sau khi đã loại bỏ các chi phí và thuế. Giá net bao gồm giá vé cơ bản, nhưng có thể có thêm chi phí và thuế phụ thuộc vào các yếu tố như hạng phòng chờ, dịch vụ bổ sung, và điều kiện đặt vé.
export class Flight {
    private basePrice: number;
    private serviceFee: number;
    private tax: number;
  
    constructor(basePrice: number, serviceFee: number, tax: number) {
      this.basePrice = basePrice;
      this.serviceFee = serviceFee;
      this.tax = tax;
    }
  
    calculateNetPrice(): number {
      // Tính toán giá net bằng cách cộng giá cơ bản, phí dịch vụ và thuế
      return this.basePrice + this.serviceFee + this.tax;
    }
  }
  
  // Sử dụng lớp Flight
  const flight1 = new Flight(100, 20, 10);
  const netPrice1 = flight1.calculateNetPrice();
//   console.log(`Giá net của chuyến bay 1 là: $${netPrice1}`);
  
  const flight2 = new Flight(150, 30, 15);
  const netPrice2 = flight2.calculateNetPrice();
//   console.log(`Giá net của chuyến bay 2 là: $${netPrice2}`);
  