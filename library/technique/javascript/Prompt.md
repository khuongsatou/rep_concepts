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

# IDE Online
- CodePen, JSFiddle hoặc Glitch

# Yêu cầu
- Luôn tốt khi nhất quán


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
- .setAttribute("class", "msgBox")
- .parentNode.removeChild(panel)



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


# Mảng - (Arrays)
- Mảng thường được mô tả là "đối tượng giống như danh sách";
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

# Tìm chiều dài của một mảng
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5

# Bạn cũng có thể sửa đổi một mục trong mảng bằng cách gán một giá trị mới cho mục duy nhất đó
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping);
// shopping sẽ trả về [ "tahini", "milk", "cheese", "hummus", "noodles" ]

# Truy cập phần tử
const random = ["tree", 795, [0, 1, 2]];
random[2][2];

# Phương thức indexOf() nhận một mục làm đối số và sẽ trả về chỉ số của mục đó hoặc -1
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); // 2
console.log(birds.indexOf("Rabbit")); // -1

# Thêm mục
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

# Nếu bạn muốn lưu trữ chiều dài mới của mảng trong một biến
const newLength = cities.push("Bristol");

# Để thêm một mục vào đầu mảng, 
cities.unshift("Edinburgh");

# Xóa mục ở cuối
cities.pop();

# Phương thức pop() trả về mục đã bị loại bỏ. Để lưu mục đó vào một biến mới
const removedCity = cities.pop();

# Để loại bỏ mục đầu tiên từ một mảng, sử dụng shift():
cities.shift();

# Nếu bạn biết chỉ số của một mục, bạn có thể loại bỏ nó khỏi mảng bằng cách sử dụng splice()
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

# Truy cập từng mục
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}

# Bạn có thể làm điều này bằng cách sử dụng map().
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

# Bạn có thể làm điều này bằng cách sử dụng filter()
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]

# Chuyển đổi giữa chuỗi và mảng
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",");

cities.length;
cities[0]; // mục đầu tiên trong mảng
cities[1]; // mục thứ hai trong mảng
cities[cities.length - 1]; // mục cuối cùng trong mảng

# Chuyển đổi giữa mảng và chuỗi
const commaSeparated = cities.join(",");
- Hoặc
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger

# Ví dụ
VD1: printing out product names and prices on an invoice, then totaling the prices and printing them at the bottom.

``` javascript
  const productData = ["Shoes:23.99", "Hat:12.50", "Socks:5.99", "Gloves:15.00"];

  const products = productData.map(item => item.split(':').map(subItem => (isNaN(subItem) ? subItem : parseFloat(subItem))));

  // number 2
  for (const product of products) {
    // number 3
    const [productName, productPrice] = product;
    // number 4
    total += productPrice;
    // number 5
    const itemText = `${productName} — $${productPrice.toFixed(2)}`;
    console.log(itemText);
  }



```

VD2: bạn có thể chỉ muốn hiển thị 5 đối tượng tại một thời điểm vì lý do hiệu suất hoặc tránh làm mất trật tự. Khi các đối tượng mới được tạo và thêm vào mảng, các đối tượng cũ có thể bị xóa khỏi mảng để duy trì số lượng mong muốn.

 // Chỉ cho phép nhập một thuật ngữ nếu ô tìm kiếm không trống
if (searchInput.value !== '') {
  myHistory.unshift(searchInput.value);

  // Làm trống danh sách để không hiển thị các mục trùng lặp
  // Hiển thị được tạo lại mỗi khi nhập một thuật ngữ tìm kiếm.
  list.innerHTML = '';

  // Lặp qua mảng và hiển thị tất cả các thuật ngữ tìm kiếm trong danh sách
  for (const itemText of myHistory) {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  }

  // Nếu độ dài mảng là 5 hoặc nhiều hơn, loại bỏ thuật ngữ tìm kiếm cũ nhất
  if (myHistory.length >= MAX_HISTORY) {
    myHistory.pop();
  }

  // Làm trống ô tìm kiếm và đặt trọng tâm vào nó, sẵn sàng cho thuật ngữ tiếp theo được nhập
  searchInput.value = '';
  searchInput.focus();
}


# Học thêm javascript qua các bài tập
https://learnjavascript.online/app.html?id=1436

# Logical operators: AND, OR và NOT
&& — AND; cho phép bạn kết nối với nhau hai hoặc nhiều biểu thức sao cho tất cả chúng đều phải đánh giá cá nhân là true để biểu thức tổng trả về true.
|| — OR; cho phép bạn kết nối với nhau hai hoặc nhiều biểu thức sao cho một hoặc nhiều biểu thức phải đánh giá cá nhân là true để biểu thức tổng trả về true.
- Trong đoạn mã này, nếu biểu thức OR trả về true, toán tử NOT sẽ phủ định nó để biểu thức tổng trả về false.

# Lỗi sai logic
if (x === 5 || 7 || 10 || 20) {
  // thực hiện mã của tôi
}
-> Trong trường hợp này, điều kiện bên trong if () sẽ luôn đánh giá là true vì 7 (hoặc bất kỳ giá trị không phải là 0 nào khác) luôn đánh giá là true. Điều kiện này thực sự đang nói "nếu x bằng 5, hoặc 7 là true — điều mà luôn đúng". Điều này là logic không đúng! Để làm cho nó hoạt động, bạn phải chỉ định một bài kiểm tra đầy đủ ở mỗi bên của mỗi toán tử OR:
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // thực hiện mã của tôi
}

# Câu lệnh switch
->  Đối với những trường hợp bạn chỉ muốn thiết lập một biến thành một giá trị cụ thể hoặc in ra một câu lệnh cụ thể tùy thuộc vào điều kiện, cú pháp có thể hơi cồng kềnh, đặc biệt là nếu bạn có một số lượng lớn các lựa chọn.
-> — nó nhận một biểu thức/giá trị duy nhất làm đầu vào, sau đó xem xét nhiều lựa chọn cho đến khi nó tìm thấy một lựa chọn phù hợp với giá trị đó, thực thi mã tương ứng đi kèm.

switch (expression) {
  case choice1:
    // chạy mã này
    break;

  case choice2:
    // chạy mã này thay thế
    break;

  // bao gồm bất kỳ case nào bạn muốn

  default:
    // thực sự, chỉ chạy mã này
    break;
}
Ví dụ:
```javascript


const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}

```

# Toán tử 3 ngôi:
const greeting = isBirthday
  ? "Chúc mừng sinh nhật bà Smith — chúc bạn có một ngày tuyệt vời!"
  : "Chào buổi sáng bà Smith.";

# Ví dụ chương trình tạo lịch cơ bản
``` javascript
let days = 31;
  if (choice === "February") {
    days = 28;
  } else if (
    choice === "April" ||
    choice === "June" ||
    choice === "September" ||
    choice === "November"
  ) {
    days = 30;
  }

  createCalendar(days, choice);


function createCalendar(days, choice) {
  list.innerHTML = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "January");
```

# Suppose we wanted to draw 100 random circles on a <canvas> element (press the Update button to run the example again and again to see different random sets):

``` javascript
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}
```

# Set và Map.
# map() và filter()
-  tạo ra một bộ sưu tập mới
```javascript
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

```
``` javascript
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]


```
- Viết gọn hơn:
```javascript
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

# for (const cat of cats)

# Ví dụ về vòng lặp
- Thực hiện chức năng search đơn giản.
``` javascript
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }

```

- Thực hiện chức năng bình phương một số.
```javascript
for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }
  para.textContent += `${i} `;
}

```

- Tìm mèo
```javascript
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```
```javascript
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
  myFavoriteCats += and ${cats[i]}.;
  } else {
  myFavoriteCats += ${cats[i]}, ;
  }

  i++;
} while (i < cats.length);

```

- Launch countdown
```javascript

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}

```
- we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.


# Loại vòng lặp nào nên sử dụng?
- Nếu bạn đang lặp qua một mảng hoặc một đối tượng khác hỗ trợ nó và không cần truy cập vào vị trí chỉ số của mỗi mục, thì vòng lặp for...of là lựa chọn tốt nhất
- Chúng tôi khuyên bạn nên sử dụng vòng lặp for, ít nhất là từ đầu, vì đó có lẽ là cách dễ nhất để nhớ mọi thứ 

# Hàm không tên
(function () {
 alert("hello");
});

-> Điều này được gọi là hàm không tên, vì nó không có tên. Bạn thường sẽ thấy các hàm không tên khi một hàm mong đợi nhận một hàm khác dưới dạng tham số. Trong trường hợp này, tham số hàm thường được truyền dưới dạng một hàm không tên.

Lưu ý: Hình thức tạo hàm này còn được gọi là biểu thức hàm. Khác với khai báo hàm, biểu thức hàm không được nâng lên."

Ví dụ:
function logKey(event) {
  console.log(You pressed "${event.key}".);
}

textBox.addEventListener("keydown", logKey);

-> Thay vì xác định một hàm riêng biệt logKey(), bạn có thể truyền một hàm không tên vào addEventListener():
- Thay thế thành hàm không tên:
textBox.addEventListener("keydown", function (event) {
  console.log(You pressed "${event.key}".);
});

- Hoặc 1 arrow Function
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

- Nếu hàm chỉ có một tham số, bạn có thể bỏ qua dấu ngoặc đơn xung quanh tham số:
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});

- Cuối cùng, nếu hàm của bạn chỉ chứa một dòng là một câu lệnh return, bạn cũng có thể bỏ qua dấu ngoặc nhọn và từ khóa return và tự động trả giá trị biểu thức.
``` javascript
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

```
-> Chúng tôi khuyến khích bạn sử dụng hàm mũi tên, vì chúng có thể làm cho mã của bạn ngắn gọn và dễ đọc hơn

# Lỗi xung đột hàm
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>

-> Cả hai hàm bạn muốn gọi đều được gọi là greeting(), nhưng bạn chỉ có thể truy cập vào hàm greeting() của tệp first.js (tệp thứ hai sẽ bị bỏ qua)



# Trang tìm icon
iconfinder.com

# Thêm icon vào javascript
```javascript

if (msgType === "warning") {
  msg.style.backgroundImage = "url(icons/warning.png)";
  panel.style.backgroundColor = "red";
} else if (msgType === "chat") {
  msg.style.backgroundImage = "url(icons/chat.png)";
  panel.style.backgroundColor = "aqua";
} else {
  msg.style.paddingLeft = "20px";
}


```
# Tính hình
```javascript
function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

 const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "Bạn cần nhập một số!";
  } else {
    para.textContent = `${num} bình phương là ${squared(num)}. `;
    para.textContent += `${num} khối là ${cubed(num)}. `;
    para.textContent += `${num} giai thừa là ${factorial(num)}. `;
  }
```
# Event
## Có nhiều loại sự kiện khác nhau có thể xảy ra.
- Người dùng chọn, nhấp chuột hoặc di chuột qua một phần tử cụ thể.
- Người dùng chọn một phím trên bàn phím.
- Người dùng thay đổi kích thước hoặc đóng cửa sổ trình duyệt.
- Một trang web kết thúc việc tải.
- Một biểu mẫu được gửi.
- Một video được phát, tạm dừng hoặc kết thúc.
- Xảy ra một lỗi.
- Bạn có thể nhận ra từ đây (và từ việc nhìn chung vào tài liệu tham khảo sự kiện MDN) rằng có rất nhiều sự kiện có thể được kích hoạt.
Vd: Thay đổi màu sắc
```javascript
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```


# AddEventListener
- focus và blur:  Màu thay đổi khi nút được tập trung và không được tập trung; hãy thử nhấn tab để tập trung vào nút và nhấn tab lại để tập trung khỏi nút
- dblclick: Màu thay đổi chỉ khi nút được nhấp đúp.
- mouseover và mouseout: Màu thay đổi khi con trỏ chuột di chuyển qua nút hoặc khi con trỏ di chuyển khỏi nút, tương ứng.
- keydown: Thả phím ra

# removeEventListener
->  Ví dụ, điều này sẽ gỡ bỏ trình xử lý sự kiện changeBackground():
```javascript
const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler and // removes any/all event handlers associated with this controller
);


```
-> Đối với các chương trình đơn giản, nhỏ, việc dọn dẹp trình xử lý sự kiện cũ, không sử dụng lại không cần thiết, nhưng đối với các chương trình lớn, phức tạp hơn, điều này có thể cải thiện hiệu suất.

# Thuộc tính trình xử lý sự kiện
- Ví dụ, các phần tử có thuộc tính onclick. Đây được gọi là thuộc tính trình xử lý sự kiện. Để lắng nghe sự kiện, bạn có thể gán hàm xử lý cho thuộc tính.

- Với thuộc tính trình xử lý sự kiện, bạn không thể thêm nhiều hơn một trình xử lý cho một sự kiện duy nhất.
VD 1: 
- btn.onclick = () => {}
- btn.onclick = bgChange;

# Thêm sự kiện cho nhiều nút
```javascript
  const buttons = document.querySelectorAll("button")
  for (const button of buttons) {
    button.addEventListener("click", bgChange);
  }

```

# Đối tượng sự kiện
- Đôi khi, bên trong một hàm xử lý sự kiện, bạn sẽ thấy một tham số được chỉ định với tên như event, evt hoặc e.
- Điều này được gọi là đối tượng sự kiện, và nó được tự động chuyển đến các trình xử lý sự kiện để cung cấp các tính năng và thông tin bổ sung
```javascript
function bgChange(e) { // Đối tượng sự kiện.
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}
```
-> bạn có thể thấy chúng tôi đang bao gồm một đối tượng sự kiện, e, trong hàm, và trong hàm đặt một kiểu màu nền trên e.target — đó là chính nút. Thuộc tính target của đối tượng sự kiện luôn là một tham chiếu đến phần tử sự kiện xảy ra

# Ngăn sự kiện
- Vấn đề đến khi người dùng không nhập đúng dữ liệu, như một nhà phát triển, bạn muốn ngăn chặn việc gửi đến máy chủ và hiển thị một thông báo lỗi nói về điều gì đó sai và cần làm gì để sửa chữa

- preventDefault() : điều này ngăn chặn việc gửi biểu mẫu — và sau đó hiển thị một thông báo lỗi trong đoạn văn bản dưới biểu mẫu của chúng tôi để thông báo cho người dùng biết có gì sai
```javascript
form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "Bạn cần điền cả hai tên!";
  }
});

```
#  Sự kiện Delegation
- cách chúng tôi sử dụng event.target.


# Về Keydown
- Sự kiện keydown xảy ra khi người dùng nhấn một phím. Đối tượng sự kiện của nó là một KeyboardEvent
- Sự kiện chuyên biệt với một thuộc tính key nói cho bạn biết phím nào đã được nhấn:
Ví dụ:
`Bạn đã nhấn phím "${event.key}"


# Event bubbling
- Bong bóng sự kiện mô tả cách trình duyệt xử lý các sự kiện được đặt mục tiêu vào các phần tử lồng nhau.
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>


```javascript
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);


```
- Điều này hợp lý: nút nằm bên trong <div>, vì vậy khi bạn nhấp vào nút, bạn cũng ngầm nhấp vào phần tử mà nó nằm trong.

<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>


```javascript
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

```
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
1. nhấp vào nút xảy ra đầu tiên
2. tiếp theo là nhấp vào phần tử cha của nó (phần tử <div>)
3. tiếp theo là phần tử cha của <div> (phần tử <body>).
-> Chúng ta mô tả điều này bằng cách nói rằng sự kiện nổi lên từ phần tử bên trong nhất đã được nhấp chuột.


Ví dụ về video:
<button>Hiển thị video</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      Trình duyệt của bạn không hỗ trợ video HTML. Đây là một
      <a href="rabbit320.mp4">liên kết đến video</a> thay thế.
    </p>
  </video>
</div>


```javascript
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));

```

# Fixing the problem with stopPropagation()
-> để Fix lỗi lag truyền event
```javascript
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation(); // dừng lag truyền event
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));

```
# Event Capture
- Một biến thể khác của việc lan truyền sự kiện là chụp sự kiện.

document.body.addEventListener("click", handleClick, { capture: true });


# Event delegation
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>

.tile {
  height: 100px;
  width: 25%;
  float: left;
}


```javascript
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();// Nó sẽ hiện background cho phần tử ô con
});

```
Ví dụ, Node.js là một runtime JavaScript rất phổ biến cho phép các nhà phát triển sử dụng JavaScript để xây dựng ứng dụng mạng và máy chủ. Mô hình sự kiện trong Node.js dựa trên listeners để lắng nghe sự kiện và emitters để phát ra sự kiện theo chu kỳ.
- Mô hình sự kiện trong Node.js dựa trên listeners để lắng nghe sự kiện và emitters để phát ra sự kiện theo chu kỳ 
- Sử dụng các hàm như on() để đăng ký một trình nghe sự kiện, và once() để đăng ký một trình nghe sự kiện chỉ sau khi nó đã chạy một lần
- Mô hình sự kiện trong Node.js dựa trên listeners để lắng nghe sự kiện và emitters để phát ra sự kiện theo chu kỳ — nghe có vẻ không khác biệt nhiều, nhưng mã nguồn khá khác nhau, sử dụng các hàm như on() để đăng ký một trình nghe sự kiện, và once() để đăng ký một trình nghe sự kiện chỉ sau khi nó đã chạy một lần.
- Bây giờ bạn nên biết tất cả những điều cơ bản về sự kiện web ở giai đoạn sớm này. Như đã đề cập, sự kiện thực sự không phải là một phần của JavaScript cơ bản — chúng được định nghĩa trong các API Web của trình duyệt.

- Ngoài ra, quan trọng là hiểu rằng các ngữ cảnh khác nhau mà JavaScript được sử dụng có các mô hình sự kiện khác nhau — từ API Web đến các lĩnh vực khác như tiện ích mở rộng web của trình duyệt và Node.js (JavaScript phía máy chủ). Chúng tôi không mong đợi bạn hiểu rõ tất cả những lĩnh vực này ngay bây giờ, nhưng việc hiểu cơ bản về sự kiện sẽ giúp bạn tiến xa hơn trong việc học phát triển web.

Lưu ý: Nếu bạn gặp vấn đề, bạn có thể liên hệ với chúng tôi qua một trong các kênh giao tiếp của chúng tôi.


# Đối tượng trong javascript
const person = {};

## Hiển thị trên console.log
[object Object]
Object { }
{ }

## Bổ xung thêm dữ liệu

```javascript
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."

const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};


```
# Đối tượng như là các thuộc tính của đối tượng
```javascript
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};

person.name.first;
person.name.last;
```

# Notation Dấu ngoặc vuông (Bracket Notation)
- Notation dấu ngoặc vuông cung cấp một cách truy cập thuộc tính của đối tượng. Thay vì sử dụng dấu chấm như thế này:
```javascript
person["age"];
person["name"]["first"];

```
- thay vì sử dụng số chỉ mục để chọn một mục, bạn sử dụng tên được liên kết với giá trị của mỗi thành viên. Không có gì lạ khi mọi người đôi khi gọi đối tượng là các mảng liên kết 
- Dấu chấm thường được ưa chuộng hơn so với dấu ngoặc vuông vì nó ngắn gọn hơn và dễ đọc hơn. 
- Tuy nhiên, có một số trường hợp nơi bạn phải sử dụng dấu ngoặc vuông. Ví dụ, nếu tên thuộc tính của một đối tượng được giữ trong một biến, bạn không thể sử dụng dấu chấm để truy cập giá trị, nhưng bạn có thể truy cập giá trị bằng cách sử dụng dấu ngoặc vuông.
- Trong ví dụ dưới đây, hàm logProperty() có thể sử dụng person[propertyName] để lấy giá trị của thuộc tính có tên trong propertyName.
```javascript
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32

```
# Thiết lập thành viên đối tượng
```javascript
person.age = 45;
person["name"]["last"] = "Cratchit";

person.age;
person["name"]["last"];


person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

person["eyes"];
person.farewell();
// "Bye everybody!"

```
# Một khía cạnh hữu ích của dấu ngoặc vuông là nó có thể được sử dụng để đặt không chỉ giá trị thành viên một cách động, mà còn tên thành viên
```javascript
const myDataName = nameInput.value;
const myDataValue = nameValue.value;

person[myDataName] = myDataValue;

// Để thử nghiệm điều này, hãy thêm các dòng sau vào mã của bạn, ngay dưới dấu ngoặc nhọn đóng của đối tượng person
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

person.height;

```
-> Thêm một thuộc tính vào một đối tượng bằng phương thức trên không thể thực hiện được với dấu chấm, nó chỉ có thể chấp nhận một tên thành viên chữa động, không phải giá trị biến trỏ đến tên.

# "This" là gì?
- khi bạn chỉ cần tạo một đối tượng literal duy nhất, điều này không quá hữu ích. Nhưng nếu bạn tạo nhiều hơn một, điều này cho phép bạn sử dụng cùng một định nghĩa phương thức cho mọi đối tượng bạn tạo.
```javascript
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}

// Ví dụ 2
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

```

# Phiên bản đầu tiên của điều này chỉ là một hàm:
```javascript
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."


```
-> Điều này hoạt động tốt nhưng hơi dài dòng: chúng ta phải tạo một đối tượng trống, khởi tạo nó và trả về nó. Cách làm tốt hơn là sử dụng một hàm tạo (constructor). Một hàm tạo đơn giản chỉ là một hàm được gọi bằng từ khóa new. Khi bạn gọi một hàm tạo, nó sẽ:

1) Tạo ra một đối tượng mới.
2) Liên kết this với đối tượng mới, để bạn có thể tham chiếu đến this trong mã hàm tạo của bạn.
3) Chạy mã trong hàm tạo.
4) Trả về đối tượng mới.

```javascript
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const salva = new Person("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."


```

# Object prototypes
```javascript
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf

```
- Mọi đối tượng trong JavaScript đều có một thuộc tính tích hợp sẵn gọi là prototype. Prototype chính nó là một đối tượng, vì vậy prototype sẽ có prototype riêng, tạo thành điều được gọi là dòng thời gian prototype. Dòng thời gian kết thúc khi chúng ta đạt đến một prototype có null cho prototype riêng.

- Lưu ý: Thuộc tính của một đối tượng chỉ đến prototype của nó không được gọi là prototype. Tên của nó không chuẩn, nhưng thực tế tất cả các trình duyệt đều sử dụng __proto__. Cách chuẩn để truy cập prototype của một đối tượng là sử dụng phương thức Object.getPrototypeOf().

- Khi bạn cố gắng truy cập một thuộc tính của một đối tượng: nếu thuộc tính không thể được tìm thấy trong chính đối tượng, prototype sẽ được tìm kiếm cho thuộc tính đó. Nếu thuộc tính vẫn không thể được tìm thấy, thì prototype của prototype sẽ được tìm kiếm, và cứ thế cho đến khi thuộc tính được tìm thấy hoặc cuối cùng của chuỗi đối tượng, trong trường hợp đó, undefined được trả về.

- Vì vậy, khi chúng ta gọi myObject.toString(), trình duyệt:

1) Tìm toString trong myObject.
2) Không tìm thấy nó ở đó, nên tìm trong đối tượng prototype của myObject để toString.
3) Tìm thấy nó ở đó và gọi nó.

- Prototype cho myObject là gì? Để biết điều này, chúng ta có thể sử dụng hàm Object.getPrototypeOf():
Object.getPrototypeOf(myObject); // Object { }

- Đây là một đối tượng được gọi là Object.prototype, và nó là prototype cơ bản nhất, mà tất cả các đối tượng đều có mặc định. Prototype của Object.prototype là null, vì vậy nó ở cuối của dòng thời gian prototype

# Dòng thời gian prototype
```javascript
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null

```

- Đoạn mã này tạo một đối tượng Date, sau đó đi lên theo dòng thời gian prototype, ghi lại các prototype. Nó cho chúng ta thấy rằng prototype của myDate là một đối tượng Date.prototype, và prototype của nó là Object.prototype.

Dòng thời gian prototype cho myDate:

1) Date.prototype
2) Object { }
3) null

# Shadowing properties
```javascript
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'

```

# Thiết lập prototype:
- Sử dụng Object.create() và constructors.
- Phương thức Object.create() tạo một đối tượng mới và cho phép bạn chỉ định một đối tượng sẽ được sử dụng làm prototype cho đối tượng mới.
```javascript
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

```
# Sử dụng constructor cho prototype

- Trong JavaScript, tất cả các hàm đều có một thuộc tính được gọi là prototype. Khi bạn gọi một hàm như một constructor, thuộc tính này được đặt làm prototype của đối tượng mới được xây dựng (theo quy ước, trong thuộc tính có tên là __proto__).

- Vì vậy, nếu chúng ta đặt prototype của một constructor, chúng ta có thể đảm bảo rằng tất cả các đối tượng được tạo ra bằng constructor đó đều có prototype đó:

```javascript
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
```
# Ở đây, chúng ta tạo:
- Một đối tượng personPrototype, có một phương thức greet().
- Một hàm constructor Person() khởi tạo tên của người để tạo.
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

- Điều này cũng giải thích tại sao chúng ta nói trước đây rằng prototype của myDate được gọi là Date.prototype: đó là thuộc tính prototype của hàm constructor Date.
```javascript
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false

```
# Prototype và kế thừa:
- Prototype là một tính năng mạnh mẽ và linh hoạt của JavaScript, giúp tái sử dụng mã và kết hợp các đối tượng.
- Bạn có thể thấy rằng trong JavaScript, nếu các đối tượng Professor và Student có thể có prototype là Person, thì chúng có thể kế thừa các thuộc tính chung, trong khi thêm và định lại những thuộc tính cần phải khác biệt.

# Các thuộc tính sở hữu (Own properties)
- Các đối tượng mà chúng ta tạo bằng constructor Person ở trên có hai thuộc tính:

- Một thuộc tính name, được đặt trong constructor, nên nó xuất hiện trực tiếp trên các đối tượng Person.
- Một phương thức greet(), được đặt trong prototype.
```javascript
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false

```
- Lưu ý: Bạn cũng có thể sử dụng phương thức không tĩnh Object.hasOwnProperty() ở đây, nhưng chúng tôi khuyến khích bạn sử dụng Object.hasOwn() nếu có thể.

# Prototype và kế thừa:
- Prototype là một tính năng mạnh mẽ và linh hoạt của JavaScript, giúp tái sử dụng mã và kết hợp các đối tượng.
- Ví dụ, nếu chúng ta đang mô phỏng một trường học, chúng ta có thể có giáo sư và sinh viên: họ đều là người, nên có một số đặc điểm chung (ví dụ: họ đều có tên), nhưng mỗi người có thể thêm các đặc điểm phụ (ví dụ: giáo sư có môn học họ giảng dạy), hoặc có thể triển khai cùng một đặc điểm theo cách khác nhau. Trong một hệ thống OOP, chúng ta có thể nói rằng giáo sư và sinh viên đều kế thừa từ người.

- Bạn có thể thấy rằng trong JavaScript, nếu các đối tượng Professor và Student có thể có prototype là Person, thì chúng có thể kế thừa các thuộc tính chung, trong khi thêm và định lại những thuộc tính cần phải khác biệt.

# ba khái niệm chính: classes và instances, inheritance, và encapsulation.
- Trù tượng, đa hình, kế thừa, đóng gói
- Lưu ý: Để chính xác, các tính năng mà chúng ta mô tả ở đây thuộc một loại OOP cụ thể gọi là class-based hoặc "classical" OOP
- Sau đó, trong JavaScript, chúng ta sẽ xem xét cách các constructor và chuỗi prototype liên quan đến các khái niệm OOP này và cách chúng khác nhau.

## Classes và Instances:
- Lập trình hướng đối tượng là về việc mô hình hóa một hệ thống dưới dạng một bộ sưu tập các đối tượng, trong đó mỗi đối tượng đại diện cho một khía cạnh cụ thể của hệ thống
- Chúng ta tạo các định nghĩa trừu tượng đại diện cho các loại đối tượng chúng ta muốn có trong hệ thống của mình
```javascript
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()


walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'

```
- Điều này xác định một class Professor với:

+ Hai thuộc tính dữ liệu: name và teaches
+ Hai phương thức: grade() để đánh giá bài và introduceSelf() để tự giới thiệu.
- Mỗi giáo sư cụ thể chúng ta tạo được gọi là một instance của class Professor.
- Quá trình tạo một instance được thực hiện bởi một hàm đặc biệt gọi là constructor.
Ví dụ 2:
```javascript
class Student
    properties
        name
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()

```
- Chúng ta bắt đầu bằng cách quan sát rằng sinh viên và giáo sư đều là con người, và con người có tên và muốn tự giới thiệu.
- Chúng ta có thể mô hình hóa điều này bằng cách định nghĩa một lớp mới là Person, nơi chúng ta định nghĩa tất cả các thuộc tính chung của con người. Sau đó, Professor và Student có thể đều kế thừa từ Person, thêm vào đó các thuộc tính bổ sung của họ:
```javascript
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()


walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'

```
- Tính năng này - khi một phương thức có cùng tên nhưng có một triển khai khác nhau trong các lớp khác nhau - được gọi là đa hình
- Khi một phương thức trong một subclass thay thế triển khai của superclass, chúng ta nói rằng subclass ghi đè phiên bản trong superclass.*
- Đối tượng cung cấp một giao diện cho mã khác muốn sử dụng chúng nhưng duy trì trạng thái nội tại của chúng. Trạng thái nội tại của đối tượng được giữ riêng tư, có nghĩa là nó chỉ có thể được truy cập bởi các phương thức của đối tượng, không phải từ các đối tượng khác. Việc giữ trạng thái nội tại của đối tượng riêng tư, và nói chung tạo ra một phân chia rõ ràng giữa giao diện công khai và trạng thái nội tại riêng tư của nó, được gọi là encapsulation (đóng gói).
- Đây là một tính năng hữu ích vì nó cho phép người lập trình thay đổi triển khai nội tại của một đối tượng mà không cần phải tìm và cập nhật toàn bộ mã sử dụng nó: nó tạo ra một loại tường lửa giữa đối tượng này và phần còn lại của hệ thống.

- Ví dụ, giả sử sinh viên được phép học bắn cung nếu họ ở năm hai trở lên. 
```javascript
if (student.year > 1) {
  // cho phép sinh viên tham gia lớp học
}

```

- Sẽ tốt hơn nếu có một phương thức canStudyArchery() trên đối tượng Sinh viên, triển khai logic tại một nơi duy nhất:
```javascript
class Student : extends Person
    properties
       year
    constructor
       Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }


if (student.canStudyArchery()) {
  // cho phép sinh viên tham gia lớp học
}

```
- Như vậy, nếu chúng ta muốn thay đổi quy tắc về việc học bắn cung, chúng ta chỉ cần cập nhật lớp Sinh viên, và tất cả mã sử dụng nó vẫn sẽ hoạt động.

- Nếu thêm tính đóng gói vào
```javascript
class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // lỗi: 'year' là một thuộc tính riêng tư của Sinh viên

```

- Dây chuyền prototype giống như một cách tự nhiên để triển khai tính kế thừa. Ví dụ, nếu chúng ta có một đối tượng Sinh viên mà prototype của nó là Person, thì nó có thể kế thừa name và ghi đè introduceSelf().

- Thứ nhất, trong OOP dựa trên lớp, các lớp và đối tượng là hai khái niệm riêng biệt, và đối tượng luôn được tạo ra dưới dạng các thể hiện của lớp. 

# Classes và Constructors:
```javascript
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles

```

# Kế thừa:
```javascript
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade

```

# JSON là gì?
- JSON là một định dạng dữ liệu dựa trên văn bản theo cú pháp đối tượng JavaScript, được đưa ra nổi tiếng bởi Douglas Crockford. Mặc dù nó giống cú pháp đối tượng của JavaScript, nhưng nó có thể được sử dụng độc lập với JavaScript, và nhiều môi trường lập trình hỗ trợ khả năng đọc (phân tích) và tạo JSON.

- JSON tồn tại dưới dạng một chuỗi — hữu ích khi bạn muốn truyền dữ liệu qua mạng.
- Lưu ý: Chuyển đổi một chuỗi thành một đối tượng nguyên thuỷ được gọi là giải serial (deserialization), trong khi chuyển đổi một đối tượng nguyên thuỷ thành một chuỗi để có thể truyền qua mạng được gọi là serial (serialization).
- Bạn có thể bao gồm các loại dữ liệu cơ bản giống như trong một đối tượng JavaScript tiêu chuẩn — chuỗi, số, mảng, boolean và các đối tượng chữ ký khác.
```javascript
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

superHeroes.homeTown;
superHeroes["active"];

superHeroes["members"][1]["powers"][2];

```
- Bạn có thể xác nhận tính hợp lệ của JSON bằng cách sử dụng ứng dụng như JSONLint.

# Fetch json
```javascript
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}


```
- Để lấy JSON, chúng ta sử dụng một API được gọi là Fetch. API này cho phép chúng ta thực hiện các yêu cầu mạng để lấy tài nguyên từ máy chủ thông qua JavaScript (ví dụ: hình ảnh, văn bản, JSON, thậm chí là đoạn mã HTML), có nghĩa là chúng ta có thể cập nhật các phần nhỏ của nội dung mà không cần phải tải lại toàn bộ trang.


- May mắn thay, hai vấn đề này thường xuyên xuất hiện trong phát triển web nên trình duyệt đã cung cấp một đối tượng JSON tích hợp, chứa hai phương thức sau:
+ parse(): Chấp nhận một chuỗi JSON làm tham số và trả về đối tượng JavaScript tương ứng.
+ stringify(): Chấp nhận một đối tượng làm tham số và trả về chuỗi JSON tương ứng.


```javascript
// stringify() hoạt động theo hướng ngược lại. 
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;

```

# API Canvas
- Đoạn mã này lấy tham chiếu đến phần tử <canvas>, sau đó gọi phương thức getContext() trên đó để cung cấp cho chúng ta một ngữ cảnh để bắt đầu vẽ. Hằng số kết quả (ctx) là đối tượng đại diện trực tiếp cho khu vực vẽ của canvas và cho phép chúng ta vẽ các hình dạng 2D trên đó.

```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  update() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

}

const testBall = new Ball(50, 100, 4, 4, "blue", 10);

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}

collisionDetect() {
  for (const ball of balls) {
    if (this !== ball) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        ball.color = this.color = randomRGB();
      }
    }
  }
}


function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  

  requestAnimationFrame(loop);
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      this.x -= this.velX;
      break;
    case "d":
      this.x += this.velX;
      break;
    case "w":
      this.y -= this.velY;
      break;
    case "s":
      this.y += this.velY;
      break;
  }
});


```
- Tất cả các chương trình tạo ra hiệu ứng chuyển động nói chung đều liên quan đến một vòng lặp hoạt ảnh

# Asynchronous JavaScript
- Promises
- Workers
- Lập trình bất đồng bộ là một kỹ thuật cho phép chương trình của bạn bắt đầu một nhiệm vụ có thể kéo dài thời gian và vẫn có thể phản ứng với các sự kiện khác trong khi nhiệm vụ đó đang chạy, thay vì phải đợi cho đến khi nhiệm vụ đó hoàn thành. Sau khi nhiệm vụ đó hoàn thành, chương trình của bạn được trình bày với kết quả.
- Thực hiện các yêu cầu HTTP sử dụng fetch().
- Truy cập camera hoặc micro của người dùng sử dụng getUserMedia().
- Yêu cầu người dùng chọn file sử dụng showOpenFilePicker().
- Nguyên nhân của vấn đề này là chương trình JavaScript này là đơn luồng
- Bởi vì chương trình bao gồm một luồng duy nhất, nó chỉ có thể làm một việc một lúc: vì vậy nếu nó đang đợi cuộc gọi đồng bộ chạy lâu dài của chúng tôi trả lại, nó không thể làm bất cứ điều gì khác.
```javascript
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Hoàn thành với mã trạng thái: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Bắt đầu yêu cầu XHR\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});

```
# Tại sao không dùng callBack Hell
- Vì chúng ta phải gọi các hàm gọi lại bên trong các hàm gọi lại, chúng ta có một hàm doOperation() lồng sâu, rất khó đọc và gỡ lỗi. Đôi khi điều này được gọi là "địa ngục hàm gọi lại" hoặc "kim tự tháp của tuyệt vọng" (vì thụt lề giống như một kim tự tháp ngược).

- Khi chúng ta lồng các hàm gọi lại như thế này, việc xử lý lỗi cũng trở nên khó khăn: thường bạn phải xử lý lỗi ở mỗi cấp độ của "kim tự tháp", thay vì chỉ có một cấp độ xử lý lỗi ở cấp độ cao nhất.
- nền tảng của lập trình bất đồng bộ trong JavaScript là Promise (Hứa), và đó là đề tài của bài viết tiếp theo.

# Để làm điều này, chúng ta sẽ thực hiện một yêu cầu HTTP đến máy chủ. 
```javascript
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

```
- Ngay sau đó, ghi log biến fetchPromise. Điều này nên xuất ra một cái gì đó giống như: Promise { <state>: "pending" }, nói với chúng ta rằng chúng ta có một đối tượng Promise, và nó có một trạng thái có giá trị là "pending". Trạng thái "pending" có nghĩa là hoạt động fetch vẫn đang diễn ra.

# Gọi 2 hàm bất đồng bộ
```javascript
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});

```
-> Sử dụng bên trên sẽ gây ra tình trạng callBack hell
# Viết lại mã không dùng callBack
```javascript
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

```

# Catching errors
- API fetch() có thể ném ra một lỗi vì nhiều lý do (ví dụ, do không có kết nối mạng hoặc URL bị định dạng sai cách) và chúng ta cũng ném một lỗi nếu máy chủ trả về một lỗi.
- Để hỗ trợ xử lý lỗi, đối tượng Promise cung cấp một phương thức catch(). 
```javascript
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

```

# Một promise có thể ở một trong ba trạng thái
- pending (đang chờ): promise đã được tạo ra và hàm bất đồng bộ mà nó liên kết với vẫn chưa thành công hoặc thất bại. Đây là trạng thái của promise khi nó được trả về từ cuộc gọi fetch(), và yêu cầu vẫn đang được thực hiện.

- fulfilled (đã thành công): hàm bất đồng bộ đã thành công. Khi một promise được thỏa mãn, bộ xử lý then() của nó được gọi.

- rejected (bị từ chối): hàm bất đồng bộ đã thất bại. Khi một promise bị từ chối, bộ xử lý catch() của nó được gọi.

# Kết hợp nhiều promises
- Promise được trả về bởi Promise.all():
- Được thỏa mãn khi và nếu tất cả các promises trong mảng được thỏa mãn. Trong trường hợp này, bộ xử lý then() sẽ được gọi với một mảng các phản hồi, theo thứ tự giống như promises được truyền vào all().
- Bị từ chối khi và nếu bất kỳ promise nào trong mảng bị từ chối. Trong trường hợp này, bộ xử lý catch() sẽ được gọi với lỗi được ném bởi promise bị từ chối.
```javascript
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

```
# Nếu muốn bắt kỳ promise nào được thỏa mãn điều trả về kết quả
- bạn muốn sử dụng Promise.any(). Điều này giống như Promise.all(), ngoại trừ nó được thỏa mãn ngay khi bất kỳ promise nào trong mảng được thỏa mãn, hoặc bị từ chối nếu tất cả chúng đều bị từ chối

# async và await
- Đây là hàm bất đồng bộ có thể sử dụng await
```javascript
async function myFunction() {
  // Đây là một hàm async
}

```

- Đây là hàm fetch được viết lại
```javascript
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();

```

# Lỗi sai xử lý bất đồng bộ
```javascript
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" là một đối tượng Promise, vì vậy điều này sẽ không hoạt động

```

- Chỉnh lại cho đúng
```javascript
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));

```

# Promises Base
- Chúng ta sẽ sử dụng hàm setTimeout() để triển khai hàm alarm(). Hàm setTimeout() nhận vào một hàm callback và một khoảng thời gian chờ đợi, được tính bằng mili giây. Khi setTimeout() được gọi, nó khởi động một bộ hẹn giờ với khoảng thời gian chờ đợi đã cho, và khi thời gian hết, nó gọi hàm được chuyển vào.
- Constructor Promise() nhận một hàm duy nhất như một đối số. Chúng ta sẽ gọi hàm này là executor.
- Hàm executor này cũng nhận vào hai đối số, cũng là hai hàm, và thường được gọi là resolve và reject
- Nếu hàm bất đồng bộ thành công, bạn gọi resolve, và nếu nó thất bại, bạn gọi reject. Nếu hàm executor ném ra một lỗi, reject sẽ tự động được gọi. Bạn có thể truyền một tham số duy nhất của bất kỳ kiểu nào vào resolve và reject.

```javascript
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Thời gian chờ đợi của báo thức không được âm");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
// Full Code
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Thời gian chờ đợi của báo thức không được âm");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Không thể đặt báo thức: ${error}`));
});

// Sử dụng async và await
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Thời gian chờ đợi của báo thức không được âm");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Không thể đặt báo thức: ${error}`;
  }
});


```

# Worker
- Web workers cung cấp khả năng chạy một số nhiệm vụ trong một luồng khác, giúp bạn bắt đầu nhiệm vụ, sau đó tiếp tục với xử lý khác (như xử lý các tương tác người dùng).
- Để tránh những vấn đề này trên web, mã chính và mã worker không bao giờ có truy cập trực tiếp vào biến của nhau, và chỉ có thể thực sự "chia sẻ" dữ liệu trong các trường hợp cực kỳ cụ thể.
- Workers và mã chính chạy trong các thế giới hoàn toàn riêng biệt và chỉ tương tác thông qua việc gửi nhau các thông điệp
- Đặc biệt, điều này có nghĩa là workers không thể truy cập DOM (cửa sổ, tài liệu, các phần tử trang, và cả những thứ khác).
# Có ba loại workers khác nhau:
- Dedicated workers
- Shared workers
- Service workers

# Decicated workers
```javascript
// Tạo một worker mới, đưa vào đó mã trong "generate.js"
const worker = new Worker("./generate.js");

// Khi người dùng nhấp vào "Generate primes", gửi một thông điệp đến worker.
// Lệnh thông điệp là "generate", và thông điệp cũng chứa "quota",
// là số nguyên tố cần tạo.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// Khi worker gửi một thông điệp trở lại luồng chính,
// cập nhật hộp đầu ra với một thông điệp cho người dùng, bao gồm số lượng
// số nguyên tố đã tạo, lấy từ dữ liệu thông điệp.
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

```
- Đầu tiên, chúng ta tạo worker bằng cách sử dụng constructor Worker(). Chúng ta truyền cho nó một URL trỏ đến kịch bản worker. Ngay khi worker được tạo, kịch bản worker sẽ được thực thi.
- Nhưng bây giờ, thay vì gọi hàm generatePrimes(), chúng ta gửi một thông điệp đến worker bằng cách sử dụng worker.postMessage(). Thông điệp này có thể nhận một đối số, và trong trường hợp này, chúng ta đang truyền một đối tượng JSON chứa hai thuộc tính:
- command: một chuỗi xác định điều chúng ta muốn worker thực hiện (trong trường hợp worker của chúng ta có thể thực hiện nhiều công việc hơn một công việc).
- quota: số lượng số nguyên tố cần tạo.
- Tiếp theo, chúng ta thêm một trình xử lý sự kiện thông điệp cho worker. Điều này để worker có thể thông báo cho chúng ta khi nó đã hoàn thành và chuyển cho chúng ta bất kỳ dữ liệu kết quả nào. Trình xử lý của chúng ta lấy dữ liệu từ thuộc tính data của thông điệp và ghi nó vào phần tử đầu ra (dữ liệu giống như quota, vì vậy đây có vẻ hơi không có ý nghĩa, nhưng nó thể hiện nguyên tắc).
```javascript
// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

// Generate primes (very inefficiently)
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  // When we have finished, send a message to the main thread,
  // including the number of primes we generated.
  postMessage(primes.length);
}

```
# Các loại worker khác nhau
- Worker chúng ta vừa tạo là điều được gọi là worker chuyên biệt. Điều này có nghĩa là nó được sử dụng bởi một thể hiện kịch bản duy nhất.

- Tuy nhiên, cũng có các loại worker khác:

- Shared workers: Có thể được chia sẻ bởi nhiều tập lệnh khác nhau chạy trong các cửa sổ khác nhau.

- Service workers: Hoạt động giống như máy chủ proxy, lưu trữ tài nguyên để các ứng dụng web có thể hoạt động khi người dùng offline. Chúng là một thành phần chính của ứng dụng web tiến bộ (Progressive Web Apps).

# API là gì?
- Giao diện Lập trình Ứng dụng (APIs) là các cấu trúc được cung cấp trong các ngôn ngữ lập trình để cho phép nhà phát triển tạo ra các chức năng phức tạp một cách dễ dàng hơn. Chúng trừu tượng hóa mã nguồn phức tạp hơn, cung cấp một cú pháp dễ sử dụng hơn để thay thế.

Ví dụ: Để hiểu rõ hơn, hãy nghĩ về nguồn điện trong nhà bạn. Khi bạn muốn sử dụng một thiết bị trong nhà, bạn cắm nó vào ổ cắm và nó hoạt động. Bạn không cố gắng kết nối trực tiếp vào nguồn điện

# APIs trong JavaScript phía máy khách (client-side)
- Browser APIs (APIs của trình duyệt): Được tích hợp sẵn trong trình duyệt web của bạn và có khả năng tiếp cận dữ liệu từ trình duyệt và môi trường máy tính xung quanh, thực hiện các nhiệm vụ phức tạp hữu ích với nó.
Ví dụ: Web Audio API cung cấp các cấu trúc JavaScript để thao tác âm thanh trong trình duyệt — lấy một đoạn âm thanh, điều chỉnh âm lượng, áp dụng hiệu ứng, vv
- Third-party APIs (APIs bên thứ ba): Không tích hợp sẵn trong trình duyệt theo mặc định, và thông thường bạn phải lấy mã và thông tin của chúng từ nơi nào đó trên web.
Ví dụ: Google Maps API cho phép bạn thực hiện các thao tác như hiển thị bản đồ tương tác đến văn phòng của bạn trên trang web

# Các loại API
- APIs để Thao Tác Tài Liệu Được Tải Lên Trình Duyệt: Document Object Model
- APIs để Truy Xuất Dữ Liệu Từ Máy Chủ để Cập Nhật Các Phần Nhỏ Của Trang Web: Fetch API, XMLHttpRequest, Ajax
- APIs để Vẽ và Thao Tác Đồ Họa: Canvas, WebGL
- APIs Âm Thanh và Video như HTMLMediaElement, Web Audio API, và WebRTC:  âm thanh, video, chú thích và phụ đề
- APIs Thiết Bị: GPS của thiết bị để xác định vị trí người dùng thông qua Geolocation API
- APIs Lưu Trữ Phía Máy Khách: Web Storage API, IndexedDB API

# Các APIs Phổ Biến Từ Bên Thứ Ba
- Map APIs: liên quan đến bản đồ trên trang web
- Facebook Suite of APIs: đăng nhập ứng dụng bằng cách sử dụng đăng nhập Facebook, chấp nhận thanh toán trong ứng dụng, triển khai chiến dịch quảng cáo có geotargeting
- Telegram APIs: nhúng nội dung từ các kênh Telegram trên trang web của bạn, cũng như hỗ trợ cho các bot.
- YouTube API: YouTube vào trang web, tìm kiếm trên YouTube, xây dựng danh sách phát và nhiều tính năng khác
- Pinterest API: ... quản lý bảng và pins trên Pinterest
- Twilio API: ... chức năng gọi thoại và video
- Disqus API: một nền tảng bình luận có thể tích hợp vào trang web
- Mastodon API: Cho phép bạn thao tác các tính năng của mạng xã hội Mastodon theo cách lập trình
- IFTTT API: Cho phép tích hợp nhiều APIs thông qua một nền tảng

# Làm thế nào APIs hoạt động?
- Dựa trên đối tượng: chúng hoạt động như các bộ chứa cho dữ liệu mà API sử dụng (chứa trong các thuộc tính của đối tượng) và chức năng mà API cung cấp (chứa trong các phương thức của đối tượng)
- Ví dụ với Web Audio API
+ AudioContext
+ MediaElementAudioSourceNode
+ AudioDestinationNode

# Ví dụ về API âm thanh 
```javascript
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
```

```javascript
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

```
-> đại diện cho nguồn âm thanh của chúng tôi

```javascript
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);

```

```javascript
// play/pause audio
playBtn.addEventListener("click", () => {
  // kiểm tra xem ngữ cảnh có ở trạng thái "đình chỉ" không (chính sách tự động phát)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // nếu bản nhạc đã dừng, phát nó
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // nếu bản nhạc đang phát, dừng nó
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// nếu bản nhạc kết thúc
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});

// âm lượng
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});


```
-> sử dụng để phát và tạm dừng bản nhạc không phải là một phần của Web Audio API; chúng thuộc về HTMLMediaElement API, đây là một API khác nhưng có quan hệ chặt chẽ.

```javascript
// âm lượng
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});

```

-> Tiếp theo, chúng tôi tạo một đối tượng GainNode bằng phương thức AudioContext.createGain(), nó có thể được sử dụng để điều chỉnh âm lượng âm thanh đi qua nó,

```javascript
audioSource.connect(gainNode).connect(audioCtx.destination);

```
-> Điều cuối cùng để làm để có thể hoạt động là kết nối các nút khác nhau trong biểu đồ âm thanh, điều này được thực hiện bằng cách sử dụng phương thức AudioNode.connect() có sẵn trên mọi loại nút:


-> Trong Web Audio API, điều này khá đơn giản — đó là đối tượng AudioContext, cần phải được sử dụng để thực hiện bất kỳ xử lý âm thanh nào.


```javascript
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

```

"JavaScript Libraries: Như jQuery, Mootools, React, chứa các chức năng tùy chỉnh để tăng tốc việc viết mã."

# Tóm tắt Các Điểm Chính về API (Giao diện Lập trình Ứng dụng):
Khái Niệm Cơ Bản:

API là các tính năng lập trình giúp điều khiển các khía cạnh của trình duyệt, hệ điều hành, hoặc dữ liệu từ các trang web hoặc dịch vụ khác.
Các Loại API:

Browser APIs: Xây dựng sẵn trong trình duyệt, thao tác với môi trường trình duyệt.
Third-party APIs: Được cung cấp bởi các dịch vụ bên thứ ba như Google Maps, Facebook, cho phép sử dụng các chức năng của họ trong ứng dụng web của bạn.
Quan Hệ Giữa JavaScript và API:

JavaScript là ngôn ngữ lập trình cao cấp được tích hợp vào trình duyệt.
Browser APIs giúp thực hiện các chức năng một cách dễ dàng hơn thông qua JavaScript.
Third-party APIs mở rộng chức năng của ứng dụng web thông qua JavaScript.
Công Cụ JavaScript Liên Quan:

JavaScript Libraries: Như jQuery, Mootools, React, chứa các chức năng tùy chỉnh để tăng tốc việc viết mã.
JavaScript Frameworks: Như Angular và Ember, cung cấp các gói HTML, CSS, JavaScript để xây dựng toàn bộ ứng dụng web.
Chức Năng Của Các APIs:

Manipulating Documents: Sử dụng DOM API để thao tác với HTML và CSS.
Fetching Data from Server: Sử dụng Fetch API để cập nhật phần nhỏ của trang mà không cần tải lại toàn bộ trang.
Drawing and Manipulating Graphics: Sử dụng Canvas và WebGL APIs để vẽ và thao tác đồ họa.
Audio and Video APIs: HTMLMediaElement, Web Audio API cho xử lý đa phương tiện.
Device APIs: Sử dụng Geolocation API để truy cập thông tin vị trí của người dùng.
Client-side Storage APIs: Web Storage API, IndexedDB API để lưu trữ dữ liệu trên máy khách.
Third-party APIs Phổ Biến:

Bao gồm Google Maps API, Facebook API, YouTube API, Twilio API, Disqus API, và nhiều API khác từ các dịch vụ lớn.
Cơ Bản về Sử Dụng APIs trong JavaScript:

Điểm Bắt Đầu: Đảm bảo có kiến thức cơ bản về HTML, CSS, và JavaScript.
Các Điểm Nhất Quán: API thường có các điểm vào API như AudioContext, Document Object Model (DOM), hoặc các đối tượng giống như CanvasRenderingContext2D.
Bảo Mật Trong APIs:

Cơ Chế Bảo Mật Bổ Sung: Một số WebAPI yêu cầu kết nối an toàn qua HTTPS.
Quyền Người Dùng: Một số API như Notifications API yêu cầu sự cho phép của người dùng.
Chính Sách Tự Động Phát: Ngăn chặn tự động phát âm thanh trên các trang chưa được phép.
Sự Quan Trọng Của Sự Kiện:

Nhiều APIs sử dụng sự kiện để xử lý các thay đổi trạng thái, ví dụ như sự kiện click hoặc ended trong Web Audio API.
Tổng Kết:

Hiểu rõ về API là gì, cách chúng hoạt động, và cách sử dụng chúng trong mã JavaScript của bạn là cơ sở để tiếp tục khám phá và phát triển ứng dụng web của bạn.

1. API Là Gì và Chức Năng Chính của Chúng?
Yêu cầu định nghĩa và mô tả về API cũng như vai trò chính của chúng trong lập trình web.
2. Sự Khác Biệt Giữa Browser APIs và Third-party APIs?
Hỏi về sự khác biệt giữa API tích hợp sẵn trong trình duyệt và API của các dịch vụ bên thứ ba.
3. Tại Sao JavaScript Cần APIs?
Đặt câu hỏi về lý do JavaScript cần sử dụng APIs và làm thế nào chúng giúp mở rộng chức năng của ngôn ngữ này.
4. Sự Quan Hệ Giữa JavaScript, Libraries, và Frameworks?
Yêu cầu giải thích quan hệ giữa JavaScript, các thư viện (libraries), và các framework trong việc phát triển ứng dụng web.
5. Những API Phổ Biến Nào Có Thể Bạn Sẽ Gặp Trong Trình Duyệt?
Đặt câu hỏi về các API phổ biến tích hợp trong trình duyệt và mô tả chức năng của chúng.
6. Phương Tiện Lưu Trữ Của Client-Side APIs Là Gì và Chúng Dùng Để Làm Gì?
Hỏi về loại APIs sử dụng để lưu trữ dữ liệu ở phía máy khách và mục đích sử dụng của chúng.
7. Cung Cấp Một Ví Dụ Cụ Thể về Sự Kiện Trong API?
Yêu cầu một ví dụ cụ thể về cách sự kiện được sử dụng trong một API, ví dụ như Web Audio API.
8. Tại Sao Một Số WebAPI Yêu Cầu Kết Nối An Toàn HTTPS?
Hỏi về lí do mà một số API đòi hỏi kết nối an toàn thông qua HTTPS và ý nghĩa của điều này.
9. Làm Thế Nào API Hỗ Trợ Bảo Mật Trong Ứng Dụng Web?
Hỏi về các biện pháp bảo mật được tích hợp trong các API và tại sao chúng quan trọng.
10. Giải Thích Vai Trò Của Entry Point Trong Một API?
- Yêu cầu mô tả vai trò của entry point trong một API và ví dụ cụ thể về entry point trong Web Audio API hoặc DOM API.

# Các Node trong HTML
- Nút gốc (Root node)
- Nút con (Child node)
- Nút con cháu (Descendant node)
- Nút cha (Parent node)
- Nút anh chị em (Sibling nodes)

# Tham chiếu biến
```javascript
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";
```
- Document.getElementById()
- Document.getElementsByTagName()

```javascript
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);
const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

```
"Bạn có thể nghĩ rằng nó sẽ tạo một bản sao thứ hai của nó, nhưng điều này không phải là đúng — linkPara là một tham chiếu đến bản sao duy nhất của đoạn văn đó. Nếu bạn muốn tạo một bản sao và thêm nó vào cũng, bạn cần sử dụng Node.cloneNode() thay vào đó."
"Việc xóa một nút cũng khá đơn giản, ít nhất khi bạn có một tham chiếu đến nút cần xóa và nút cha của nó. Trong trường hợp hiện tại của chúng ta, chúng ta chỉ cần sử dụng Node.removeChild(), như sau:"

"Lưu ý cách viết kiểu JavaScript của các thuộc tính CSS được viết bằng chữ thường theo kiểu camelCase"
"replace(), toLowerCase(), và template literal.".
"khuyến nghị bạn sử dụng Fetch nếu có thể: đó là một API đơn giản"

```javascript
const request = new XMLHttpRequest();

try {
  request.open("GET", "products.json");

  request.responseType = "json";

  request.addEventListener("load", () => initialize(request.response));
  request.addEventListener("error", () => console.error("XHR error"));

  request.send();
} catch (error) {
  console.error(`XHR error ${request.status}`);
}
```

# API bên thứ 3

```javascript
<script
  src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"
  defer></script>
<link
  rel="stylesheet"
  href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css" />


const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// v.v.


const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});

```

# Bạn sẽ thấy một dòng tương tự như sau trong ví dụ API của Mapquest:

```javascript
=> L.mapquest.key = "YOUR-API-KEY-HERE";


layers: L.mapquest.tileLayer("map");
map.addControl(L.mapquest.control());
map.addControl(L.mapquest.control({ position: "bottomright" }));

L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "A",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);

```

```javascript
// Sử dụng fetch() để thực hiện yêu cầu đến API
fetch(url)
  .then((response) => response.json())
  .then((json) => displayResults(json))
  .catch((error) => console.error(`Error fetching data: ${error.message}`));


// Phân trang đơn giản
function nextPage(e) {
  pageNumber++;
  fetchResults(e);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
}

```
# Sử Dụng API Bên Thứ Ba để Nâng Cao Chức Năng Website
- "Để sử dụng API bên thứ ba, cần kết nối đến chúng từ máy chủ thứ ba và thường yêu cầu sử dụng khóa API cho mục đích xác thực và theo dõi."
- " tìm kiếm bài viết và hiển thị kết quả."
- "Thực hiện chức năng phân trang đơn giản"
- "Yêu cầu nhất định khi làm việc với các API như đọc tài liệu, lấy khóa API, và kết nối chúng đúng cách."
# Các câu hỏi.
- Trong bài viết, tại sao tác giả khuyên nên sử dụng Fetch API thay vì XMLHttpRequest?
- Nêu rõ sự khác biệt giữa browser APIs và third-party APIs?
- Tại sao third-party APIs thường yêu cầu việc sử dụng API keys?
- Trong ví dụ về Mapquest, làm thế nào để kết nối và sử dụng API từ server của bên thứ ba?
- Trình bày cách mở rộng ví dụ với Mapquest bằng cách thêm các tính năng mới?
- Giới thiệu về cách sử dụng NYTimes API và cung cấp bước tiếp theo để tương tác với nó?


const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

# Lấy Context của Canvas và Thiết Lập Cuối Cùng
Chúng ta cần thực hiện một công việc cuối cùng trước khi coi mẫu canvas của chúng ta là hoàn chỉnh. Để vẽ lên canvas, chúng ta cần có một tham chiếu đặc biệt đến khu vực vẽ được gọi là context.

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "rgb(0 255 0)";
ctx.fillRect(75, 75, 100, 100);

- vì vậy bạn phải suy nghĩ cẩn thận về thứ tự bạn vẽ đồ họa.
- ví dụ như sử dụng rgb(). "Kênh alpha" xác định mức độ trong suốt của màu.

ctx.fillStyle = "rgb(255 0 255 / 75%)";
ctx.fillRect(25, 100, 175, 50);

# Vẽ Đường Đi
- beginPath() — bắt đầu vẽ một đường dẫn tại điểm mà bút đang ở trên canvas. Trên một canvas mới, bút bắt đầu từ điểm (0, 0).
- moveTo() — di chuyển bút đến một điểm khác trên canvas, mà không ghi lại hoặc vẽ theo đường dẫn; bút "nhảy" đến vị trí mới.
- fill() — vẽ một hình đã đặc bằng cách điền vào đường dẫn bạn đã vẽ cho đến nay.
- stroke() — vẽ một hình có đường viền bằng cách vẽ một nét dọc theo đường dẫn bạn đã vẽ cho đến nay.

# Vẽ Đường Thẳng
-  Rất hữu ích vì bất cứ khi nào bạn cần cung cấp một giá trị góc trong JavaScript, nó gần như luôn là radian
```javascript
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);


```
# Bây giờ thêm các dòng sau vào cuối mã của bạn:
```javascript
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

```
# Theo cơ bản, chúng tôi đang vẽ tam giác hướng xuống. Các góc trong một tam giác đều luôn là 60 độ; để tính chiều cao, chúng ta có thể chia nó thành hai tam giác vuông, mỗi cái có góc 90 độ, 60 độ và 30 độ
- Cạnh dài nhất được gọi là đối diện
- Cạnh gần góc 60 độ được gọi là kề — chúng tôi biết là 50 pixel, vì nó là một nửa của đường chúng tôi vừa vẽ.
- Cạnh đối diện với góc 60 độ được gọi là đối diện, đó chính là chiều cao của tam giác chúng tôi muốn tính toán.




```javascript
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();
```
# Mẫu ở đây rất tương tự, nhưng có hai sự khác biệt:
Chúng tôi đã đặt tham số cuối cùng của arc() thành true, có nghĩa là vòng tròn được vẽ ngược chiều kim đồng hồ, điều này có nghĩa là mặc dù vòng tròn được chỉ định bắt đầu từ -45 độ và kết thúc ở 45 độ, nhưng chúng tôi vẽ vòng tròn xung quanh 270 độ không phải trong phần này. Nếu bạn thay đổi true thành false và sau đó chạy lại mã, chỉ có phần cắt 90 độ của hình tròn sẽ được vẽ.
Trước khi gọi fill(), chúng tôi vẽ một đường đến tâm của hình tròn. Điều này có nghĩa là chúng tôi có được một kiểu cắt đẹp giống như Pac-Man. Nếu bạn xóa dòng này (thử nó!), sau đó chạy lại mã, bạn sẽ chỉ nhận được một phần của hình tròn bị chặt giữa điểm bắt đầu và kết thúc của vòng cung. Điều này minh họa một điểm quan trọng khác của canvas — nếu bạn cố gắng điền vào một đường dẫn chưa hoàn chỉnh (tức là một đường dẫn không được đóng), trình duyệt sẽ điền vào một đường thẳng giữa điểm bắt đầu và điểm kết thúc và sau đó điền vào nó. Điều này kỳ diệu thể hiện một đường cong cắt ngang mà bạn không phải làm gì cả.

# Nội dung canvas không thể tiếp cận được bởi các công cụ đọc màn hình. Văn bản được vẽ lên canvas không có sẵn trong DOM, nhưng phải được làm cho có sẵn để có thể tiếp cận.

```javascript
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Chữ trên Canvas", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Chữ trên Canvas", 50, 150);

canvas.setAttribute("aria-label", "Chữ trên Canvas");


image.addEventListener("load", () => ctx.drawImage(image, 20, 20));

```















