# Tích hợp chức năng login trên tiktok
# Tổng quan
- Tạo tổ chức
- Phân quyền
- Xóa tổ chức
- Mời thành viên

# Đăng ký ứng dụng của bạn
# Cấu hình cài đặt cho ứng dụng của bạn
# Bạn có thể thực hiện ba thao tác sau trên bảng nội dung:
- Chuyển ứng dụng
- Xóa ứng dụng
- Gửi đánh giá
- Lưu các thay đổi

# Chi tiết ứng dụng
- ID ứng dụng (App ID)
- Khóa người dùng (Client key) và Mã bí mật (Client secret)
- Trạng thái (Status)

# Quản lý ứng dụng
Bạn có thể thực hiện ba thao tác sau trên bảng nội dung:
- Chuyển ứng dụng
- Xóa ứng dụng
- Gửi đánh giá
- Lưu các thay đổi

# Cấu hình
- Category
- Description
- Terms of Service URL and Privacy Policy URL

# Nền tảng
- Web và Desktop: Yêu cầu URL của trang web chính thức của bạn.
- Android: Yêu cầu tên gói ứng dụng, chữ ký ứng dụng và chứng chỉ ký. Những thông tin này được sử dụng để xác minh danh tính ứng dụng của bạn khi gọi các API của TikTok. Cung cấp - URL Play Store của bạn để chúng tôi có thể hiểu rõ hơn về ứng dụng của bạn.
- iOS: Yêu cầu URL App Store và Bundle ID. Những thông tin này được sử dụng để xác minh danh tính ứng dụng của bạn khi gọi các API của TikTok. Cung cấp URL App Store của bạn để chúng tôi có thể hiểu rõ hơn về ứng dụng của bạn.


# Login Kit Demo
- Kiểm tra các cài đặt cụ thể của sản phẩm cho Login Kit.

- Web, iOS, Android và Desktop đều yêu cầu một Redirect URI để trả lại mã ủy quyền cho ứng dụng của bạn.
- Redirect URI của Android phải là một App Link hoặc Deep Link.
- Redirect URI của iOS phải là một Universal Link và ứng dụng của bạn phải có khả năng Associated Domain.

# Gửi đánh giá
- Gửi tiktok kiểm duyệt

# Trạng thái Đánh giá Ứng dụng
- Trạng thái đánh giá ứng dụng của bạn được hiển thị dưới phần Chi tiết ứng dụng.

- Staging: Ứng dụng của bạn chưa được gửi đánh giá.
- Under review: Phiên bản hiện tại của ứng dụng của bạn đã được gửi đánh giá và đang chờ quyết định. Không thể thực hiện thêm thay đổi nào ở giai đoạn này.
- Changes not approved: Sau khi xem xét thay đổi của bạn, chúng tôi xác định rằng nó không đáp ứng tiêu chí của chúng tôi. Chi tiết từ chối sẽ được hiển thị trên trang ứng dụng của bạn với các hành động đề xuất. Hoàn thành các hành động được đề xuất và gửi lại ứng dụng của bạn để xem xét.
- Live in production: Phiên bản hiện tại của ứng dụng đã được chấp nhận và sẵn sàng tích hợp. Sau khi ứng dụng của bạn được chấp nhận, mọi thay đổi sau này phải được gửi đánh giá và chấp nhận để xuất hiện trong bản phát hành trực tiếp.

# Quy trình xem xét ứng dụng mất bao lâu?
- vài ngày

# Yêu cầu tối thiểu để nộp ứng dụng của tôi được chấp nhận là gì?
Để ứng dụng của bạn được chấp nhận, nó phải có các yếu tố sau:
1. Trang web chính thức hợp lệ chứa thông tin về trang web và dịch vụ của bạn (không áp dụng nếu bạn chỉ cung cấp ứng dụng di động).
2. Chính sách Bảo mật và Điều khoản Dịch vụ hợp lệ.
3. Tuân thủ đúng Đường dẫn Thương hiệu và Sử dụng của TikTok.
# Yêu cầu cụ thể cho từng nền tảng:
iOS:
- Ứng dụng của bạn phải được xuất bản trên Apple App Store.
Bạn phải cấu hình iOS Bundle ID trong phần cấu hình ứng dụng iOS.
Android:
- Ứng dụng của bạn phải được xuất bản trên Google Play Store.
- Bạn phải cấu hình chữ ký ứng dụng Android và tên gói trong phần cấu hình ứng dụng Android.
Ứng dụng Web:
- Bạn phải cung cấp một miền chuyển hướng hợp lệ trong phần cấu hình ứng dụng web.

# Ứng dụng di động của tôi có cần phải hoạt động trên một cửa hàng ứng dụng không?
- Có

# Quy trình xem xét ứng dụng - Yêu cầu nộp đơn
- Hãy đảm bảo rằng ứng dụng của bạn hoạt động trong quá trình xem xét của chúng tôi. Bạn phải cung cấp tài khoản demo và khả năng cho những người xem xét của chúng tôi miễn phí, nếu được yêu cầu.
- Phiên bản Beta/Phát triển, ứng dụng chưa hoàn chỉnh và các phiên bản thử nghiệm không được khuyến khích và thường sẽ không được chấp nhận tích hợp với TikTok để bảo vệ trải nghiệm người dùng.
- Nếu bạn đang ra mắt một ứng dụng mới và muốn tích hợp với TikTok từ đầu, bạn phải trải qua một cuộc kiểm tra và cung cấp thông tin hỗ trợ bổ sung như lý do và giao diện mô phỏng UX của bạn. Chúng tôi giữ quyền từ chối hoặc chấp nhận những ứng dụng chưa xuất bản như vậy theo quyền độc quyền của chúng tôi dựa trên uy tín của ứng dụng, lợi ích cho người dùng TikTok và các yếu tố khác. Để bắt đầu quy trình này, hãy đăng ký để kiểm tra tích hợp cho các ứng dụng chưa xuất bản.
- Hãy tuân thủ theo hướng dẫn của chúng tôi trong suốt thời gian tích hợp của bạn với TikTok. Bất kỳ vi phạm nào của hướng dẫn của chúng tôi được phát hiện thông qua việc kiểm tra, khiếu nại từ người dùng hoặc các phương tiện khác đều có thể dẫn đến thu hồi ngay lập tức tích hợp của bạn và cấm vĩnh viễn tất cả các tích hợp trong tương lai của tài khoản và doanh nghiệp của bạn.

# Dưới đây là một số hành vi mẫu để duy trì sự tin cậy:
Không bao giờ loại bỏ cơ chế bản quyền của người tạo (như watermarks) mà không có sự đồng thuận.
Bảo vệ danh tính và quyền lợi của người dùng.
Nếu bạn có quyền truy cập vào Thông tin nhận diện cá nhân của người dùng (PII), không bao giờ chia sẻ nó với bất kỳ ai mà không có sự đồng thuận của họ.
Tuân theo tất cả các luật về chia sẻ dữ liệu và quyền riêng tư để xây dựng sự tin cậy với người dùng và chính phủ.
Đặt mô tả, tiêu đề và biểu tượng chính xác cho ứng dụng của bạn.
Tiết lộ Điều khoản Dịch vụ và Chính sách Riêng tư của ứng dụng của bạn.
Cung cấp tất cả các dữ liệu cần thiết khi cấu hình tích hợp ứng dụng và hồ sơ nhà phát triển của bạn.
Lưu ý: Cung cấp dữ liệu giả mạo hoặc không đầy đủ có thể dẫn đến việc từ chối ứng dụng của bạn và trì hoãn tính năng tích hợp của bạn.

# Yêu cầu Bảo dưỡng Tích hợp TikTok
Bạn phải duy trì liên lạc tích cực với TikTok khi được yêu cầu. Việc không phản hồi kịp thời có thể dẫn đến chấm dứt tính năng tích hợp của bạn.
Kiểm tra bộ lọc email của bạn và đảm bảo rằng các thông điệp của chúng tôi không bị lạc trong thư rác hoặc thùng thư rác.
Đừng lo lắng, chúng tôi thường không mong bạn phản hồi qua đêm. Chỉ cần đừng phớt lờ chúng tôi quá lâu.
Bất kỳ giao tiếp nhạy cảm liên quan đến các chủ đề bao gồm nhưng không giới hạn đến bảo mật, quyền riêng tư, tuân thủ và lừa dối người dùng phải được giải quyết ngay lập tức về những vấn đề này.
TikTok giữ quyền hủy bỏ các API và SDK. Bạn phải ưu tiên và cập nhật tích hợp của mình khi có các tính năng mới được cung cấp bởi TikTok for Developers.
Bạn sẽ được thông báo khi có thay đổi không tương thích với các phiên bản trước của các API của chúng tôi. Bạn phải ngăn chặn bất kỳ giao diện người dùng nào bị hỏng vì tích hợp không tương thích bằng cách chuyển đổi ngay lập tức sang các API mới.
Đối với mọi lo ngại liên quan đến bảo mật, quyền riêng tư và tuân thủ, bạn phải ngay lập tức nhận thức thông báo từ TikTok và cập nhật tích hợp của mình.
Tôn trọng giới hạn API của chúng tôi. Nói chung, đừng sử dụng tích hợp của bạn để tấn công chúng tôi, người dùng của chúng tôi hoặc bất kỳ ai khác bằng các cuộc tấn công từ chối dịch vụ, thư rác, v.v. Đó là một cách chắc chắn để bị cấm mãi mãi và đưa bạn vào tình trạng khó khăn hơn bạn hoặc chúng tôi cần thiết.

# 
