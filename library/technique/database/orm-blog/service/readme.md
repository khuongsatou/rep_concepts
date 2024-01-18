Service:
Service thường được sử dụng để tổ chức logic kinh doanh, xử lý nghiệp vụ, và có thể gọi các phương thức từ Repository.
Các phương thức của Service thường chứa logic nghiệp vụ phức tạp hơn, không chỉ là truy vấn cơ sở dữ liệu mà còn xử lý dữ liệu và thực hiện các tính toán phức tạp.


# Usage
async function getUserDataAPI(): Promise<any> {
  // Khởi tạo EntityManager (đã giả sử bạn đã có một instance của nó)
  const entityManager = AppDataSource.manager;

  // Tạo BaseService cho entity User
  const userService = new BaseService(User, entityManager);

  // Sử dụng BaseService để thực hiện CRUD operations
  const userId = 1;

  // findOne
  const user = await userService.findOne(userId);
  console.log("Found User:", user);
  const options = {
    where: {
      /* your conditions */
    },
    order: {
      /* your sorting criteria */
    },
    take: 10, // số lượng phần tử trả về
    skip: 0, // số lượng phần tử bị bỏ qua
  };

  // findAll
  const allUsers = await userService.findAll(options);
  console.log("All Users:", allUsers);
  const createUser = new User();
  createUser.id = 1;
  createUser.username = "New User";
  // create
  const newUser = userService.create(createUser);
  console.log("New User:", newUser);

  // save
  const savedUser = await userService.save(newUser);
  console.log("Saved User:", savedUser);

  // remove
  await userService.remove(userId);
  console.log("User Removed");

  // Note: Bạn có thể thực hiện các thao tác khác tương tự cho posts và profile nếu cần.
}