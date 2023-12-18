# Các vấn đề
- Config typescript để chạy cho rep
- Hiện tại sẽ là các kiến trúc cơ bản của javascript
- Sau khi nó lớn lên sẽ bắt đầu tách ra từng kho nhỏ
- Kèm thêm version của kiến trúc đó
# ___
- Khi quá lớn.: Ơi ông giờ tui thử xây cái kho theo cách ông nói: cho tui hỏi thêm với cái kho của ông lớn quá thì khi đó ông chia nó ra thành nhiều git con hay sao, hay ông có cái kĩ thuật nào khác
- 1. do dự án quá lớn, khi build sẽ rất chậm, dễ có lỗi phát sinh ở các chức năng củ
- 2. cấu trúc file quá phức tạp, việc tìm kiếm và fix bug khá là lâu
- 3. không thể tích được thư viện version mới vì sung đôt version củ

# giải pháp của tui cho các vấn đề trên:
phần trên chỉ mới backend thôi ông @@
còn front end thì tôi chọn reactjs
mõi một cụm giao diện ông có thể tách nó thành nhiều github
khi nối nó lại thì ông có thể dùng git submodule
khi code thì nó cũng giống như là 1 project thôi, tức là nó vẫn bị phụ thuộc với sường chính
ông có cân nhắc dùng đến microfrontend để khắc phục nó
nhưng mà t nghĩ ông nên đi từng bước thôi không cần trong 1 lúc dùng hết tất cả giải pháp tui gợi ý @@
sơ sơ là nhiêu đó á ông , còn nhiều thứ phát sinh khi quản lý dự án lấm@@
