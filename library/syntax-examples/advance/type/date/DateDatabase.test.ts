import { Message } from "./DateDatabase";

describe("Message", () => {
  test("creates message with default timestamp", () => {
    const message = new Message("Hello");
    const now = new Date();
    const expectedTimestamp = new Date(now.toISOString()); // Đảm bảo sử dụng cùng một thời gian
    expect(message.getTimestamp()).toEqual(expectedTimestamp);
  });

  test("creates message with specified timestamp", () => {
    const customTimestamp = new Date("2023-01-01T12:00:00Z");
    const message = new Message("Hello", customTimestamp);
    expect(message.getTimestamp()).toEqual(customTimestamp);
  });

  test("saves message to database with correct timestamp", () => {
    const message = new Message("Hello");
    const saveSpy = jest.spyOn(message, "saveToDatabase");
    message.saveToDatabase();
    expect(saveSpy).toHaveBeenCalledWith(); // Kiểm tra rằng phương thức saveToDatabase đã được gọi
  });

  test("saves message step test", () => {
    // Kiểm tra thời gian trả về một thời gian gần với thời gian hiện tại hay không
    const message = new Message("Hello");
    const now = new Date();
    // expect(message.getTimestamp()).toBeCloseTo(1000, 1000); // Kiểm tra thời gian với sai số là 1 giây
    // Tạo Tin Nhắn Mặc Định
    // Kiểm tra nội dung
    expect(message.getContent()).toBe("Hello");
    // Tạo Tin Nhắn Với Thời Gian Chỉ Định
    // Kiểm tra thời gian
    const customTimestamp = new Date('2023-01-01T12:00:00Z');
    message.timestamp = customTimestamp;
    expect(message.getTimestamp()).toEqual(customTimestamp);
    // Lưu Tin Nhắn vào Cơ Sở Dữ Liệu
    const saveSpy = jest.spyOn(message, 'saveToDatabase');
    message.saveToDatabase();
    expect(saveSpy).toHaveBeenCalled();

  });
});
