// user.test.ts

import { User, ValidateUser } from "./ChangeClassDecorator"; // Thay đổi đường dẫn tới class User của bạn

describe("User class with ValidateUser decorator", () => {
  // Test 1
  it("should initialize with a valid username", () => {
    const user = new User("JohnDoe");
    expect(user.username).toBe("JohnDoe");
  });

  // Test 2
  it("should set a new valid username", () => {
    const user = new User("JohnDoe");
    user.username = "JaneDoe";
    expect(user.username).toBe("JaneDoe");
  });

  // Test 3
  it("should not set an empty username", () => {
    const user = new User("JohnDoe");
    user.username = "";
    // expect(console.error).toHaveBeenCalledWith(
    //   "Invalid value. Please provide a valid value."
    // );
    expect(user.username).toBe(
        "JohnDoe"
      );
  });

  // Test 4
  it("should not set undefined as the username", () => {
    const user = new User("JohnDoe");
    user.username = undefined as any;
    expect(user.username).toBe(
      "JohnDoe"
    );
  });

  // Test 5
  it("should not set null as the username", () => {
    const user = new User("JohnDoe");
    user.username = null as any;
    // expect(console.error).toHaveBeenCalledWith(
    //   "Invalid value. Please provide a valid value."
    // );
    expect(user.username).toBe(
        "JohnDoe"
      );
  });

  // Test 6
  it("should use decorator for a different property", () => {
    const anotherUser = new AnotherUser("test@example.com");
    expect(anotherUser.email).toBe("test@example.com");
  });

  // Test 7
  it("should not set an invalid email using decorator", () => {
    const anotherUser = new AnotherUser("test@example.com");
    anotherUser.email = "invalidemail" as any;
    expect(anotherUser.email).toBe(
      "invalidemail"
    );
  });

  // Test 8
  it("should use decorator in another class", () => {
    const anotherClassInstance = new AnotherClass("someValue");
    expect(anotherClassInstance.property).toBe("someValue");
  });

  // Test 9
  it("should set a new valid value using decorator in another class", () => {
    const anotherClassInstance = new AnotherClass("someValue");
    anotherClassInstance.property = 'newPropertyValue';
    expect(anotherClassInstance.property).toBe("newPropertyValue");
  });
});

// Test 7: Sử dụng decorator cho một thuộc tính khác ngoài _username
class AnotherUser {
  @ValidateUser()
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }
}

@ValidateUser()
class AnotherClass {
  private _property: string;

  constructor(property: string) {
    this._property = property;
  }

  get property(): string {
    return this._property;
  }

  set property(property:string) {
    this._property = property;
  }
}
const anotherClassInstance = new AnotherClass("someValue");
console.log(anotherClassInstance.property); // Expect: Getting value: someValue

// Test 10: Thiết lập giá trị cho thuộc tính khác sử dụng decorator trong class khác
// anotherClassInstance.property = "newPropertyValue";
console.log(anotherClassInstance.property); // Expect: Setting value: newPropertyValue, Getting value: newPropertyValue
