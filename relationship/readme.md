### Ghi chú các mối quan hệ
- Từ dự án liệt kê ra các mối quan hệ

### Nhận biết Mối Quan Hệ "Nhiều - Nhiều"

1. **Mối quan hệ không có hướng:**
   - Mối quan hệ giữa hai thực thể không có hướng, nghĩa là nó có thể được mô tả từ cả hai phía.

     Ví dụ:
     ```plaintext
     [Học viên] --- Đăng ký --- [Khóa học]
     ```
     Hoặc
     ```plaintext
     [Khóa học] --- Đăng ký --- [Học viên]
     ```

2. **Sử dụng bảng trung gian:**
   - Khi bạn cần một bảng trung gian để thể hiện mối quan hệ, đặc biệt là khi có thông tin bổ sung cần lưu trữ về mối quan hệ.

     Ví dụ:
     ```plaintext
     [Học viên] --- Đăng ký --- [Khóa học]
     [DangKyKhoaHoc] --- Thông tin đăng ký --- [Học viên, Khóa học]
     ```

3. **Sự tồn tại của thuộc tính bổ sung trong bảng trung gian:**
   - Khi bảng trung gian chứa các thuộc tính ngoài các khóa ngoại, nó thường là dấu hiệu của mối quan hệ phức tạp hơn giữa các thực thể.

     Ví dụ:
     ```plaintext
     [Người chơi] --- Ghi bàn --- [Trận đấu]
     [GhiBan] --- Số bàn thắng --- [Người chơi, Trận đấu]
     ```

4. **Số lượng lớn kết nối:**
   - Nếu mỗi thực thể có thể kết nối với nhiều thực thể khác và ngược lại, đặc biệt là qua một bảng trung gian, đó có thể là mối quan hệ "Nhiều - Nhiều".

     Ví dụ:
     ```plaintext
     [Khách hàng] --- Đơn hàng --- [Sản phẩm]
     [DonHang] --- Chi tiết đơn hàng --- [Khách hàng, Sản phẩm]
     ```

Khi nhìn vào cấu trúc cơ sở dữ liệu và thấy xuất hiện các dấu hiệu trên, bạn có thể kết luận rằng có một mối quan hệ "Nhiều - Nhiều" giữa các thực thể đó.

