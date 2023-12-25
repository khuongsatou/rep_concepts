export class DateTimeUtils {
    // Tạo kiểu string có T
    static dateToString(date: Date): string {
      return date.toISOString();
    }
    
    // Chuyển lại thành Date
    static stringToDate(dateTimeString: string): Date {
      return new Date(dateTimeString);
    }
    
    // Format đúng định dạng hiển thị cho khách hàng
    static formatDateTime(date: Date): string {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
  
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
  }
  
  // Sử dụng lớp DateTimeUtils
  const currentDate = new Date();
  
  // Sử dụng phương thức chuyển đổi từ Date sang chuỗi thời gian
  const dateTimeString = DateTimeUtils.dateToString(currentDate);
  console.log('Thời gian theo chuỗi:', dateTimeString);
  
  // Sử dụng phương thức chuyển đổi từ chuỗi thời gian sang Date
  const parsedDate = DateTimeUtils.stringToDate(dateTimeString);
  console.log('Thời gian từ chuỗi về Date:', parsedDate);
  
  // Sử dụng phương thức định dạng thời gian
  const formattedDateTime = DateTimeUtils.formatDateTime(currentDate);
  console.log('Thời gian định dạng:', formattedDateTime);
  