// Kiểm tra từ log xem có đúng không
describe("color decorator", () => {
  test("bài kiểm thử ví dụ", () => {
    // Tạo ra một spy trên console.log
    const logSpy = jest.spyOn(console, "log");

    // Gọi hàm sử dụng console.log
    myFunction();
    // Kiểm tra xem console.log có được gọi với các đối số mong đợi không
    expect(logSpy).toHaveBeenCalledWith("Xin chào, thế giới!");

    // Khôi phục phương thức console.log gốc
    logSpy.mockRestore();
  });
});

function myFunction() {
  console.log("Xin chào, thế giới!");
  // console.log("In File: SynOn.test.ts, Line: 19");
}
