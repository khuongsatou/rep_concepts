export class Ticket {
    constructor(private route: string, private price: number) {}
  
    getRoute(): string {
      return this.route;
    }
  
    getPrice(): number {
      return this.price;
    }
  }
  //"Hoàn vé" là quy trình của việc hủy bỏ một đặt chỗ hay vé máy bay và nhận lại một phần hoặc toàn bộ số tiền đã thanh toán. Quy trình này thường áp dụng khi hành khách quyết định không sử dụng chuyến bay đã đặt hoặc có nhu cầu hủy bỏ lịch trình.
  export  class RefundProcessor {
    static processRefund(ticket: Ticket, cancellationFee: number): number {
      // Kiểm tra điều kiện hoàn vé, ví dụ: thời gian hủy vé, chính sách vé, ...
  
      // Tính toán mức hoàn trả
      const refundAmount = ticket.getPrice() - cancellationFee;
      if (refundAmount < 0 ) {
        return 0;
      }
      // Xử lý hoàn vé, có thể là quy trình liên quan đến hệ thống thanh toán, cập nhật dữ liệu, ...
  
      return refundAmount;
    }
  }
  
  // Sử dụng
  const originalTicket = new Ticket('HCMC to Hanoi', 200);
  console.log('Original Ticket:', originalTicket.getRoute(), originalTicket.getPrice());
  
  const cancellationFee = 20; // Phí hủy vé, có thể được xác định theo chính sách của hãng hàng không
  const refundAmount = RefundProcessor.processRefund(originalTicket, cancellationFee);
  
  console.log('Refund Amount:', refundAmount);
  