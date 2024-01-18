# Sơ đồ ERD - Mạng xã hội stream video giống TikTok

## Bảng Người Dùng (User)

| Trường    | Kiểu dữ liệu | Mô tả                 |
| --------- | ------------ | ---------------------- |
| UserID    | Primary Key   | ID người dùng         |
| UserName  | Varchar(255)  | Tên người dùng        |
| Email     | Varchar(255)  | Địa chỉ email         |
| Password  | Varchar(255)  | Mật khẩu              |
| Avatar    | Varchar(255)  | Đường dẫn hình đại diện|

## Bảng Video

| Trường    | Kiểu dữ liệu | Mô tả                 |
| --------- | ------------ | ---------------------- |
| VideoID   | Primary Key   | ID video              |
| UserID    | Foreign Key   | ID người tạo video    |
| VideoPath | Varchar(255)  | Đường dẫn video       |
| Duration  | Int          | Thời lượng video (giây)|

## Bảng Lượt Xem (View)

| Trường    | Kiểu dữ liệu | Mô tả                 |
| --------- | ------------ | ---------------------- |
| ViewID    | Primary Key   | ID lượt xem           |
| VideoID   | Foreign Key   | ID video              |
| UserID    | Foreign Key   | ID người xem video    |

## Bảng Thích (Like)

| Trường    | Kiểu dữ liệu | Mô tả                 |
| --------- | ------------ | ---------------------- |
| LikeID    | Primary Key   | ID lượt thích        |
| VideoID   | Foreign Key   | ID video              |
| UserID    | Foreign Key   | ID người thích video  |

## Bảng Bình Luận (Comment)

| Trường      | Kiểu dữ liệu | Mô tả                      |
| ----------- | ------------ | --------------------------- |
| CommentID   | Primary Key   | ID bình luận               |
| VideoID     | Foreign Key   | ID video                   |
| UserID      | Foreign Key   | ID người bình luận         |
| Content     | Text         | Nội dung bình luận         |
| CommentTime | DateTime     | Thời điểm bình luận        |

---

**Mối quan hệ giữa các bảng:**

- Người Dùng và Video: One-to-Many (1 người dùng có thể tạo nhiều video, nhưng mỗi video chỉ thuộc về một người dùng).

- Video và Lượt Xem: One-to-Many (1 video có thể có nhiều lượt xem, nhưng mỗi lượt xem chỉ thuộc về một video cụ thể).

- Video và Thích: One-to-Many (1 video có thể có nhiều lượt thích, nhưng mỗi lượt thích chỉ thuộc về một video cụ thể).

- Người Dùng và Thích: One-to-Many (1 người dùng có thể thích nhiều video, nhưng mỗi lượt thích chỉ thuộc về một người dùng).

- Người Dùng và Bình Luận: One-to-Many (1 người dùng có thể bình luận nhiều lần, nhưng mỗi bình luận chỉ thuộc về một người dùng).

- Video và Bình Luận: One-to-Many (1 video có thể có nhiều bình luận, nhưng mỗi bình luận chỉ thuộc về một video cụ thể).
