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

# Bạn có thể liệt kê tất cả các tính năng đang được tiến triển có sẵn trong mỗi phiên bản Node.js
- node --v8-options | grep "in progress"
- Hành vi hiện tại của cờ --harmony trên Node.js là chỉ bật các tính năng đã triển khai. 

# Làm thế nào để tìm phiên bản V8 nào đi kèm với một phiên bản Node.js cụ thể?
- node -p process.versions.v8

# Thiết lập môi trường phát triển
- export NODE_ENV=production
- NODE_ENV=production node app.js

```javascript
if (process.env.NODE_ENV === 'development') {
  // ...
}
if (process.env.NODE_ENV === 'production') {
  // ...
}
if (['production', 'staging'].includes(process.env.NODE_ENV)) {
  // ...
}
```

# bạn có thể sử dụng điều này để thiết lập các xử lý lỗi khác nhau cho từng môi trường
```javascript
if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}
if (process.env.NODE_ENV === 'production') {
  app.use(express.errorHandler());
}


```
# Hãy xem đoạn mã này và sau đó chúng ta có thể giải thích nó cùng nhau:
```javascript
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: 'Justine',
  age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine);
```

# npx là gì
- npx đại diện cho Node Package Execute

# Typescript trong Nodejs
- NestJS - Framework mạnh mẽ và đầy đủ tính năng giúp tạo ra các hệ thống có khả năng mở rộng và có kiến trúc tốt.
- TypeORM - ORM tuyệt vời được ảnh hưởng bởi các công cụ nổi tiếng khác từ các ngôn ngữ khác nhau như Hibernate, Doctrine hoặc Entity Framework.
- Prisma - ORM thế hệ tiếp theo với mô hình dữ liệu phổ biến, tạo ra các phiên di cư được tạo ra tự động và truy vấn cơ sở dữ liệu an toàn từ kiểu.
- RxJS - Thư viện rộng rãi được sử dụng cho lập trình phản ứng.
- AdonisJS - Framework web đầy đủ tính năng với Node.js.
- FoalTs - Framework Nodejs Thanh lịch và Tính năng đầy đủ.
Và nhiều dự án tuyệt vời khác... Có thể thậm chí là dự án tiếp theo của bạn!

# Node.js với WebAssembly
- WebAssembly là một ngôn ngữ giống như ngôn ngữ assembly có hiệu suất cao có thể biên dịch từ nhiều ngôn ngữ, bao gồm C/C++, Rust và AssemblyScript

# Khái niệm quan trọng
- Module (Mô-đun): Một tệp nhị phân WebAssembly đã biên dịch, tức là một tệp .wasm.
- Memory (Bộ nhớ): Một ArrayBuffer có thể điều chỉnh kích thước.
- Table (Bảng): Một mảng được đặt kiểu có thể điều chỉnh kích thước của các tham chiếu không được lưu trữ trong Bộ nhớ.
- Instance (Thể hiện): Một thể hiện của Mô-đun với Bộ nhớ, Bảng và biến của nó.

# Tạo Mô-đun WebAssembly
- Viết WebAssembly (.wat) bằng tay và chuyển đổi sang định dạng nhị phân bằng các công cụ như wabt.
- Sử dụng emscripten với ứng dụng C/C++.
- Sử dụng wasm-pack với ứng dụng Rust.
- Sử dụng AssemblyScript nếu bạn thích trải nghiệm giống TypeScript.

```javascript
// Giả sử có tệp add.wasm chứa một hàm đơn thức thêm 2 đối số được cung cấp
const fs = require('node:fs');
const wasmBuffer = fs.readFileSync('/đường/dẫn/tới/add.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // Hàm được xuất sống dưới instance.exports
  const { add } = wasmModule.instance.exports;
  const sum = add(5, 6);
  console.log(sum); // Xuất: 11
});
```

# Xử lý bất đồng bộ
- Khi luồng chính bị chặn, nó dẫn đến hiện tượng "đóng băng" mà người dùng cuối sợ hãi, và không có sự kiện nào khác có thể được gửi đi, dẫn đến mất mát dữ liệu.

# callback hell
-  Điều này thường dẫn đến tình trạng "callback hell" (địa ngục callback) khi nhiều hàm lồng nhau với các callback làm cho mã nguồn trở nên khó đọc, khó gỡ lỗi, tổ chức, v.v.

```javascript
async1(function (input, result1) {
  async2(function (result2) {
    async3(function (result3) {
      async4(function (result4) {
        async5(function (output) {
          // xử lý output
        });
      });
    });
  });
});


```
# This is where functions come in to great use. More complex operations are made up of many functions:
- initiator style / input
- middleware
- terminator

```javascript
function final(someInput, callback) {
  callback(`${someInput} và kết thúc bằng việc thực thi callback `);
}
function middleware(someInput, callback) {
  return final(`${someInput} được chạm vào bởi middleware `, callback);
}
function initiate() {
  const someInput = 'xin chào đây là một hàm ';
  middleware(someInput, function (result) {
    console.log(result);
    // yêu cầu callback để `trả về` kết quả
  });
}
initiate();

```

# Quản lý trạng thái
- Hàm có thể phụ thuộc vào trạng thái hoặc không phụ thuộc vào trạng thái.
- Điều này tạo ra hai chiến lược chính cho quản lý trạng thái:
- Truyền biến trực tiếp vào một hàm.
- Lấy giá trị biến từ bộ nhớ cache, phiên, tệp, cơ sở dữ liệu, mạng hoặc nguồn bên ngoài khác.

# Luồng điều khiển
- Nếu một đối tượng có sẵn trong bộ nhớ, lặp sẽ có thể thực hiện, và không có sự thay đổi nào về luồng điều khiển:
```javascript
function getSong() {
  let _song = '';
  let i = 100;
  for (i; i > 0; i -= 1) {
    _song += `${i} beers on the wall, you take one down and pass it around, ${
      i - 1
    } bottles of beer on the wall\n`;
    if (i === 1) {
      _song += "Hey let's get some more beer";
    }
  }
  return _song;
}

function singSong(_song) {
  if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
  console.log(_song);
}

const song = getSong();
// Điều này sẽ hoạt động
singSong(song);


```

# Tuy nhiên, nếu dữ liệu tồn tại bên ngoài bộ nhớ, lặp sẽ không còn hoạt động nữa:
```javascript
function getSong() {
  let _song = '';
  let i = 100;
  for (i; i > 0; i -= 1) {
    /* eslint-disable no-loop-func */
    setTimeout(function () {
      _song += `${i} beers on the wall, you take one down and pass it around, ${
        i - 1
      } bottles of beer on the wall\n`;
      if (i === 1) {
        _song += "Hey let's get some more beer";
      }
    }, 0);
    /* eslint-enable no-loop-func */
  }
  return _song;
}

function singSong(_song) {
  if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
  console.log(_song);
}

const song = getSong('beer');
// Điều này sẽ không hoạt động
singSong(song);
// Uncaught Error: song is '' empty, FEED ME A SONG!

```
- Tại sao điều này lại xảy ra? setTimeout chỉ định CPU lưu trữ các hướng dẫn ở một nơi khác trên bus và yêu cầu CPU lấy hướng dẫn này tại một thời điểm sau đó. Nghìn chu kỳ CPU trôi qua trước khi hàm lại hit ở dấu thời gian 0, CPU lấy hướng dẫn từ bus và thực hiện chúng. Vấn đề duy nhất là song ('') đã được trả về hàng nghìn chu kỳ trước đó.
- Tình huống tương tự xảy ra khi xử lý các hệ thống tệp và yêu cầu mạng. Chủ luồng chính đơn giản không thể bị chặn trong một khoảng thời gian không xác định — do đó, chúng ta sử dụng callback để lên lịch thực hiện mã trong thời gian một cách kiểm soát.
- Bạn sẽ có thể thực hiện hầu hết các hoạt động của bạn với 3 mô hình sau đây:
## Theo chuỗi
```javascript
// Các hoạt động được xác định ở một nơi khác và sẵn sàng thực thi
const operations = [
  { func: function1, args: args1 },
  { func: function2, args: args2 },
  { func: function3, args: args3 },
];

function executeFunctionWithArgs(operation, callback) {
  // thực thi hàm
  const { args, func } = operation;
  func(args, callback);
}

function serialProcedure(operation) {
  if (!operation) process.exit(0); // đã hoàn thành
  executeFunctionWithArgs(operation, function (result) {
    // tiếp tục SAU callback
    serialProcedure(operations.shift());
  });
}

serialProcedure(operations.shift());
```
## Toàn bộ song song (Full Parallel):
- Khi thứ tự không quan trọng, ví dụ như gửi email cho một danh sách gồm 1,000,000 người nhận.
```javascript
let count = 0;
let success = 0;
const failed = [];
const recipients = [
  { name: 'Bart', email: 'bart@tld' },
  { name: 'Marge', email: 'marge@tld' },
  { name: 'Homer', email: 'homer@tld' },
  { name: 'Lisa', email: 'lisa@tld' },
  { name: 'Maggie', email: 'maggie@tld' },
];

function dispatch(recipient, callback) {
  // `sendEmail` là một client SMTP giả định
  sendMail(
    {
      subject: 'Dinner tonight',
      message: 'We have lots of cabbage on the plate. You coming?',
      smtp: recipient.email,
    },
    callback
  );
}

function final(result) {
  console.log(`Result: ${result.count} attempts \
      & ${result.success} succeeded emails`);
  if (result.failed.length)
    console.log(`Failed to send to: \
        \n${result.failed.join('\n')}\n`);
}

recipients.forEach(function (recipient) {
  dispatch(recipient, function (err) {
    if (!err) {
      success += 1;
    } else {
      failed.push(recipient.name);
    }
    count += 1;
    if (count === recipients.length) {
      final({
        count,
        success,
        failed,
      });
    }
  });
});

```
## Song song có giới hạn (Limited Parallel): thực hiện các công việc song song với một số lượng giới hạn, ví dụ như gửi email thành công cho 1,000,000 người nhận từ một danh sách có 10E7 người dùng.
```javascript
let successCount = 0;

function final() {
  console.log(`dispatched ${successCount} emails`);
  console.log('finished');
}

function dispatch(recipient, callback) {
  // `sendEmail` là một client SMTP giả định
  sendMail(
    {
      subject: 'Dinner tonight',
      message: 'We have lots of cabbage on the plate. You coming?',
      smtp: recipient.email,
    },
    callback
  );
}

function sendOneMillionEmailsOnly() {
  getListOfTenMillionGreatEmails(function (err, bigList) {
    if (err) throw err;
    function serial(recipient) {
      if (!recipient || successCount >= 1000000) return final();
      dispatch(recipient, function (_err) {
        if (!_err) successCount += 1;
        serial(bigList.pop());
      });
    }
    serial(bigList.pop());
  });
}

sendOneMillionEmailsOnly();


```
-> Mỗi mô hình có các ứng dụng, lợi ích và vấn đề riêng. Bạn có thể thử nghiệm và đọc chi tiết hơn về mỗi mô hình. Quan trọng nhất, hãy nhớ modularize các hoạt động của bạn và sử dụng callbacks! Nếu bạn có bất kỳ nghi ngờ nào, hãy xem xét mọi thứ như middleware!

# Blocking và Non-Blocking
- Blocking: Blocking là khi việc thực thi các đoạn mã JavaScript bổ sung trong quá trình Node.js phải đợi cho đến khi một hoạt động không phải là JavaScript hoàn thành. Điều này xảy ra vì vòng lặp sự kiện không thể tiếp tục chạy JavaScript trong khi một hoạt động chặn đang diễn ra.
-> Trong Node.js, JavaScript có hiệu suất kém do mất công suất CPU thay vì chờ đợi một hoạt động không phải là JavaScript, như I/O, thì thường không được gọi là blocking. 
- Các module native cũng có thể có các phương thức chặn.
- Tất cả các phương thức I/O trong thư viện tiêu chuẩn Node.js đều cung cấp phiên bản bất đồng bộ, không chặn và chấp nhận các hàm callback
- Một số phương thức cũng có các phiên bản chặn, có tên kết thúc bằng Sync.

# Sử dụng module File System như một ví dụ, đây là một đọc file đồng bộ:
```javascript
  const fs = require('node:fs');
  const data = fs.readFileSync('/file.md'); // chặn ở đây cho đến khi đọc xong file
  console.log(data);
  moreWork(); // sẽ chạy sau console.log
```


- Ví dụ đầu tiên trông đơn giản hơn ví dụ thứ hai nhưng có nhược điểm là dòng thứ hai chặn việc thực thi của bất kỳ mã JavaScript bổ sung nào cho đến khi toàn bộ file được đọc xong.

Và đây là một ví dụ bất đồng bộ tương đương:
```javascript
  const fs = require('node:fs');
  fs.readFile('/file.md', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  moreWork(); // sẽ chạy trước console.log
```


- Trong phiên bản bất đồng bộ, người viết mã sẽ quyết định liệu lỗi có nên ném ra hay không.
- Trong ví dụ đầu tiên, console.log sẽ được gọi trước moreWork(). Trong ví dụ thứ hai, fs.readFile() là không chặn, vì vậy việc thực thi JavaScript có thể tiếp tục và moreWork() sẽ được gọi trước. Khả năng chạy moreWork() mà không cần đợi cho đến khi việc đọc file hoàn thành là một lựa chọn thiết kế quan trọng cho phép xử lý thông lượng cao.

# Concurrency và Throughput
- Ví dụ, hãy xem xét một trường hợp trong đó mỗi yêu cầu đến một máy chủ web mất 50ms để hoàn thành và 45ms trong số 50ms đó là I/O cơ sở dữ liệu có thể được thực hiện bất đồng bộ. Lựa chọn các hoạt động bất đồng bộ không chặn giải phóng 45ms mỗi yêu cầu để xử lý các yêu cầu khác. Điều này là một sự khác biệt đáng kể về năng lực chỉ bằng cách chọn sử dụng các phương thức không chặn thay vì các phương thức chặn.

# Nguy cơ khi pha trộn Mã Chặn và Mã Không Chặn
- Có một số mô hình nên tránh khi xử lý I/O. Hãy xem xét một ví dụ:
```javascript
  const fs = require('node:fs');
  fs.readFile('/file.md', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  fs.unlinkSync('/file.md');
```
- Trong ví dụ trên, fs.unlinkSync() có khả năng được chạy trước fs.readFile(), điều này sẽ xóa file.md trước khi nó thực sự được đọc. Cách viết tốt hơn, hoàn toàn không chặn và đảm bảo thực hiện theo đúng thứ tự là:
```javascript
const fs = require('node:fs');
fs.readFile('/file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink('/file.md', unlinkErr => {
    if (unlinkErr) throw unlinkErr;
  });
});

```
- Trong đoạn mã trên, gọi một cuộc gọi không chặn tới fs.unlink() trong hàm callback của fs.readFile() đảm bảo thứ tự chính xác của các hoạt động.
- Chương trình sử dụng các ngắn đòn, một tín hiệu được phát ra tới bộ xử lý để thu hút sự chú ý của hệ thống.
- Hãy không đi sâu vào chi tiết này lúc này, nhưng hãy ghi nhớ rằng việc chương trình là bất đồng bộ và tạm dừng thực thi cho đến khi cần sự chú ý, cho phép máy tính thực thi các công việc khác trong thời gian chờ đợi. Khi một chương trình đang chờ đợi phản hồi từ mạng, nó không thể tạm dừng bộ xử lý cho đến khi yêu cầu kết thúc.
- Thường, ngôn ngữ lập trình là đồng bộ và một số ngôn ngữ cung cấp cách quản lý bất đồng bộ trong ngôn ngữ hoặc thông qua các thư viện. C, Java, C#, PHP, Go, Ruby, Swift và Python đều là đồng bộ theo mặc định. Một số trong số chúng xử lý các hoạt động bất đồng bộ bằng cách sử dụng luồng, tạo một tiến trình mới.

# JavaScript
- JavaScript là đồng bộ theo mặc định và chỉ có một luồng. Điều này có nghĩa là mã không thể tạo ra các luồng mới và chạy song song.

# Callback trong JavaScript
- Khi bạn không thể biết được khi nào người dùng sẽ click vào một nút, bạn sẽ định nghĩa một bộ xử lý sự kiện cho sự kiện click. Bộ xử lý sự kiện này chấp nhận một hàm, sẽ được gọi khi sự kiện xảy ra: Điều này được gọi là callback.
- Một callback là một hàm đơn giản được chuyển như một giá trị cho một hàm khác và chỉ được thực thi khi sự kiện xảy ra.
- Chúng ta có thể làm điều này bởi vì JavaScript có các hàm hạng nhất (first-class functions), có thể được gán cho biến và chuyển đến các hàm khác (gọi là higher-order functions).
- Callback được sử dụng ở mọi nơi, không chỉ trong sự kiện DOM.
- Một ví dụ phổ biến khác là sử dụng timers:
```javascript
setTimeout(() => {
  // chạy sau 2 giây
}, 2000);
```
- Các yêu cầu XHR cũng chấp nhận một callback
# XHR
```javascript
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    xhr.status === 200 ? console.log(xhr.responseText) : console.error('error');
  }
};
xhr.open('GET', 'https://your-site.com');
xhr.send();

```
# Xử lý Lỗi trong Callbacks
- Một chiến lược rất phổ biến là sử dụng điều mà Node.js đã áp dụng: tham số đầu tiên trong bất kỳ hàm callback nào là đối tượng lỗi: error-first callbacks

```javascript
const fs = require('node:fs');
fs.readFile('/file.json', (err, data) => {
  if (err) {
    // xử lý lỗi
    console.log(err);
    return;
  }
  // không có lỗi, xử lý dữ liệu
  console.log(data);
});

```

# Vấn đề với Callbacks
```javascript
window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    setTimeout(() => {
      items.forEach(item => {
        // mã nguồn của bạn ở đây
      });
    }, 2000);
  });
});

```
- Đây chỉ là một ví dụ mã nguồn ở cấp lồng 4, nhưng tôi đã thấy nhiều cấp lồng hơn và điều đó không vui.
# Các Lựa Chọn Thay Thế cho Callbacks
- Bắt đầu từ ES6, JavaScript đã giới thiệu một số tính năng giúp chúng ta với mã nguồn bất đồng bộ mà không sử dụng callbacks: Promises (ES6) và Async/Await (ES2017).

# Khám Phá Timer Trong JavaScript
- setTimeout()
- setTimeout trả về id của bộ hẹn giờ, nhưng bạn có thể lưu id này và xóa nó nếu bạn muốn hủy việc thực thi hàm được lên lịch này:
- Khi viết mã JavaScript, bạn có thể muốn trì hoãn việc thực thi một hàm.


```javascript
setTimeout(() => {
  // chạy sau 2 giây
}, 2000);
setTimeout(() => {
  // chạy sau 50 mili giây
}, 50);

const myFunction = (firstParam, secondParam) => {
  // làm một cái gì đó
};
// chạy sau 2 giây
setTimeout(myFunction, 2000, firstParam, secondParam);

const id = setTimeout(() => {
  // nên chạy sau 2 giây
}, 2000);
// Tôi đã thay đổi ý kiến
clearTimeout(id);

```

# Không có độ trễ
```javascript
setTimeout(() => {
  console.log('sau ');
}, 0);
console.log(' trước ');

```
- trước
- sau

# SetInterval 
- setInterval()
- setInterval là một hàm tương tự như setTimeout, với một khác biệt: thay vì chạy hàm callback một lần, nó sẽ chạy nó mãi mãi, ở khoảng thời gian cụ thể bạn chỉ định (bằng mili giây):
- Hàm trên sẽ chạy mỗi 2 giây trừ khi bạn nói cho nó dừng lại, sử dụng clearInterval, truyền id của interval mà setInterval đã trả về:
```javascript
const id = setInterval(() => {
  // chạy mỗi 2 giây
}, 2000);
clearInterval(id);

```
-> đoạn mã này chạy một cái gì đó trừ khi App.somethingIWait có giá trị là 'arrived':
```javascript
const interval = setInterval(() => {
  if (App.somethingIWait === 'arrived') {
    clearInterval(interval);
  }
  // nếu không làm những điều khác
}, 100);

```
-> Timers module.

# Hiểu về process.nextTick()
- Khi bạn cố gắng hiểu về vòng lặp sự kiện trong Node.js, một phần quan trọng của nó là process.nextTick(). Mỗi khi vòng lặp sự kiện thực hiện một chuỗi hoạt động đầy đủ, chúng ta gọi đó là một "tick".
- Khi chúng ta truyền một hàm cho process.nextTick(), chúng ta chỉ đạo cho engine thực thi hàm này vào cuối của hoạt động hiện tại, trước khi chu kỳ lặp sự kiện tiếp theo bắt đầu:
```javascript
process.nextTick(() => {
  // làm một cái gì đó
});

```
- Điều này là cách chúng ta có thể bảo động JS engine xử lý một hàm không đồng bộ (sau hàm hiện tại), nhưng càng sớm càng tốt, không đưa nó vào hàng đợi.

# Một ví dụ về thứ tự các sự kiện:
```javascript
console.log('Hello => số 1');
setImmediate(() => {
  console.log('Chạy trước timeout => số 3');
});
setTimeout(() => {
  console.log('Timeout chạy cuối cùng => số 4');
}, 0);
process.nextTick(() => {
  console.log('Chạy ở next tick => số 2');
});

  Hello => số 1
  Chạy ở next tick => số 2
  Timeout chạy cuối cùng => số 4
  Chạy trước timeout => số 3

```
# setImmediate
- Khi bạn muốn thực thi một đoạn mã không đồng bộ, nhưng càng sớm càng tốt, một tùy chọn là sử dụng hàm setImmediate() được cung cấp bởi Node.js:
- Bất kỳ hàm nào được truyền làm đối số cho setImmediate() đều là một callback sẽ được thực thi trong vòng lặp sự kiện ở lần lặp tiếp theo.
- Hàm setImmediate() khác biệt như thế nào so với setTimeout(() => {}, 0) (với thời gian chờ 0ms), process.nextTick() và Promise.then()?

- Một hàm được truyền cho process.nextTick() sẽ được thực thi trong lần lặp sự kiện hiện tại, sau khi hoạt động hiện tại kết thúc. Điều này có nghĩa là nó luôn sẽ thực thi trước setTimeout và setImmediate.

- Một callback của setTimeout() với thời gian chờ 0ms rất giống với setImmediate(). Thứ tự thực thi sẽ phụ thuộc vào nhiều yếu tố, nhưng chúng đều sẽ chạy trong lần lặp sự kiện tiếp theo.

- Một callback của process.nextTick() được thêm vào hàng đợi process.nextTick. Một callback của Promise.then() được thêm vào hàng đợi microtask của promise. Một callback của setTimeout, setImmediate được thêm vào hàng đợi macrotask.

-> Vòng lặp sự kiện thực thi các nhiệm vụ trong hàng đợi process.nextTick trước, sau đó thực thi hàng đợi microtask của promise, và sau cùng là thực thi hàng đợi macrotask.


# Event Emitters
- Mô-đun này, cụ thể là, cung cấp lớp EventEmitter, mà chúng ta sẽ sử dụng để xử lý các sự kiện của mình.
```javascript
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('started');
});

// Khi chúng ta chạy:
eventEmitter.emit('start');


```


- Đối tượng này mở ra, giữa nhiều cái khác, các phương thức on và emit.
+ emit được sử dụng để kích hoạt một sự kiện.
+ on được sử dụng để thêm một hàm callback sẽ được thực thi khi sự kiện được kích hoạt.

- Bạn có thể truyền đối số cho hàm xử lý sự kiện bằng cách truyền chúng như là các đối số bổ sung cho emit():
```javascript
eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 23);

```

+ once(): thêm một lắng nghe một lần.
+ removeListener() / off(): loại bỏ một lắng nghe sự kiện từ một sự kiện.
+ removeAllListeners(): loại bỏ tất cả lắng nghe cho một sự kiện.

# Thống kê tệp trong Node.js đặc biệt là sử dụng phương thức stat() được cung cấp bởi mô-đun fs.
- Truy cập file
```javascript
const fs = require('node:fs');
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err);
  }
  // chúng ta có quyền truy cập vào thống kê tệp trong `stats`
});
// Hoặc làm chặn luồng cho đến khi thông tin thống kê tệp sẵn sàng
const fs = require('node:fs');
try {
  const stats = fs.statSync('/Users/joe/test.txt');
} catch (err) {
  console.error(err);
}

```

# Thông tin tệp được bao gồm trong biến stats
- Nếu tệp là thư mục hoặc tệp, sử dụng stats.isFile() và stats.isDirectory().
- Nếu tệp là liên kết tượng trưng sử dụng stats.isSymbolicLink().
- Kích thước của tệp tính bằng byte sử dụng stats.size.

```javascript
const fs = require('node:fs');
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  stats.isFile(); // true
  stats.isDirectory(); // false
  stats.isSymbolicLink(); // false
  stats.size; // 1024000 //= 1MB
});

```
# Bạn cũng có thể sử dụng phương thức fsPromises.stat() dựa trên promise được cung cấp bởi mô-đun fs/promises nếu bạn muốn:
```javascript
const fs = require('node:fs/promises');
async function example() {
  try {
    const stats = await fs.stat('/Users/joe/test.txt');
    stats.isFile(); // true
    stats.isDirectory(); // false
    stats.isSymbolicLink(); // false
    stats.size; // 1024000 //= 1MB
  } catch (err) {
    console.log(err);
  }
}
example();

```

# Đường Dẫn Tệp Trong Node.js
```javascript
const path = require('node:path');
const notes = '/users/joe/notes.txt';
path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt

```

+ dirname: lấy thư mục cha của một tệp
+ basename: lấy phần tên tệp
+ extname: lấy phần mở rộng tệp

# Bạn có thể có tên tệp mà không có phần mở rộng bằng cách chỉ định một đối số thứ hai cho basename:
path.basename(notes, path.extname(notes)); // notes

# Làm việc với đường dẫn
const name = 'joe';

- Bạn có thể kết hợp hai hoặc nhiều phần của một đường dẫn bằng cách sử dụng
path.join('/', 'users', name, 'notes.txt'); // '/users/joe/notes.txt'

- Bạn có thể có tính toán đường dẫn tuyệt đối của một đường dẫn tương đối bằng cách sử dụng
path.resolve('joe.txt'); // '/Users/joe/joe.txt' nếu chạy từ thư mục home của tôi

- Nếu tham số đầu tiên bắt đầu bằng dấu gạch chéo, điều đó có nghĩa là nó là một đường dẫn tuyệt đối:
path.resolve('/etc', 'joe.txt'); // '/etc/joe.txt'

- Nếu tham số đầu tiên bắt đầu bằng dấu gạch chéo, điều đó có nghĩa là nó là một đường dẫn tuyệt đối:
path.normalize('/users/joe/..//test.txt'); // '/users/test.txt'

# Làm Việc với File Descriptors trong Node.js
```javascript
const fs = require('node:fs');
fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  // fd là file descriptor của chúng ta
});

```

- Một số cờ khác mà bạn thường sử dụng là:
r+: Cờ này mở tệp để đọc và ghi.
w+: Cờ này mở tệp để đọc và ghi và cũng đặt luồng ở đầu tệp.
a: Cờ này mở tệp để ghi và cũng đặt luồng ở cuối tệp.
a+: Cờ này mở tệp để đọc và ghi và cũng đặt luồng ở cuối tệp.

```javascript
const fs = require('node:fs');
try {
  const fd = fs.openSync('/Users/joe/test.txt', 'r');
} catch (err) {
  console.error(err);
}

```

- Bạn cũng có thể mở tệp bằng cách sử dụng phương thức fsPromises.open dựa trên promise được cung cấp bởi mô-đun fs/promises.

- Mô-đun fs/promises chỉ có sẵn từ Node.js v14 trở đi. Trước v14, sau v10, bạn có thể sử dụng require('fs').promises thay thế. Trước v10, sau v8, bạn có thể sử dụng util.promisify để chuyển đổi các phương thức fs thành các phương thức dựa trên promise.

```javascript
const fs = require('node:fs/promises');
// Hoặc const fs = require('fs').promises trước v14.
async function example() {
  let filehandle;
  try {
    filehandle = await fs.open('/Users/joe/test.txt', 'r');
    console.log(filehandle.fd);
    console.log(await filehandle.readFile({ encoding: 'utf8' }));
  } finally {
    if (filehandle) await filehandle.close();
  }
}
example();

// util.promisify
const fs = require('node:fs');
const util = require('node:util');
async function example() {
  const open = util.promisify(fs.open);
  const fd = await open('/Users/joe/test.txt', 'r');
}
example();


```
# Đọc Tệp Tin với Node.js
- fs.readFile()
- fs.readFileSync()
- fsPromises.readFile()
->  đều đọc toàn bộ nội dung của tệp vào bộ nhớ trước khi trả về dữ liệu.
-> Điều này có nghĩa là các tệp lớn sẽ có ảnh hưởng lớn đến tiêu thụ bộ nhớ và tốc độ thực thi của chương trình.
-> Trong trường hợp này, một lựa chọn tốt hơn là đọc nội dung tệp bằng cách sử dụng streams.

# Ghi Tệp Tin với Node.js
- fs.writeFile()
- fs.writeFileSync()
- fs.writeFile()
- Các flags mà bạn có thể sử dụng thường là:
r+: Mở tệp cho việc đọc và ghi ❌
w+: Mở tệp cho việc đọc và ghi và đặt dòng trong tệp ở đầu ✅
a: Mở tệp cho việc ghi và đặt dòng trong tệp ở cuối ✅
a+: Mở tệp cho việc đọc và ghi và đặt dòng trong tệp ở cuối ✅

-> fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {});

# Thêm nội dung vào cuối tệp
- fs.appendFile()
- fs.appendFileSync()
- fsPromises.appendFile()

# Làm việc với thư mục trong Node.js
- fs.access()
- fsPromises.access()

# Tạo một thư mục mới
- fs.mkdir()
- fs.mkdirSync()
- fsPromises.mkdir()

```javascript
const fs = require('node:fs');
const folderName = '/Users/joe/test';
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

```
# Đọc nội dung của một thư mục
- fs.readdir()
- fs.readdirSync()
- fsPromises.readdir()
```javascript
const fs = require('node:fs');
const folderPath = '/Users/joe';
fs.readdirSync(folderPath);

```

# Bạn có thể lấy đường dẫn đầy đủ:
```javascript
fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName);
});

```

# Bạn cũng có thể lọc kết quả để chỉ trả về các tệp tin và loại bỏ các thư mục:
```javascript
const fs = require('node:fs');
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile();
};
fs.readdirSync(folderPath)
  .map(fileName => {
    return path.join(folderPath, fileName);
  })
  .filter(isFile);

```

# Đổi tên một thư mục
- fs.rename()
- fs.renameSync()
- fsPromises.rename()

```javascript
const fs = require('node:fs');
fs.rename('/Users/joe', '/Users/roger', err => {
  if (err) {
    console.error(err);
  }
  // đã xong
});

```

# Xóa một thư mục
- fs.rmdir()
- fs.rmdirSync()
- fsPromises.rmdir()
```javascript
const fs = require('node:fs');
fs.rmdir(dir, err => {
  if (err) {
    throw err;
  }
  console.log(`${dir} đã bị xóa!`);
});

```
- Để xóa một thư mục có nội dung, sử dụng fs.rm() với tùy chọn { recursive: true } để xóa đệ quy nội dung
- { recursive: true, force: true } làm cho nó sao cho ngoại lệ sẽ bị bỏ qua nếu thư mục không tồn tại.
```javascript
const fs = require('node:fs');
fs.rm(dir, { recursive: true, force: true }, err => {
  if (err) {
    throw err;
  }
  console.log(`${dir} đã bị xóa!`);
});

```

# Để sử dụng shebang, tệp của bạn phải có quyền thực thi. Bạn có thể đặt quyền thực thi cho app.js bằng cách chạy:
- node app.js
- Hoặc #!/usr/bin/env node
- chmod u+x app.js
- node -e "console.log(123)"

# Tự động khởi động lại ứng dụng
- node --watch app.js

# Cách đọc biến môi trường từ Node.js
- USER_ID=239482 USER_KEY=foobar node app.js
process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"

- Tệp .env:
PORT=3000
process.env.PORT; // "3000"

# Chạy tệp app.js với các biến môi trường được đặt trong tệp .env.
- node --env-file=.env app.js

# Các tệp sau ghi đè lên các biến đã định nghĩa trong các tệp trước đó.
- node --env-file=.env --env-file=.development.env app.js

# Cách sử dụng Node.js REPL
- node script.js

# REPL là viết tắt của Read Evaluate Print Loop
```javascript
function generateRandom() {
...return Math.random()
}

 generateRandom()
```

# Chạy REPL từ tệp JavaScript
```javascript
const repl = require('node:repl');
repl.start();

> node repl.js
```

# Xuất cơ bản bằng module console
```javascript
const x = 'x';
const y = 'y';
console.log(x, y);
console.log('My %s has %d ears', 'cat', 2);

```
- %s định dạng biến thành chuỗi
- %d định dạng biến thành số
- %i định dạng biến thành phần số nguyên của nó
- %o định dạng biến thành một đối tượng

console.log('%o', Number);

# Xóa console
- console.clear()

# Đếm các phần tử
- console.count()

# Nhìn vào đoạn mã này:
```javascript
const x = 1;
const y = 2;
const z = 3;
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
  'The value of y is ' + y + ' and has been checked .. how many times?'
);

```
Ví dụ: Bạn có thể chỉ đếm số lượng quả táo và cam:
```javascript
const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});

//Đặt lại việc đếm
const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});
console.countReset('orange');
oranges.forEach(fruit => {
  console.count(fruit);
});

```

# In stack trace
```javascript
const function2 = () => console.trace();
const function1 = () => function2();
function1();
//Trace
//    at function2 (repl:1:33)
//    at function1 (repl:1:25)
//    at repl:1:1
```
# Tính thời gian thực hiện
```javascript
const doSomething = () => console.log('test');
const measureDoingSomething = () => {
  console.time('doSomething()');
  // làm một cái gì đó, và đo thời gian mà nó mất
  doSomething();
  console.timeEnd('doSomething()');
};
measureDoingSomething();
```

# stdout và stderr
-> console.error in vào luồng lỗi stderr.

# Tô màu đầu ra
- Một dãy thoát là một tập hợp các ký tự xác định một màu.
```javascript
console.log('\x1b[33m%s\x1b[0m', 'hi!');
```

# npm install chalk
```javascript
const chalk = require('chalk');
console.log(chalk.yellow('hi!'));

```

# Tạo thanh tiến trình
npm install progress
```javascript
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

```
- Đoạn mã này tạo một thanh tiến trình 10 bước, và mỗi 100ms, một bước được hoàn thành. Khi thanh tiến trình hoàn thành, chúng ta xóa interval:

# Module readline để thực hiện chính xác điều này
- Node.js kể từ phiên bản 7 cung cấp module readline để thực hiện chính xác điều này: nhận đầu vào từ một luồng có thể đọc như luồng process.stdin, trong quá trình thực hiện một chương trình Node.js, đó là đầu vào terminal, một dòng mỗi lần.

```javascript
const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});

```

# Trong hàm callback này, chúng ta đóng giao diện readline.
- npm install inquirer
- readline
- readline-sync
```typescript
const inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];
inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});

```

# Các bước sau được minh họa bằng gói iotivity-node:
- Đầu tiên, xuất bản phiên bản không sử dụng Node-API:

- Cập nhật phiên bản trong file package.json. Đối với iotivity-node, phiên bản trở thành 1.2.0-2.
- Kiểm tra danh sách kiểm tra phát hành (đảm bảo rằng các bài kiểm tra/demon/docs đều ổn định).
- npm publish

# Sau đó, xuất bản phiên bản Node-API:
- npm install iotivity-node
- Cập nhật phiên bản trong file package.json. Trong trường hợp của iotivity-node, phiên bản trở thành 1.2.0-3. - Về việc đánh số phiên bản, chúng ta khuyến nghị sử dụng chuẩn phiên bản trước phát hành như được mô tả bởi semver.org, ví dụ: 1.2.0-napi.
- Kiểm tra danh sách kiểm tra phát hành (đảm bảo rằng các bài kiểm tra/demon/docs đều ổn định).
- npm publish --tag n-api
- npm update

