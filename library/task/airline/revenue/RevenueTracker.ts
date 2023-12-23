// Updated RevenueTracker.ts
// Danh số trong hãng hàng không thường được tính dựa trên nhiều yếu tố khác nhau và có thể thay đổi tùy thuộc vào cách mà mỗi hãng hàng không tổ chức và quản lý chương trình đánh số của mình. Dưới đây là một số điểm thường gặp
class RevenueTracker {
    private flights: Map<string, number>; // Lưu danh sách chuyến bay và doanh số tương ứng
    private flightGroups: Map<string, number>; // Lưu doanh số của từng nhóm chuyến bay
    private totalRevenue: number;
  
    constructor() {
      this.flights = new Map();
      this.flightGroups = new Map();
      this.totalRevenue = 0;
    }
  
    recordRevenue(flightNumber: string, revenue: number, flightGroup: string): void {
      // Ghi chú doanh số của từng chuyến bay
      this.flights.set(flightNumber, revenue);
  
      // Cập nhật doanh số của từng nhóm chuyến bay
      const currentGroupRevenue = this.flightGroups.get(flightGroup) || 0;
      this.flightGroups.set(flightGroup, currentGroupRevenue + revenue);
  
      // Cập nhật tổng doanh thu
      this.totalRevenue += revenue;
    }
  
    getFlightRevenue(flightNumber: string): number | undefined {
      return this.flights.get(flightNumber);
    }
  
    getGroupRevenue(flightGroup: string): number | undefined {
      return this.flightGroups.get(flightGroup);
    }
  
    getTotalRevenue(): number {
      return this.totalRevenue;
    }
  }
  
  export { RevenueTracker };
  


// Tạo đối tượng RevenueTracker
const revenueTracker = new RevenueTracker();

// Ghi chú doanh số cho các chuyến bay và nhóm chuyến bay
revenueTracker.recordRevenue('SQ308', 5000, 'GroupA');
revenueTracker.recordRevenue('TR123', 3000, 'GroupB');
revenueTracker.recordRevenue('SQ309', 4000, 'GroupA');
revenueTracker.recordRevenue('TR124', 2000, 'GroupB');

// Lấy doanh số của một chuyến bay cụ thể
const flightNumber = 'SQ308';
const flightRevenue = revenueTracker.getFlightRevenue(flightNumber);
console.log(`Revenue for Flight ${flightNumber}: ${flightRevenue || 0}`);

// Lấy doanh số của một nhóm chuyến bay cụ thể
const group = 'GroupA';
const groupRevenue = revenueTracker.getGroupRevenue(group);
console.log(`Revenue for Group ${group}: ${groupRevenue || 0}`);

// Lấy tổng doanh thu của tất cả chuyến bay
const totalRevenue = revenueTracker.getTotalRevenue();
console.log(`Total Revenue: ${totalRevenue}`);