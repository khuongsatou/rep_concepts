import { DataSource, EntityManager, Repository } from "typeorm";

import { BaseService } from "./service/BaseServices";
import { Address } from "./entity/Address";
import { User } from "./entity/User";
import { Post } from "./entity/Post";
import { Profile } from "./entity/Profile";
import { Comment } from "./entity/Comment";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3310,
  username: "root",
  password: "secret",
  database: "reponsitory_db",
  synchronize: true,
  logging: true,
  entities: [User, Profile, Address, Post, Comment],
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



export const createMockUser = (overrides?: Partial<User>): User => {
  const defaultUser: any = {
    id: 1,
    username: 'mockUser',
    posts: createMockPosts(), // Cần triển khai createMockPosts nếu có mối quan hệ
    profile: createMockProfile() as any, // Cần triển khai createMockProfile nếu có mối quan hệ
    ...overrides,
  };

  return defaultUser;
};

const createMockPosts = () => {
  // Triển khai logic tạo mock posts nếu có mối quan hệ
  return [];
};

const createMockProfile = () => {
  // Triển khai logic tạo mock profile nếu có mối quan hệ
  return {
    // properties of Profile
  };
};
  

describe("User CRUD Tests", () => {
  let entityManager: EntityManager;
  let userService: BaseService<User>;
  beforeEach(async () => {
    // Sử dụng cùng một kết nối cho UserService
    entityManager = AppDataSource.manager;
    userService = new BaseService<User>(User,entityManager);
  });

  test("getAllUsers nên trả về một mảng các người dùng", async () => {

    // Your actual test logic
    // const foundUsers = await userService.findAll();
    // Mock phương thức findAll của userService: Này nó giả mạo xong thì nó overriding luôn nên phải tìm từ database trước rồi mới giả mạo value
    jest.spyOn(userService, 'findAll').mockResolvedValue([createMockUser()]);
    const foundUsers = await userService.findAll();


    // Assert the result
    expect(foundUsers).toHaveLength(1);
    expect(foundUsers[0]).toEqual(createMockUser());
  });

  test("findUserById nên trả về một người dùng theo ID", async () => {
    const userId = 1;
    const mockUser = createMockUser({ id: userId });

    // Mock phương thức findOne của userService
    jest.spyOn(userService, 'findOne').mockResolvedValue(mockUser);

    // Your actual test logic
    const foundUser = await userService.findOne(userId);

    // Assert the result
    expect(foundUser).toEqual(mockUser);
  });

  test("createUser nên tạo một người dùng mới", async () => {
    const newUser = createMockUser({ id: undefined }); // Set id to undefined to simulate a new user

    // Mock phương thức create và save của userService
    jest.spyOn(userService, 'create').mockReturnValue(newUser);
    jest.spyOn(userService, 'save').mockResolvedValue(newUser);

    // Your actual test logic
    const createdUser = await userService.create(newUser);

    // Assert the result
    expect(createdUser).toEqual(newUser);
  });

  test("updateUser nên cập nhật thông tin của người dùng", async () => {
    const userId = 1;
    const updatedUser = createMockUser({ id: userId, username: 'updatedUsername' });

    // Mock phương thức findOne và save của userService
    jest.spyOn(userService, 'findOne').mockResolvedValue(createMockUser({ id: userId }));
    jest.spyOn(userService, 'save').mockResolvedValue(updatedUser);
    const user = new User();
    user.id = userId;
    user.username = 'updatedUsername';
    // Your actual test logic
    const result = await userService.save(user);

    // Assert the result
    expect(result).toEqual(updatedUser);
  });

  test("deleteUser nên xóa một người dùng", async () => {
    const userId = 1;

    // Mock phương thức remove của userService
    jest.spyOn(userService, 'remove').mockResolvedValue(undefined);

    // Your actual test logic
    const result = await userService.remove(userId);

    // Assert the result
    expect(result).toBeUndefined();
  });
});
