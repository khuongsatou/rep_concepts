// Trong ví dụ này:

// logMetadata là một decorator, được sử dụng để gán metadata cho phương thức methodWithMetadata.
// Reflect.defineMetadata được sử dụng để gán giá trị metadata cho phương thức.
// Reflect.getMetadata được sử dụng để lấy giá trị metadata từ phương thức.
// Lưu ý rằng decorators làm việc từ trên xuống dưới (top-down), nghĩa là chúng được áp dụng khi class được định nghĩa, chứ không phải sau khi instance được tạo ra. Do đó, để đảm bảo metadata được thiết lập, phương thức được gọi sau khi instance được tạo ra.



import "reflect-metadata";

// Decorator for adding metadata
function logMetadataDecorator(): any {
  return function logMetadata(target?: any, key?: string | undefined): any {
    const metadataValue = `Metadata for ${key}`;
    Reflect.defineMetadata("customMetadataKey", metadataValue, target!, key!);
  };
}

class ExampleClass {
  @logMetadataDecorator()
  methodWithMetadata() {
    // Method implementation
  }

  getPropertyMetadata() {
    const metadataValue = Reflect.getMetadata(
      "customMetadataKey",
      this,
      "methodWithMetadata"
    );
    return metadataValue;
  }
}

// Create an instance of the class
const exampleInstance = new ExampleClass();

// Call the method to trigger the decorator
exampleInstance.methodWithMetadata();

// Get and log the metadata value
const metadataValue = exampleInstance.getPropertyMetadata();
console.log(metadataValue); // Output: Metadata for methodWithMetadata
