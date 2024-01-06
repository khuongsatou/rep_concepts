//jest.spyOn là một phương thức trong thư viện Jest được sử dụng để tạo một mock function (hàm giả mạo) cho một phương thức của đối tượng và theo dõi việc gọi và thay đổi hành vi của phương thức đó.

//Dưới đây là một ví dụ sử dụng jest.spyOn:


//Trong ví dụ này, jest.spyOn được sử dụng để tạo một mock function cho phương thức add của đối tượng math. Sau đó, chúng ta gọi phương thức thực tế math.add(2, 3) và kiểm tra thông tin về lần gọi, đối số và các phương thức khác liên quan đến mock function thông qua thuộc tính mock của nó.

//jest.spyOn thường được sử dụng để kiểm tra cách mà phương thức được gọi trong unit testing và để thay đổi hành vi của phương thức để phản ánh các điều kiện kiểm thử cụ thể.

class MathOperations {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  }
  

  
 
  

  // Kiểm tra từ log xem có đúng không
describe("Math Operations test", () => {
  test("Kiểm tra cộng 2 số true nếu thành công", () => {
      // Tạo một đối tượng thực tế của lớp MathOperations
  const math = new MathOperations();
  
  // Sử dụng jest.spyOn để tạo mock function cho phương thức add
  const mockAdd = jest.spyOn(math, 'add');
  
  // Gọi phương thức thực tế
  const result = math.add(2, 3);
  
  // Kiểm tra số lần gọi và các đối số
  console.log(mockAdd.mock.calls); // [[2, 3]]
  console.log(mockAdd.mock.calls.length); // 1
    // Tạo ra một spy trên console.log
   // Kiểm tra xem phương thức đã được gọi với các đối số cụ thể hay không
   expect(mockAdd).toHaveBeenCalledWith(2, 3);
  });
});