REST, viết tắt của "Representational State Transfer," là một kiến trúc phần mềm được thiết kế để xây dựng các dịch vụ web hiệu quả, linh hoạt và dễ bảo trì. Kiến trúc REST được đặc trưng bởi một số nguyên tắc và quy tắc thiết kế, giúp các hệ thống tương tác thông qua giao thức HTTP.

Dưới đây là một số đặc điểm chính của kiến trúc REST:

Tài nguyên (Resources): Mọi thứ trong hệ thống REST đều là tài nguyên, chẳng hạn như các đối tượng, dịch vụ, hoặc thông tin. Mỗi tài nguyên có một định danh duy nhất (URI).

Biểu diễn (Representation): Tài nguyên có thể được biểu diễn dưới nhiều dạng khác nhau (ví dụ: JSON, XML). Khi người dùng yêu cầu một tài nguyên, họ sẽ nhận được biểu diễn của tài nguyên đó.

Trạng thái đại diện (Stateless): Mọi yêu cầu từ client đều chứa đủ thông tin để hiểu và xử lý nó. Server không lưu giữ trạng thái của client giữa các yêu cầu.

Giao thức (Uniform Interface): Giao tiếp giữa client và server được thực hiện thông qua một giao thức đồng nhất, thường là HTTP. Giao thức này có thể được sử dụng để thực hiện các hoạt động cơ bản như GET (lấy thông tin), POST (tạo mới), PUT (cập nhật), DELETE (xóa).

Phân tầng (Layered System): Kiến trúc REST thường được thiết kế theo mô hình phân tầng, nghĩa là có thể thêm các lớp trung gian (intermediaries) giữa client và server để cải thiện khả năng mở rộ, quản lý, và bảo mật.

Kiến trúc REST giúp tạo ra các dịch vụ web mà có thể mở rộ, linh hoạt, và dễ dàng tích hợp. REST thường được sử dụng trong các ứng dụng web, đặc biệt là trong việc xây dựng các API (Application Programming Interface) để tương tác giữa các hệ thống khác nhau.