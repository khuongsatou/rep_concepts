import { Flight } from './NetPrice';

describe('Flight', () => {
  test('calculateNetPrice tính đúng giá net của chuyến bay', () => {
    const flight = new Flight(100, 20, 10);
    const netPrice = flight.calculateNetPrice();

    expect(netPrice).toBe(130); // 100 (giá cơ bản) + 20 (phí dịch vụ) + 10 (thuế) = 130
  });

  test('calculateNetPrice với giá, phí dịch vụ và thuế khác nhau', () => {
    const flight = new Flight(150, 30, 15);
    const netPrice = flight.calculateNetPrice();

    expect(netPrice).toBe(195); // 150 + 30 + 15 = 195
  });

  // Thêm các test khác nếu cần
});
