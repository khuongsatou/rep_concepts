# Nodejs làm được gì
- Node.js chạy trên trình thực thi JavaScript V8, là cốt lõi của trình duyệt Google Chrome, nhưng nằm ngoài môi trường trình duyệt.
- Ứng dụng Node.js chạy trong một quy trình đơn, mà không tạo ra một luồng mới cho mỗi yêu cầu. 
- Node.js cung cấp một bộ nguyên tắc I/O không đồng bộ trong thư viện tiêu chuẩn của nó, ngăn mã JavaScript bị chặn và nói chung
- Các thư viện trong Node.js được viết bằng cách sử dụng các mô hình không đồng bộ, làm cho hành vi chặn trở nên ngoại lệ thay vì quy tắc.
- Khi Node.js thực hiện một hoạt động I/O, chẳng hạn như đọc từ mạng, truy cập cơ sở dữ liệu hoặc hệ thống tệp, thay vì chặn luồng và lãng phí chu kỳ CPU đợi đến khi phản hồi trả về, Node.js sẽ tiếp tục thực hiện các hoạt động khi phản hồi xuất hiện.
- Điều này cho phép Node.js xử lý hàng ngàn kết nối đồng thời với một máy chủ duy nhất mà không giới thiệu gánh nặng của quản lý đồng thời luồng, có thể là một nguồn lỗi quan trọng.
- Trong thực tế, điều này có nghĩa là bạn có thể sử dụng cả require() và import trong Node.js, trong khi bạn bị giới hạn chỉ có thể sử dụng import trong trình duyệt.
- Một sự khác biệt khác là Node.js hỗ trợ cả hệ thống module CommonJS và ES (từ Node.js phiên bản 12 trở lên), trong khi trình duyệt chúng ta mới thấy Tiêu chuẩn Modules ES được triển khai.
- Điều này có nghĩa là bạn có thể viết tất cả JavaScript hiện đại ES2015+ mà phiên bản Node.js của bạn hỗ trợ. 
- Bạn có thể sử dụng Babel để chuyển đổi mã của mình để nó tương thích với ES5 trước khi gửi nó đến trình duyệt, nhưng trong Node.js, bạn sẽ không cần điều đó.
- Trong trình duyệt, hầu hết thời gian bạn đang tương tác với DOM, hoặc các API nền tảng web khác như Cookies. Những thứ đó không tồn tại trong Node.js, tất nhiên. Bạn không có document, window và tất cả các đối tượng khác được cung cấp bởi trình duyệt.
- V8 được viết bằng C++ và liên tục được cải thiện.
- JavaScript được biên dịch nội bộ bởi V8 với biên dịch Just-In-Time (JIT) để tăng tốc thực thi.



# Template Basic
```javascript
    const http = require('node:http');
    const hostname = '127.0.0.1';
    const port = 3000;
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
```
# Chạy nodejs
- lưu nó với tên file là server.js và chạy lệnh node server.js trong terminal của bạn.
- createServer : của http tạo ra một máy chủ HTTP mới và trả về nó.
- Mỗi khi nhận được một yêu cầu mới, sự kiện request được kích hoạt, cung cấp hai đối tượng: một yêu cầu (đối tượng http.IncomingMessage) và một phản hồi (đối tượng http.ServerResponse).
- Cả hai đối tượng này là quan trọng để xử lý cuộc gọi HTTP.
- res.statusCode = 200; : Chỉ định phản hồi thành công
- res.setHeader('Content-Type', 'text/plain'); : Thiết lập title
- res.end('Hello World\n'); : Đóng phản hồi.

# Những gì được đề xuất để học trước khi bắt đầu sâu với Node.js?
- Cú pháp từ vựng
- Biểu thức
- Loại dữ liệu
- Lớp
- Biến
- Hàm
- Toán tử this
- Hàm mũi tên (Arrow Functions)
- Vòng lặp
- Phạm vi (Scopes)
- Mảng
- Chuỗi ký tự mẫu (Template Literals)
- Chế độ nghiêm ngặt (Strict Mode)
- ECMAScript 2015 (ES6) và hơn thế nữa
-> Với những khái niệm này trong đầu, bạn sẽ có được nền tảng để trở thành một nhà phát triển JavaScript thành thạo, cả trong trình duyệt và trong Node.js.

- Lập trình Bất đồng bộ
- Những khái niệm sau đây cũng là chìa khóa để hiểu lập trình bất đồng bộ, một phần cơ bản của Node.js:

- Lập trình bất đồng bộ và callback
- Đèn hẹn giờ (Timers)
- Promises
- Async và Await
- Closure (Đóng)
- Vòng lặp Sự kiện

# NPM kết hợp
- npm install <tên-gói>
- npm update
- npm install <tên-gói>@<phiên-bản>
- npm run <tên-script>


## Các option
-S: --save
-D: --save-dev
-O: --save-optional

# Chạy webpack

```javascript
{
    "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --conqfig webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
    }
}
```
- npm run watch
- npm run dev
- npm run prod


# Sự khác biệt giữa devDependencies và dependencies
- devDependencies: Công cụ cho phát triển
- dependencies: được gói kèm với ứng dụng trong môi trường sản xuất.