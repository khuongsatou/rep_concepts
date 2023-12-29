export class CustomDate {
    private date: Date;
  
    constructor(date: Date) {
      this.date = date;
    }
  
    formatRelative(): string {
      const now = new Date();
      const diff = now.getTime() - this.date.getTime();
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const years = Math.floor(days / 365);
  
      if (seconds < 60) {
        return `${seconds} giây trước`;
      } else if (minutes < 60) {
        return `${minutes} phút trước`;
      } else if (hours < 24) {
        return `${hours} giờ trước`;
      } else if (days < 365) {
        return `${days} ngày trước`;
      } else {
        return `${years} năm trước`;
      }
    }
  }
  
  // Sử dụng
  const now = new Date();
  const oneSecondAgo = new CustomDate(new Date(now.getTime() - 1000));
  const oneMinuteAgo = new CustomDate(new Date(now.getTime() - 60000));
  const oneHourAgo = new CustomDate(new Date(now.getTime() - 3600000));
  const oneDayAgo = new CustomDate(new Date(now.getTime() - 86400000));
  const oneYearAgo = new CustomDate(new Date(now.getTime() - 31536000000)); // 1 năm = 365 * 24 * 60 * 60 * 1000 milliseconds
  
  console.log(oneSecondAgo.formatRelative()); // Output: 1 giây trước
  console.log(oneMinuteAgo.formatRelative()); // Output: 1 phút trước
  console.log(oneHourAgo.formatRelative());   // Output: 1 giờ trước
  console.log(oneDayAgo.formatRelative());    // Output: 1 ngày trước
  console.log(oneYearAgo.formatRelative());   // Output: 1 năm trước
  