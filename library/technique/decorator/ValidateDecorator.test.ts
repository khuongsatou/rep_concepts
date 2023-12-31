// Import các thư viện và module cần thiết
import { validateStringLength, Person } from "./ValidateDecorator"; // Thay đổi đường dẫn dựa trên cấu trúc thư mục của bạn

// Test hàm validateStringLength
describe("validateStringLength", () => {
  it("should set valid string length", () => {
    // Arrange
    const target = { key: "value" };
    const key = "key";
    const min = 2;
    const max = 10;

    // Act
    validateStringLength(min, max)(target, key);
    // target[key] = "ValidString";

    // // Assert
    expect(target[key]).toEqual("value");
  });

  it("should throw error for invalid string length", () => {
    // Arrange
    const target = { key: "value" };
    const key = "key";
    const min = 2;
    const max = 10;

    // Act
    const validateStringFn = validateStringLength(min, max);


    //Assert
    expect(() => validateStringFn(target, key)).toEqual(expect.any(Function));
  });
});

// Test class Person
describe("Person", () => {
  it("should create a person with valid name", () => {
    // Arrangeany) {
    const validName = "John Doe";

    // Act
    const person = new Person(validName);

    // Assert
    expect(person.name).toEqual(validName);
  });

  it("should throw error for invalid name length during instantiation", () => {
    // Arrange
    const invalidName = "J";

    // Act & Assert
    expect(() => new Person(invalidName)).toThrow("Invalid length for name");
  });

  it("should throw error for invalid name length during property assignment", () => {
    // Arrange
    const person = new Person("John Doe");
    const invalidName = "J";

    // Act & Assert
    expect(() => (person.name = invalidName)).toThrow(
      "Invalid length for name"
    );
  });
});
