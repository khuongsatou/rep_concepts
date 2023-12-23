import { Ticket, RefundProcessor } from './Refund'; // Thay 'yourFileName' bằng tên tệp chứa mã nguồn

describe('RefundProcessor', () => {
  test('processRefund trả về mức hoàn trả đúng', () => {
    const originalTicket = new Ticket('HCMC to Hanoi', 200);
    const cancellationFee = 20;

    const refundAmount = RefundProcessor.processRefund(originalTicket, cancellationFee);

    // Kiểm tra xem mức hoàn trả có đúng như kỳ vọng hay không
    expect(refundAmount).toBe(180); // Giá vé ban đầu - Phí hủy
  });

  test('processRefund trả về 0 nếu phí hủy lớn hơn giá vé', () => {
    const originalTicket = new Ticket('HCMC to Hanoi', 200);
    const cancellationFee = 250; // Phí hủy lớn hơn giá vé

    const refundAmount = RefundProcessor.processRefund(originalTicket, cancellationFee);

    // Kiểm tra xem mức hoàn trả có bằng 0 như kỳ vọng hay không
    expect(refundAmount).toBe(0);
  });
});

