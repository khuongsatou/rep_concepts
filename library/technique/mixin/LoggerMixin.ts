// Mixin
const LoggerMixin = {
  log(message) {
    console.log(message);
  },
};

// Đối tượng sử dụng mixin
const myObject = {
  name: "Example",
  // Kết hợp mixin vào đối tượng
  ...LoggerMixin,
};

// Gọi phương thức từ mixin
myObject.log("Hello, mixin!");
