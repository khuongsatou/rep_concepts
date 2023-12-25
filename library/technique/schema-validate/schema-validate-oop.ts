interface Schema {
  $schema?: string;
  type: string;
  properties?: { [key: string]: Schema };
  items?: Schema;
  required?: string[];
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  format?: string;
  enum?: string[];
  anyOf?: Schema[];
  allOf?: Schema[];
  if?: Schema;
  then?: Schema;
}

abstract class BaseValidator {
  abstract validate(data: any, schema: Schema): boolean;

  protected validateByType(data: any, schema: Schema): boolean {
    switch (schema.type) {
      case 'object':
        return new ObjectValidator().validate(data, schema);
      case 'array':
        return new ArrayValidator().validate(data, schema);
      case 'string':
        return new StringValidator().validate(data, schema);
      case 'integer':
        return new IntegerValidator().validate(data, schema);
      // Thêm các trường hợp xử lý cho các kiểu dữ liệu khác nếu cần
      default:
        return false;
    }
  }
}

class ObjectValidator extends BaseValidator {
  validate(data: any, schema: Schema): boolean {
    if (schema.type !== "object") {
      return false;
    }

    for (const prop in schema.properties) {
      if (data[prop] !== undefined) {
        const subSchema = schema.properties[prop];
        const subData = data[prop];
        if (!this.validateByType(subData, subSchema)) {
          return false;
        }
      } else if (schema.required && schema.required.includes(prop)) {
        return false;
      }
    }

    return true;
  }
}

class ArrayValidator extends BaseValidator {
  validate(data: any, schema: Schema): boolean {
    if (schema.type !== "array") {
      return false;
    }

    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const subData = data[i];
        const subSchema = schema.items!;

        if (!this.validateByType(subData, subSchema)) {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }
}

class StringValidator extends BaseValidator {
  validate(data: any, schema: Schema): boolean {
    if (schema.type !== "string") {
      return false;
    }

    if (typeof data !== "string") {
      return false;
    }


    return (
      !(schema.minLength && data.length < schema.minLength) &&
      !(schema.maxLength && data.length > schema.maxLength) &&
      !(schema.format === "email" && !this.validateEmail(data)) &&
      !(schema.format === "phone" && !this.validatePhone(data)) &&
      !(schema.format === "date" && !this.validateDate(data)) &&
      !(schema.format === "url" && !this.validateURL(data))
    );
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validatePhone(phone: string): boolean {
    const phoneRegex = /^\d{10,}$/;
    return phoneRegex.test(phone);
  }

  private validateDate(date: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }

  private validateURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
}

class IntegerValidator extends BaseValidator {
  validate(data: any, schema: Schema): boolean {
    if (schema.type !== "integer") {
      return false;
    }
    return !(Number.isInteger(data) && schema.minimum && data < schema.minimum);
  }
}

class EnumValidator extends BaseValidator {
  validate(data: any, schema: Schema): boolean {
    if (!schema.enum) {
      return false;
    }

    return schema.enum.includes(data);
  }
}

class AnyOfValidator extends BaseValidator {
  validate(data: any, schema: Schema): boolean {
    if (!schema.anyOf) {
      return false;
    }

    return schema.anyOf.some((subSchema) => this.validate(data, subSchema));
  }
}

class AllOfValidator extends BaseValidator {
  validate(data: any, schema: Schema): boolean {
    if (!schema.allOf) {
      return false;
    }

    return schema.allOf.every((subSchema) => this.validate(data, subSchema));
  }
}

class IfThenValidator extends BaseValidator {
  validate(data: any, schema: Schema): boolean {
    if (!schema.if || !schema.then) {
      return false;
    }

    return this.validate(data, schema.if)
      ? this.validate(data, schema.then)
      : true;
  }
}

export class JsonValidator {
  private validators: { [type: string]: BaseValidator } = {
    object: new ObjectValidator(),
    array: new ArrayValidator(),
    string: new StringValidator(),
    integer: new IntegerValidator(),
    enum: new EnumValidator(),
    anyOf: new AnyOfValidator(),
    allOf: new AllOfValidator(),
    ifThen: new IfThenValidator(),
  };

  validate(data: any, schema: Schema): boolean {
    const validator = this.validators[schema.type];
    return validator ? validator.validate(data, schema) : false;
  }
}


export const yourComplexSchemaOOP: Schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "integer", minimum: 0 },
      address: {
        type: "object",
        properties: {
          street: { type: "string" },
          city: { type: "string" },
        },
        required: ["street", "city"],
      },
      contacts: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: { type: "string", enum: ["email", "phone"] },
            value: { type: "string" },
          },
          required: ["type", "value"],
        },
      },
    },
    required: ["name", "age","address"],
  };

// Dữ liệu cần kiểm tra
export const JsonValidatorOOP = {
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

// Thực hiện kiểm tra
const jsonValidator = new JsonValidator();
const isValidOOP: boolean = jsonValidator.validate(
    JsonValidatorOOP,
  yourComplexSchemaOOP
);

if (isValidOOP) {
  console.log("Data is valid according to the schema.");
} else {
  console.log("Data is not valid.");
}
