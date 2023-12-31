import { DataSource, Repository } from "typeorm";
import { UserEntity, UserService } from "./ORMReponsitoryInjection";

export const mockUsers: UserEntity[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    codeGame: "JD123",
    email: "john.doe@example.com",
    password: "password123",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    codeGame: "JS456",
    email: "jane.smith@example.com",
    password: "password456",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Thêm các đối tượng User khác nếu cần
];

// Sử dụng một DataSource chung cho toàn bộ test suite
const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3310,
  username: "root",
  password: "secret",
  database: "reponsitory_db",
  synchronize: true,
  logging: true,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});

beforeAll(async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source đã được khởi tạo!");
  } catch (err) {
    console.error("Lỗi trong quá trình khởi tạo Data Source", err);
  }
});

describe("Dịch vụ người dùng", () => {
  let dichVuNguoiDung: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    // Sử dụng cùng một kết nối cho UserService
    userRepository = AppDataSource.manager.getRepository(UserEntity);
    dichVuNguoiDung = new UserService(userRepository);
  });

  test("getAllUsers nên trả về một mảng các người dùng", async () => {
    // Sắp xếp
    // Giả mạo phương thức find của userRepository
    jest.spyOn(userRepository, 'find').mockResolvedValue(mockUsers);

    // Hành động
    const ketQua = await dichVuNguoiDung.getAllUsers();
    // Kiểm tra
    expect(ketQua).toEqual(mockUsers);
  });

  test("findByName nên trả về một người dùng theo tên", async () => {
    // Sắp xếp
    const tenDauTien = "John";
    // Giả mạo phương thức findOne của userRepository
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(mockUsers[0]);

    // Hành động
    const ketQua = await dichVuNguoiDung.findByName(tenDauTien);

    // Kiểm tra
    expect(ketQua).toEqual(mockUsers[0]);
  });

  // Thêm các tests tương tự cho các phương thức khác (createUser, updateUser, deleteUser)
});

describe("Dịch vụ người dùng - Chỉ", () => {
  test("findByName nên trả về một người dùng theo tên ở đây", async () => {
    // Tương tự như test trên, thêm các kiểm tra phù hợp
  });
});
