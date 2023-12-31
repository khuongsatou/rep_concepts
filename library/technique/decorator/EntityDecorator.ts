// Decorator để đánh dấu các thuộc tính của một entity
function LogProperty() :any{
  return function LogPropertyDecorator(target: any, key: string): any {
    // Lấy giá trị hiện tại của thuộc tính
    let value = target[key];

    // Định nghĩa một getter để log giá trị khi được truy cập
    const getter = function () {
      console.log(`Getting ${key}: ${value}`);
      return value;
    };

    // Định nghĩa một setter để log giá trị khi được thiết lập
    const setter = function (newValue: any) {
      console.log(`Setting ${key} to: ${newValue}`);
      value = newValue;
    };

    // Thay thế thuộc tính hiện tại bằng getter và setter đã định nghĩa
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

// Sử dụng decorator trên một class
class Person {
  @LogProperty()
  firstName: string;

  @LogProperty()
  lastName: string;

  @LogProperty()
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// Tạo một đối tượng từ lớp Person
const person = new Person("John", "Doe", 30);

// Khi truy cập hoặc thiết lập thuộc tính, decorator sẽ log thông tin
person.firstName; // In ra: Getting firstName: John
person.lastName = "Smith"; // In ra: Setting lastName to: Smith
