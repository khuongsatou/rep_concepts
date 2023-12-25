// Hệ thống đặt vé sự kiện Date được dùng như thế nào
// Ý tưởng: Lấy thời gian diễn ra sự kiện - thời gian hiện tại = số ngày và số giờ còn lại diễn ra sự kiện
export class DateEvent {
    eventName: string;
    eventDate: Date;
  
    constructor(eventName: string, eventDate: Date) {
      this.eventName = eventName;
      this.eventDate = eventDate;
    }
  
    displayEventDetails() {
      console.log(`Sự kiện: ${this.eventName}`);
      console.log(`Thời gian: ${this.eventDate.toLocaleString()}`);
    }
  
    calculateTimeRemaining() {
      const currentTime = new Date();
      const timeDiff = this.eventDate.getTime() - currentTime.getTime();
      const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      // Tính toán số ngày còn lại bằng cách chia sự chênh lệch thời gian (timeDiff) cho số mili giây trong một ngày (1000 mili giây * 60 giây * 60 phút * 24 giờ). Hàm Math.floor được sử dụng để làm tròn xuống và đảm bảo kết quả là một số nguyên.
      const hoursRemaining = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // const hoursRemaining = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));: Tính toán số giờ còn lại bằng cách lấy phần dư của sự chênh lệch thời gian cho số mili giây trong một ngày, sau đó chia cho số mili giây trong một giờ. Cũng sử dụng Math.floor để làm tròn xuống.
      console.log(`Thời gian còn lại: ${daysRemaining} ngày ${hoursRemaining} giờ`);
    }
  }
  
  // Sử dụng
  const concertDate = new Date(2023, 0, 12, 24, 0); // 1st January 2023, 8:00 PM
  const concert = new DateEvent("Đêm nhạc Year-end", concertDate);
  // concert.displayEventDetails();
  // concert.calculateTimeRemaining();
  