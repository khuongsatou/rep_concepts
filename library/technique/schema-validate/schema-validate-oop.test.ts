import { JsonValidatorOOP,JsonValidator, yourComplexSchemaOOP } from './schema-validate-oop';

describe('JsonValidator', () => {
  it('should validate valid data', () => {
    const jsonData = {
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      phone: "5551234567",
      birthdate: "1990-01-01",
      website: "https://example.com",
      address: {
        street:"290",
        city:"HCM",
      },
    };

    const jsonValidator = new JsonValidator();
    const isValid = jsonValidator.validate(jsonData, yourComplexSchemaOOP);

    expect(isValid).toBe(true);
  });

  it('should not validate invalid data', () => {
    const jsonData = {
      "name": "John Doe",
      // Missing required field "email"
      // ...
    };

    const jsonValidator = new JsonValidator();
    const isValid = jsonValidator.validate(jsonData, yourComplexSchemaOOP);

    expect(isValid).toBe(false);
  });

  // Thêm các test case khác nếu cần
});
