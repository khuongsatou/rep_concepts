// Lưu ý về new Date
- Month sẽ là 0->11 days


// Tất cả các trường hợp.
Date countdown
Date Lưu vào database có kèm thêm múi giờ
Date Tính chênh lệch 2 giờ
Date Tách time ra thành nhiều phần
Date Timezone chuyển timezone local và server.

// Về lịch trình
Calendar
- Năm nhuận và không nhuận
- Lưu ý tháng 2
- Chọn 1 list trong ngày





// Về Timezone
// Chuyển đổi thời gian từ múi giờ của người dùng sang UTC
// Quan trọng trong việc xử lý timezone
// Rất quan trọng để tính toán trên server
// Còn khi tính toán thì nên tính toán trên UTC
// Khi tính toán trên server thì nên config server về timezone UTC+0
// Khi lưu vào database thì nên config database về timezone UTC+0
// Con khi nếu muốn chuẩn thì nên dùng moment vì trên javascript nó lấy theo timezone trình duyêt
