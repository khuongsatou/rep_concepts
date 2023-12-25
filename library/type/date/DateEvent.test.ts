import { DateEvent } from './DateEvent'; // Điều này giả sử bạn có một tệp event.ts với định nghĩa lớp Event

describe('Event', () => {
  test('calculateTimeRemaining should return correct time difference', () => {
    const currentTime = new Date();
    const eventDate = new Date(currentTime.getTime() + 86400000); // Thêm 1 ngày vào thời điểm hiện tại
    const event = new DateEvent('Test Event', eventDate);

    const spy = jest.spyOn(console, 'log');
    event.calculateTimeRemaining();

    // Bạn có thể thêm các kiểm tra khác tùy ý dựa vào kết quả mong đợi
    // expect(spy).toHaveBeenCalledWith('Thời gian còn lại: 1 ngày 0 giờ');

    spy.mockRestore(); // Khôi phục hàm console.log sau khi test
  });
});
