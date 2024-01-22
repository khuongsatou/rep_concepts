# Thuật ngữ
- Giao diện Lập trình Ứng dụng (API): APIs là những bộ khối mã đã sẵn có cho phép nhà phát triển triển khai các chương trình mà nếu không sẽ khó khăn hoặc không thể triển khai.
- API DOM (Document Object Model) cho phép bạn thao tác HTML và CSS, tạo, xóa và thay đổi HTML, động động áp dụng các kiểu mới cho trang của bạn
- API Geolocation thu thập thông tin địa lý. Đây là cách Google Maps có thể tìm vị trí của bạn và vẽ nó trên một bản đồ.
- Các API Canvas và WebGL cho phép bạn tạo đồ họa động 2D và 3D. Những người sử dụng công nghệ web này đã thực hiện những điều tuyệt vời 
- Các API Âm thanh và Video như HTMLMediaElement và WebRTC cho phép bạn thực hiện những điều thú vị với đa phương tiện, như phát âm thanh và video ngay trên trang web hoặc chụp video từ webcam của bạn và hiển thị nó trên máy tính của người khác.




# Hiểu rõ về JavaScript là gì, nó có thể làm gì, và cách nó tích hợp vào một trang web.
- JavaScript là một ngôn ngữ kịch bản
- Ba lớp công nghệ web tiêu chuẩn; HTML, CSS và JavaScript:
- Cả ba lớp này được xây dựng lên trên nhau một cách hài hòa.

HTML: 
``` html
    <button type="button">Player 1: Chris</button>
```

CSS: 
``` css
button {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 0.6);
  background-color: rgb(0 217 217 / 0.6);
  color: rgb(100 0 0 / 1);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 0.4);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}
```

``` javascript
    const button = document.querySelector("button");

    button.addEventListener("click", updateName);

    function updateName() {
        const name = prompt("Enter a new name");
        button.textContent = `Player 1: ${name}`;
    }
```

# API
->  "Chúng thực hiện chức năng tương tự như bộ kits nội thất đã sẵn có cho xây dựng nhà cửa — việc lắp ghép các tấm đã được cắt sẵn và vít chúng lại với nhau để tạo ra một kệ sách dễ dàng hơn nhiều so với việc tự thiết kế, tìm kiếm gỗ đúng, cắt tất cả các tấm với kích thước và hình dạng đúng, tìm vít có kích thước phù hợp, và sau đó lắp chúng lại để tạo ra một kệ sách."

-> Các API của bên thứ ba không được tích hợp sẵn vào trình duyệt và bạn thường phải lấy mã và thông tin từ nơi nào đó trên Web:
- API Twitter cho phép bạn thực hiện các công việc như hiển thị những tweet mới nhất của bạn trên trang web của bạn.
- API Google Maps và OpenStreetMap cho phép bạn nhúng bản đồ tùy chỉnh vào trang web của bạn và các chức năng khác.


# Ví dụ: bạn đang chạy mã của mình (HTML, CSS và JavaScript) bên trong một môi trường thực thi (tab trình duyệt)
- Điều này giống như một nhà máy nhận nguyên liệu (mã) và sản xuất một sản phẩm (trang web).


# Thứ tự thực thi:
- Khi trình duyệt gặp một đoạn mã JavaScript, nó thường chạy nó theo thứ tự, từ trên xuống dưới.
Ví dụ nếu thứ tự không đúng: " Uncaught ReferenceError: Cannot access 'button' before initialization"
- Mã được phiên dịch so với mã được biên dịch

# Phiên dịch và biên dịch:
- Trong các ngôn ngữ được phiên dịch, mã được chạy từ trên xuống và kết quả của việc chạy mã được trả về ngay lập tức.
Ví dụ: JavaScript là một ngôn ngữ lập trình nhẹ và được phiên dịch. -> Cải thiện hiệu suất

- Biên dịch được biến đổi (biên dịch) thành một hình thức khác trước khi chúng được máy tính chạy.
Ví dụ: C/C++ được biên dịch thành mã máy sau đó được máy tính chạy.

# Mã phía máy chủ và Mã phía máy khách
- Mã phía máy khách là mã chạy trên máy tính của người dùng — khi một trang web được xem
- Mã phía máy chủ, ngược lại, chạy trên máy chủ, sau đó kết quả của nó được tải xuống và hiển thị trong trình duyệt

Ví dụ: "về các ngôn ngữ lập trình web phía máy chủ phổ biến bao gồm PHP, Python, Ruby, ASP.NET và thậm chí là JavaScript! JavaScript cũng có thể được sử dụng làm ngôn ngữ phía máy chủ, ví dụ trong môi trường Node.js phổ biến — bạn có thể tìm hiểu thêm về JavaScript phía máy chủ trong chủ đề Lập trình web động – Lập trình phía máy chủ của chúng tôi."

# Event
- DOMContentLoaded


# Template basic về nhập javascript
```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>External JavaScript example</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <button>Click me</button>
  </body>
</html>
```

# Javascript
- JavaScript nội vi
<script>
  // JavaScript goes here
</script>
- JavaScript ngoại vi
<script src="script.js" defer></script>
-> chúng ta không cần sử dụng sự kiện DOMContentLoaded vì thuộc tính defer đã giải quyết vấn đề cho chúng ta.
-> Một giải pháp cũ cho vấn đề này trước đây là đặt phần tử script ngay dưới cùng của body (ví dụ, ngay trước thẻ </body>), để nó sẽ tải sau khi HTML đã được phân tích.
-> Vấn đề của giải pháp này là tải/phân tích của script bị chặn hoàn toàn cho đến khi DOM HTML đã được tải. Trong trường hợp các trang web lớn với nhiều JavaScript, điều này có thể gây ra vấn đề hiệu suất lớn, làm chậm trang web của bạn.

# async và defer
Ví dụ về 3 script:
```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>

```
- Bạn không thể đảm bảo thứ tự các script sẽ tải vào. jquery.js có thể tải trước hoặc sau script2.js và script3.js và nếu điều này xảy ra, bất kỳ hàm nào trong các script đó phụ thuộc vào jquery sẽ gây ra lỗi vì jquery sẽ không được định nghĩa vào thời điểm script chạy.
-> Nó tốt nhất là sử dụng async khi các script trong trang chạy độc lập với nhau và không phụ thuộc vào bất kỳ script nào khác trên trang.(Độc lập)
- Thuộc tính async nên được sử dụng khi bạn có một loạt các script nền cần tải, và bạn chỉ muốn đưa chúng vào đúng vị trí càng sớm càng tốt.
- Các script với thuộc tính async sẽ thực thi ngay sau khi tải xong.
- Nếu các script của bạn cần được chạy ngay lập tức và chúng không có bất kỳ phụ thuộc nào, hãy sử dụng async

```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>

```
- Trong ví dụ thứ hai, chúng ta có thể chắc chắn rằng jquery.js sẽ tải trước script2.js và script3.js và script2.js sẽ tải trước script3.js
-> defer: Các script được tải với thuộc tính defer sẽ tải theo thứ tự xuất hiện trên trang, Chúng sẽ không chạy cho đến khi nội dung trang đã được tải hết, điều này hữu ích nếu các script của bạn phụ thuộc vào DOM đã ở đúng vị trí (ví dụ, chúng sửa đổi một hoặc nhiều phần tử trên trang).(Phụ thuộc)
- Các script với thuộc tính defer sẽ tải theo thứ tự xuất hiện và chỉ thực thi khi mọi thứ đã tải xong.
- Nếu các script của bạn cần đợi cho quá trình phân tích và phụ thuộc vào các script và/hoặc DOM khác đã ở đúng vị trí, hãy tải chúng bằng cách sử dụng defer và đặt các 

# Comment
- //
- /* */

# Chăm ngôn:
"Điều này đòi hỏi một sự kết hợp giữa làm việc chăm chỉ, kinh nghiệm với cú pháp lập trình và thực hành — cùng một chút sáng tạo. Bạn càng viết mã, bạn sẽ càng giỏi. "


# Ví dụ 1 về quy trình phân tích một bài toán.
- Tôi muốn bạn tạo một trò chơi đơn giản kiểu đoán số. Nó nên chọn một số ngẫu nhiên từ 1 đến 100, sau đó thách thức người chơi đoán số trong 10 lượt. Sau mỗi lượt, người chơi sẽ được thông báo xem họ đoán đúng hay sai, và nếu họ đoán sai, số họ đoán là quá thấp hay quá cao. Nó cũng nên cho người chơi biết những số họ đã đoán trước đó. Trò chơi sẽ kết thúc khi người chơi đoán đúng, hoặc khi họ hết lượt. Khi trò chơi kết thúc, người chơi sẽ được cung cấp một lựa chọn để bắt đầu chơi lại.

## Phân tích
1. Tạo ra một số ngẫu nhiên từ 1 đến 100.
2. Ghi lại số lượt người chơi đang ở. Bắt đầu ở lượt 1.
3. Cung cấp cho người chơi cách đoán số.
4. Khi một đoán đã được gửi, ghi lại nó ở một nơi nào đó để người dùng có thể xem các đoán trước đó của họ.
5. Tiếp theo, kiểm tra xem nó có phải là số đúng không.
- Nếu đúng:
    Hiển thị thông báo chúc mừng.
    Ngăn chặn người chơi từ việc nhập thêm đoán (điều này sẽ làm rối trò chơi).
    Hiển thị điều khiển cho phép người chơi bắt đầu lại trò chơi.
- Nếu sai và người chơi còn lượt:
    Thông báo cho người chơi biết họ đoán sai và xem đoán của họ có cao hay thấp hơn.
    Cho phép họ nhập một đoán khác.
    Tăng số lượt lên 1.
- Nếu sai và người chơi hết lượt:
    Thông báo cho người chơi biết trò chơi kết thúc.
    Ngăn chặn người chơi từ việc nhập thêm đoán (điều này sẽ làm rối trò chơi).
    Hiển thị điều khiển cho phép người chơi bắt đầu lại trò chơi.
6. Khi trò chơi bắt đầu lại, đảm bảo rằng logic trò chơi và giao diện người dùng được đặt lại hoàn toàn, sau đó quay lại bước 1.

# Biến và hằng số
- let
- const: nếu chắc chắn không thay đổi tham chiếu.

# Random
- Math.floor(Math.random() * 100) + 1;

# DOM
- .querySelector(".guesses");
- .parentNode.removeChild
- .createElement
- .body.append
- .querySelectorAll
- 

# Toán tử
- + - * /
- === Bằng chính xác (nó có giống nhau không?) | !== Không bằng (nó có khác nhau không?)

# Câu điều kiện
- if
- else
- else if
- else{
    if{

    }
    else
}

# Style
- .textContent
- .style.backgroundColor
- .style.fontSize
- .style.padding
- .style.boxShadow
- .value
- .focus()
- .disabled
- 






# Chuỗi
- (`) : template literals
Ví dụ: `Hello ${name}`

# Number
- Number(guessField.value): Contructor của number để chắc chắn nó là 1 số


# Event
- guessSubmit.addEventListener("click", checkGuess);
-> Người nghe sự kiện (event listeners) quan sát các sự kiện cụ thể và gọi người xử lý sự kiện (event handlers)
-> Ở đây, chúng ta đang thêm một người nghe sự kiện cho nút guessSubmit. Đây là một phương thức có hai giá trị đầu vào (được gọi là đối số) - loại sự kiện chúng ta đang lắng nghe (trong trường hợp này là click) dưới dạng một chuỗi và mã chúng ta muốn chạy khi sự kiện xảy ra (trong trường hợp này là hàm checkGuess())

# Loops
```javascript
  const fruits = ["apples", "bananas", "cherries"];
  for (const fruit of fruits) {
    console.log(fruit);
  }

```
B1. Lấy phần tử đầu tiên trong fruits.
B2. Đặt biến fruit thành phần tử đó, sau đó chạy mã giữa dấu ngoặc nhọn {}.
B3. Lấy phần tử tiếp theo trong fruits và lặp lại bước 2 cho đến khi bạn đến cuối fruits.
- Trong JavaScript, hầu hết các mục bạn sẽ thao tác trong mã của bạn là đối tượng. Một đối tượng là một tập hợp các chức năng liên quan được lưu trữ trong một nhóm duy nhất

# Loại lỗi
- Lỗi cú pháp (Syntax errors): 
- Lỗi logic (Logic errors):

Ví dụ: Uncaught TypeError: guessSubmit.addeventListener is not a function : đang cảnh báo về điều gì đã sai.
number-game-errors.html:86:15: chỉ cho chúng ta biết lỗi xuất phát từ đâu trong mã nguồn: ở dòng 86, ký tự 15 của tệp
-> Chú ý: Thông báo lỗi có thể không ở dòng 86.

Ví dụ 2: guessSubmit.addeventListener("click", checkGuess);
-> Thông báo lỗi nói "guessSubmit.addeventListener is not a function", có nghĩa là trình thông dịch JavaScript không nhận diện được hàm chúng ta đang gọi. Thường, thông báo lỗi này thực sự có nghĩa là chúng ta đã viết sai một cái gì đó

-> Hãy nhớ rằng JavaScript phân biệt chữ hoa chữ thường

Ví dụ 3: 
- Uncaught TypeError: can't access property "textContent", lowOrHi is null hoặc
- Uncaught TypeError: Cannot set properties of null (setting 'textContent')
-> Thông điệp trên là điều Firefox sẽ hiển thị cho bạn, nhưng Chrome thì sẽ là đoạn 2

# Log lỗi
Cách giải quyết tìm dòng đúng và đưa log vào xem
- console.log(lowOrHi);

-> Chắc chắn rồi, giá trị của lowOrHi hiện tại là null, điều này khớp với thông báo lỗi của Firefox là lowOrHi is null. Vì vậy, có vấn đề chắc chắn tại dòng 49. Giá trị null có nghĩa là "không có gì" hoặc "không có giá trị". Vì vậy, mã của chúng ta để thiết lập lowOrHi thành một phần tử đang gặp vấn đề.

# Fix lỗi
- Thêm code vào: <p class="lowOrHi"></p>

# Lỗi logic
- Tại điểm này, trò chơi nên chạy ổn định, tuy nhiên sau khi chơi qua một vài lần, bạn nhất định sẽ nhận thấy rằng trò chơi luôn chọn số 1 làm số "ngẫu nhiên" bạn phải đoán. Chắc chắn không phải là cách chúng ta muốn trò chơi diễn ra!

- Tìm kiếm biến randomNumber và các dòng nơi số ngẫu nhiên được đặt ban đầu. Thực thể lưu trữ số ngẫu nhiên mà chúng ta muốn đoán ở đầu trò chơi nên ở dòng số 45:

1. - Trước hết, chúng ta gọi Math.random(), tạo ra một số thập phân ngẫu nhiên giữa 0 và 1, ví dụ: 0.5675493843.
2. - Math.floor(), làm tròn số được chuyển vào nó xuống số nguyên gần nhất. Sau đó, chúng ta thêm 1 vào kết quả đó:
3. - Làm tròn số thập phân ngẫu nhiên giữa 0 và 1 xuống sẽ luôn trả về 0, nên việc thêm 1 vào nó sẽ luôn trả về 1. Chúng ta cần nhân số ngẫu nhiên với 100 trước khi làm tròn xuống. Dòng mã sau sẽ đưa cho chúng ta một số ngẫu nhiên giữa 0 và 99:
4. - Do đó, chúng ta muốn thêm 1, để có một số ngẫu nhiên giữa 1 và 100:

# Lỗi: SyntaxError: missing ; before statement
- Lỗi này thường có nghĩa là bạn đã bỏ sót một dấu chấm phẩy ở cuối

# SyntaxError: missing ) after argument list
- thông thường nó có nghĩa là bạn đã bỏ sót dấu ngoặc đóng ở cuối cuộc gọi hàm/phương thức.

# SyntaxError: missing : after property id
- Lỗi này thường liên quan đến một đối tượng JavaScript được tạo không đúng

# SyntaxError: missing } after function body
-  thông thường nó có nghĩa là bạn đã bỏ sót một trong những dấu ngoặc nhọn từ một hàm hoặc cấu trúc điều kiện. Chúng ta đã gặp lỗi này bằng cách xóa một trong những dấu ngoặc nhọn đóng ở cuối hàm

# SyntaxError: expected expression, got 'string' or SyntaxError: unterminated string literal
- Những lỗi này thường có nghĩa là bạn đã bỏ sót dấu ngoặc kép mở hoặc đóng của một giá trị chuỗi. Trong lỗi đầu tiên ở trên, chuỗi sẽ được thay thế bằng ký tự(s) không mong muốn mà trình duyệt tìm thấy thay vì một dấu ngoặc kép ở đầu chuỗi. 
- Lỗi thứ hai có nghĩa là chuỗi không được kết thúc bằng dấu ngoặc kép.

# What are browser developer tools

# Variables(Biến)
- Một biến là một không gian lưu trữ cho một giá trị, như một số chúng ta có thể sử dụng trong một tổng, hoặc một chuỗi mà chúng ta có thể sử dụng như một phần của một câu.

- Mà không có biến:

# Khai báo biến
let myName;
let myAge;

-> Hiện tại chúng không có giá trị; chúng là những container trống rỗng. Khi bạn nhập tên biến, bạn sẽ nhận được một giá trị undefined

-> Thứ hai, khi bạn sử dụng var, bạn có thể khai báo cùng một biến bất kỳ lần nào bạn muốn, nhưng với let thì không. Cái sau đây sẽ hoạt động:
var myName = "Chris";
var myName = "Bob";

-> Một lần nữa, đây là một quyết định ngôn ngữ hợp lý. Không có lý do gì phải khai báo lại biến — nó chỉ làm mọi thứ trở nên phức tạp hơn.

-> Vì những lý do và nhiều lý do khác, chúng tôi khuyến khích bạn sử dụng let trong mã của bạn, thay vì var.

# Quy ước tên biến
-> Nói chung, bạn nên chỉ sử dụng các ký tự Latin (0-9, a-z, A-Z) và ký tự gạch dưới.

-> Không sử dụng gạch dưới ở đầu tên biến — điều này được sử dụng trong một số cấu trúc JavaScript cụ thể để có ý nghĩa cụ thể,

-> Không sử dụng số ở đầu biến.

-> Điều này không được phép và sẽ gây ra lỗi.
Một quy ước an toàn để tuân theo là chữ thường gặp, nơi bạn ghép các từ lại với nhau, sử dụng chữ thường cho toàn bộ từ đầu tiên và sau đó viết hoa các từ tiếp theo. Chúng tôi đã sử dụng quy ước này cho tên biến trong bài viết cho đến nay.

# Tránh đặt tên biến
-> Hãy đặt tên biến một cách trực quan, để mô tả dữ liệu chúng chứa. Đừng chỉ sử dụng các chữ cái/số đơn, hoặc các đoạn văn dài.

-> Biến phân biệt chữ hoa — vì vậy myage là một biến khác biệt so với myAge.

-> điều này có nghĩa là các từ tạo ra cú pháp thực sự của JavaScript! Vì vậy, bạn không thể sử dụng các từ như var, function, let và for làm tên biến

# Lexical grammar — keywords.
# Ví dụ về tên tốt:

age
myAge
init
initialColor
finalOutputValue
audio1
audio2


# Ví dụ về tên không tốt:

1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongvariablenameman

# Object
let dog = { name: "Spot", breed: "Dalmatian" };
->  Bạn có thể có một đối tượng đơn giản đại diện cho một hộp và chứa thông tin về chiều rộng, chiều dài và chiều cao của nó, hoặc bạn có thể có một đối tượng đại diện cho một người, và chứa dữ liệu về tên, chiều cao, cân nặng, ngôn ngữ mà họ nói, cách chào hỏi họ, và nhiều hơn nữa.

# Kiểu động (Dynamic typing)
let myNumber = "500"; // oops, đây vẫn là một chuỗi
typeof myNumber;
myNumber = 500; // tốt hơn rất nhiều — bây giờ đây là một số
typeof myNumber;
-> JavaScript là một "ngôn ngữ kiểu động", điều này có nghĩa là, khác với một số ngôn ngữ khác, bạn không cần phải chỉ định kiểu dữ liệu mà một biến sẽ chứa (số, chuỗi, mảng, v.v.).

# Hằng số trong JavaScript
- Bạn phải khởi tạo chúng khi bạn khai báo chúng.
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel
- Bạn không thể gán cho chúng một giá trị mới sau khi bạn đã khởi tạo chúng.
-> Bạn có thể cập nhật, thêm hoặc xóa các thuộc tính của một đối tượng được khai báo bằng const, vì ngay cả khi nội dung của đối tượng đã thay đổi, hằng số vẫn trỏ vào cùng một đối tượng:



# Kiểu số
- Số nguyên (Integers): Là các số thập phân không có phần thập phân. Chúng có thể là số dương hoặc số âm, ví dụ: 10, 400 hoặc -5.
- Số thực (Floating point numbers): Là số có dấu thập phân và các chữ số thập phân, ví dụ 12.5 và 56.7786543.
- Doubles: Là một loại cụ thể của số thực có độ chính xác cao hơn so với số thực tiêu chuẩn (có nghĩa là chúng chính xác đến nhiều số thập phân hơn).

# Chúng ta thậm chí có các hệ thống số khác nhau! Hệ thập phân là cơ số 10 (có nghĩa là nó sử dụng 0–9 trong mỗi cột), nhưng chúng ta cũng có những thứ như:

- Nhị phân (Binary): Là ngôn ngữ cấp thấp nhất của máy tính; chỉ gồm 0 và 1.
- Bát phân (Octal): Cơ số 8, sử dụng 0–7 trong mỗi cột.
- Mười lăm phân (Hexadecimal): Cơ số 16, sử dụng 0–9 và sau đó a–f trong mỗi cột. Bạn có thể gặp những con số này khi đặt màu trong CSS.


-> JavaScript chỉ có một loại dữ liệu cho số, cả số nguyên và số thực — bạn đã đoán rồi, là Number. Điều này có nghĩa là bất kỳ loại số nào bạn đang xử lý trong JavaScript, bạn xử lý chúng theo cùng một cách.
-> Lưu ý: Thực tế, JavaScript có một loại số thứ hai, BigInt, được sử dụng cho số nguyên rất, rất lớn. Nhưng với mục đích của khóa học này, chúng ta chỉ quan tâm đến giá trị Number.

const myInt = 5;
const myFloat = 6.667;

# Để làm tròn số của bạn đến một số chữ số thập phân cố định, hãy sử dụng phương thức 
toFixed()

# Chuyển đổi sang các loại dữ liệu số
let myNumber = "74";
myNumber = Number(myNumber) + 3;

# Sự ưu tiên của toán tử
num2 + num1 / 8 + 2;
- Là một con người, bạn có thể đọc điều này như "50 cộng 10 bằng 60", sau đó "8 cộng 2 bằng 10", và cuối cùng "60 chia 10 bằng 6".

- Nhưng trình duyệt thực hiện "10 chia 8 bằng 1.25", sau đó "50 cộng 1.25 cộng 2 bằng 53.25".


-> Nếu bạn muốn ghi đè lên sự ưu tiên của toán tử, bạn có thể đặt dấu ngoặc đơn xung quanh các phần mà bạn muốn được xử lý đầu tiên. Vì vậy, để có kết quả là 6, chúng ta có thể làm như sau:

let num1 = 4;
num1++;
-> điều này là do trình duyệt trả về giá trị hiện tại, sau đó tăng biến

# Canvas
Chiều rộng và chiều cao của hộp (tính bằng pixel) được xác định bởi biến x và y, ban đầu đều có giá trị là 50.

# Toán tử so sánh
- ===
- !==
- <= | >=

-> Lưu ý: Bạn có thể thấy một số người sử dụng == và != trong các bài kiểm tra sự bằng nhau và không bằng nhau của họ. Đây là các toán tử hợp lệ trong JavaScript, nhưng chúng khác biệt so với ===/!==. Các phiên bản trước kiểm tra xem giá trị có giống nhau không, nhưng không kiểm tra xem kiểu dữ liệu của giá trị có giống nhau không. Các phiên bản nghiêm túc, kiểm tra sự giống nhau cả về giá trị và kiểu dữ liệu của chúng. Các phiên bản nghiêm túc thường dẫn đến ít lỗi hơn, nên chúng tôi khuyến khích bạn sử dụng chúng.


# Chuỗi
-> Trong JavaScript, bạn có thể chọn giữa dấu nháy đơn ('), dấu nháy kép ("), hoặc dấu nháy ngược (`) để bao quanh chuỗi của bạn. Tất cả các ví dụ sau đây đều hoạt động:
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const goodQuotes1 = 'She said "I think so!"';

# Chuỗi nhiều dòng
`
Chuỗi nhiều dòng
Chuỗi nhiều dòng
`

# Template literals and Escape sequences
- \n
- \'

# tự động chuyển đổi số thành chuỗi và nối hai chuỗi.
const name = "Front ";
const number = 242;
console.log(name + number); // "Front 242"

# Hàm Number() chuyển đổi mọi thứ được truyền cho nó thành số, nếu có thể. Hãy thử nghiệm sau:
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

# Ngược lại, hàm String() chuyển đổi đối số của nó thành một chuỗi. Hãy thử nghiệm này:
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

-> Hiểu rằng chuỗi là các đối tượng và học cách sử dụng một số phương thức cơ bản có sẵn trên những đối tượng đó để thao tác chuỗi.

# Tìm độ dài của một chuỗi
const browserType = "mozilla";
browserType.length;

# Lấy một ký tự cụ thể trong chuỗi
browserType[0];
-> Nhớ: máy tính đếm từ 0, không phải là 1!

# ký tự cuối cùng của bất kỳ chuỗi nào đó
browserType[browserType.length - 1];

# Kiểm tra xem một chuỗi có chứa một phần chuỗi con không
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

# bắt đầu hoặc kết thúc bằng một chuỗi con cụ thể không
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

# Tìm vị trí của một chuỗi con trong một chuỗi
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
-> lần xuất hiện đầu tiên của chuỗi con "developers" là tại chỉ số 20.
console.log(tagline.indexOf("x")); // -1

# Tìm vị trí tiếp theo xuất hiện chuỗi đó
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

# Bạn có thể trích xuất một chuỗi con từ một chuỗi bằng cách sử dụng phương thức slice(). Bạn truyền vào nó:
- Chỉ số bắt đầu trích xuất
- Chỉ số kết thúc trích xuất. Điều này là độc quyền, có nghĩa là ký tự ở chỉ số này không được bao gồm trong chuỗi con đã trích xuất.

const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"

# Thay vào đó, bạn chỉ cần bao gồm vị trí ký tự từ nơi bạn muốn trích xuất các ký tự còn lại trong một chuỗi.
browserType.slice(2); // "zilla"
-> Lưu ý: slice() có những tùy chọn khác nữa; hãy nghiên cứu trang slice() để xem bạn có thể tìm hiểu thêm gì.
-> Các phương thức chuỗi toLowerCase() và toUpperCase() nhận một chuỗi và chuyển đổi tất cả các ký tự thành chữ thường hoặc chữ hoa, tương ứng.

# Thay đổi kiểu chữ
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

# Cập nhật các phần của một chuỗi
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"

-> giống như nhiều phương thức chuỗi khác, không thay đổi chuỗi mà nó được gọi, mà trả về một chuỗi mới

# Nếu bạn muốn thay đổi tất cả các lần xuất hiện, bạn có thể sử dụng 
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"

# Kết hợp
- Bài toán về Viết hoa chữ cái đầu: lonDon -> London
const lower = city.toLowerCase();
const firstLetter = lower.slice(0,1);
const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());

- Bài toán về trích xuất chuỗi: MAN675847583748sjt567654;Manchester Piccadilly -> MAN: Manchester Piccadilly
const code = station.slice(0,3);
const semiColon = station.indexOf(';');
const name = station.slice(semiColon + 1);
const result = `${code}: ${name}`;










