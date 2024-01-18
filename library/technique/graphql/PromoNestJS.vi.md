Khái Niệm và Tính Năng Cơ Bản trong GraphQL
Truy vấn (Queries)
Đại diện cho loại truy vấn trong GraphQL.
Thay Đổi (Mutations)
Đại diện cho loại thay đổi trong GraphQL.
Nhiều Trường Trong Thay Đổi (Multiple Fields in Mutations)
Cho phép sử dụng nhiều trường trong các thay đổi và bạn có thể sử dụng các bí danh (alias) để phân biệt chúng.
Fragment
Fragment: Đơn vị tái sử dụng của các trường truy vấn.
Inline Fragment: Cho phép bao gồm các trường khác nhau tùy thuộc vào loại đối tượng.
Trường Meta (Meta Fields)
__typename: Một trường meta đặc biệt trả về loại của đối tượng hiện tại.
Hướng Dẫn (Directives)
@include(if: Boolean): Bao gồm điều kiện một trường trong kết quả dựa trên giá trị Boolean cung cấp.
@skip(if: Boolean): Tùy thuộc vào giá trị Boolean cung cấp, có thể tùy chọn bỏ qua một trường trong kết quả.
Loại Biến Đổi (Type Modifiers)
!: Chỉ định một loại không thể là null.
[]: Chỉ định một loại danh sách.
[String!]: Chỉ định một danh sách không thể là null của chuỗi.
[String]!: Chỉ định một danh sách của chuỗi không thể là null.
Giao Diện (Interfaces)
Được sử dụng để xác định một bộ trường chung có thể được thực hiện bởi nhiều loại.
Loại Hợp (Union Types)
Đại diện cho một loại có thể là một trong một số loại.
Đầu Vào (Input)
Xác định các loại đầu vào phức tạp cho các đối số của thay đổi.
Kiểm Tra (Validation)
Tham chiếu đến quá trình kiểm tra đầu vào so với schema được xác định.
Thực Hiện (Execution)
Tham chiếu đến quá trình thực hiện một truy vấn GraphQL trên schema.
Trường Gốc và Resolver (Root Fields & Resolvers)
Trong GraphQL, các trường gốc của một truy vấn hoặc thay đổi có các hàm giải quyết liên quan quyết định cách lấy hoặc thay đổi dữ liệu.
Resolver Asynchronous (Asynchronous Resolvers)
Các giải quyết viên thực hiện các hoạt động bất đồng bộ.
Trivial: Các giải quyết viên không thực hiện logic phức tạp.
Scalar Coercion: Xử lý việc chuyển đổi giá trị cơ bản.
List Resolvers: Giải quyết danh sách các mục.
Sản Xuất Kết Quả (Producing the Result): Bước cuối cùng của việc sản xuất kết quả.
Tìm Hiểu Tự Động (Introspection)
Khả năng của một máy chủ GraphQL cung cấp thông tin về schema của nó.
Liên Minh (Federation)
Cho phép xây dựng một schema GraphQL phân tán.
@key(fields: "id"): Xác định một khóa để xác định duy nhất một thực thể.
extend type Query: Mở rộng loại truy vấn.
@ResolveReference: Chỉ định một phương thức giải quyết để giải quyết các tham chiếu.
@ObjectType(): Xác định một loại đối tượng.
@Directive('@extends'): Đánh dấu một loại là mở rộng của một loại khác.
@Directive('@key(fields: "id")'): Đánh dấu một loại với một hướng dẫn để xác định các khóa.
@Directive('@external'): Đánh dấu một trường là ngoại vi.
orphanedTypes: [User]: Chỉ định các loại không được định nghĩa trong dịch vụ hiện tại.
@apollo/gateway | @apollo/subgraph | @nestjs/mercurius: Các phương pháp khác nhau để triển khai phân liên minh.
cors: true: Kích hoạt Chia Sẻ Tài Nguyên Quốc Tế qua miền.
gateway: { services: [...] }: Cấu hình các dịch vụ cho Cổng Apollo.
Phân Liên Minh 2 (Federation 2)
autoSchemaFile: { federation: 2 }: Cấu hình tệp schema cho Federation 2.
NestJS v11
Các thư viện và gói dành cho việc làm việc với GraphQL trong NestJS v11.
@apollo/server | @as-integrations/fastify | @mercuriusjs/gateway | @mercuriusjs/federation: Thư viện được sử dụng cho mục đích cụ thể.
@nestjs/graphql: Module chính của NestJS cho GraphQL.
import { Plugin } from '@nestjs/apollo': Dòng lệnh nhập cho các plugin Apollo.
IntrospectAndCompose: Một phần của cấu hình cho Cổng Apollo.