# ESM
# Relation : bạn nên sử dụng loại trình bao bọc Quan hệ trong các thuộc tính quan hệ để tránh các vấn đề phụ thuộc vòng tròn
# metadata : Tên mối quan hệ
# find-options: 
# QueryBuilder : Truy vấn bất kì, phức tạp
# Cascade: chúng ta được lưu mỗi khi đối tượng khác được lưu, Sử dụng cascade giúp chúng ta không cần phải lưu riêng lẻ cho các ảnh và đối tượng siêu dữ liệu bây giờ  lưu một ảnh cũng lưu siêu dữ liệu, Nếu bạn thiết lập phía metadata, siêu dữ liệu sẽ không được lưu tự động.
# JoinColumn: Sẽ tự động lấy tên nếu không chỉ định. Nghĩa là nếu như posts mà thêm @JoinColumn thì nó sẽ lấy tên Posts làm đối tượng relationship.
# JoinTable: Sử dụng để tạo ra 1 bảng trong mối quan hệ nhiều nhiều.
# ManyToMany: Sử dụng trong mối quan hệ Nhiều nhiều.

