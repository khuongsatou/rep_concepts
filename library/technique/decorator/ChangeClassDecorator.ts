// Decorator function
export function ValidateUser(): any {
  return function ValidateUserDecorator(target: any, key: string): any {
    let value = target[key]; // Lấy giá trị hiện tại của thuộc tính
    console.log("In File: ChangeClassDecorator.ts, Line: 4", target);
    console.log("In File: ChangeClassDecorator.ts, Line: 5", key);
    const getter = function () {
      console.log(`Getting value: ${value}`);
      return value;
    };

    const setter = function (newVal: any) {
      if (newVal) {
        console.log(`Setting value: ${newVal}`);
        value = newVal;
      } else {
        console.error("Invalid value. Please provide a valid value.");
      }
    };

    // Thay đổi cách thuộc tính được định nghĩa
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

// Sample class using the decorator
export class User {
  @ValidateUser()
  private _username: string; // Sử dụng thuộc tính private để tránh trực tiếp truy cập

  constructor(username: string) {
    this._username = username;
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }
}

// Test the class
const user = new User("JohnDoe");
console.log(user.username); // Getting value: JohnDoe

// Try setting an invalid value
user.username = "a"; // Invalid value. Please provide a valid value.
console.log("In File: ChangeClassDecorator.ts, Line: 55", user.username);
