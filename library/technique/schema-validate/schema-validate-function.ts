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

  const yourComplexSchema: Schema = {
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
  required: ["name", "age"],
};
  
  function validateData(data: any, schema: Schema): boolean {
    if (schema.type === 'object') {
      for (const prop in schema.properties) {
        if (data[prop] !== undefined) {
          const subSchema = schema.properties[prop];
          const subData = data[prop];
  
          // Đệ quy gọi hàm kiểm tra cho các thuộc tính con
          if (!validateData(subData, subSchema)) {
            return false;
          }
        } else if (schema.required && schema.required.includes(prop)) {
          // Nếu thuộc tính bắt buộc mà không tồn tại, trả về false
          return false;
        }
      }
  
      return true;
    } else if (schema.type === 'array') {
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          const subData = data[i];
          const subSchema = schema.items!;
  
          // Đệ quy gọi hàm kiểm tra cho từng phần tử mảng
          if (!validateData(subData, subSchema)) {
            return false;
          }
        }
  
        return true;
      } else {
        return false;
      }
    } else if (schema.type === 'string') {
      if (typeof data === 'string') {
        if (
          (schema.minLength && data.length < schema.minLength) ||
          (schema.maxLength && data.length > schema.maxLength) ||
          (schema.format === 'email' && !validateEmail(data))
        ) {
          return false;
        }
        return true;
      }
      return false;
    } else if (schema.type === 'integer') {
      if (Number.isInteger(data) && schema.minimum && data < schema.minimum) {
        return false;
      }
      return true;
    } else if (schema.enum && schema.enum.includes(data)) {
      return true;
    } else if (schema.anyOf) {
      return schema.anyOf.some(subSchema => validateData(data, subSchema));
    } else if (schema.allOf) {
      return schema.allOf.every(subSchema => validateData(data, subSchema));
    } else if (schema.if && schema.then) {
      if (validateData(data, schema.if)) {
        return validateData(data, schema.then);
      }
      return true;
    } else {
      return false;
    }
  }
  
  function validateEmail(email: string): boolean {
    // Hàm kiểm tra định dạng email đơn giản
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Dữ liệu cần kiểm tra
  const jsonData = {
    "name": "John Doe",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Cityville"
    },
    "contacts": [
      { "type": "email", "value": "john@example.com" },
      { "type": "phone", "value": "555-1234" }
    ]
  };
  
  // Thực hiện kiểm tra
  const isValid: boolean = validateData(jsonData, yourComplexSchema);
  
  if (isValid) {
    console.log("Data is valid according to the schema.");
  } else {
    console.log("Data is not valid.");
  }
  