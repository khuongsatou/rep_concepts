import "reflect-metadata";
import express, { Request, Response } from "express";
import { DataSource } from "typeorm";
import { Address } from "./entity/Address";
import { User } from "./entity/User";
import { Post } from "./entity/Post";
import { Profile } from "./entity/Profile";
import { Comment } from "./entity/Comment";
import { Transformer, UserDTO } from "./dto/dto";
import { BaseService } from "./service/BaseServices";

const app = express();
const port = 3000;

app.use(express.json());

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

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    async function run() {
      // Khởi tạo EntityManager (đã giả sử bạn đã có một instance của nó)
      const entityManager = AppDataSource.manager;

      // Tạo BaseService cho entity User
      const userService = new BaseService(User, entityManager);
      // Sử dụng hàm để lấy dữ liệu và in ra kết quả
      // await getUserData()
      //   .then((result) => console.log(result))
      //   .catch((error) => console.error(error));
      // getUserDataAPI();
      // API endpoint: Lấy thông tin của một User
      // API endpoint: Lấy thông tin của một User
      app.get("/users/:id", async (req: Request, res: Response) => {
        const userId = parseInt(req.params.id, 10);

        try {
          const user = await userService.findOne(userId);
          res.json(user);
        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      });

      // API endpoint: Lấy tất cả Users
      app.get("/users", async (_req: Request, res: Response) => {
        try {
          const allUsers = await userService.findAll();
          res.json(allUsers);
        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      });

      // API endpoint: Tạo mới User
      app.post("/users", async (req: Request, res: Response) => {
        const newUser = req.body;

        try {
          const createdUser = userService.create(newUser);
          const savedUser = await userService.save(createdUser);
          res.json(savedUser);
        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      });

      // API endpoint: Cập nhật thông tin của một User
      app.put("/users/:id", async (req: Request, res: Response) => {
        const userId = parseInt(req.params.id, 10);
        const updatedUser = req.body;

        try {
          const existingUser = await userService.findOne(userId);

          if (!existingUser) {
            res.status(404).json({ error: "User not found" });
            return;
          }

          // Merge updatedUser into existingUser (customize this based on your requirements)
          Object.assign(existingUser, updatedUser);

          const savedUser = await userService.save(existingUser);
          res.json(savedUser);
        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      });

      // API endpoint: Xóa một User
      app.delete("/users/:id", async (req: Request, res: Response) => {
        const userId = parseInt(req.params.id, 10);

        try {
          await userService.remove(userId);
          res.json({ message: "User removed successfully" });
        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      });

      // Thêm các endpoint API khác ở đây tương tự như trong ví dụ trước.

      // Bắt đầu lắng nghe trên cổng đã chọn
      app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
      });
    }

    run();
    // AppDataSource.destroy();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

// Hàm lấy dữ liệu và chuyển đổi thành JSON
async function getUserData(): Promise<string> {
  const userRepository = AppDataSource.manager.getRepository(User);
  const user = await userRepository.findOne({
    where: { id: 1 }, // Điều kiện tìm kiếm (ví dụ: tìm user có id là 1)
    relations: ["posts", "profile"],
  });

  console.log("In File: AppDataSourcreConnectionEntity.ts, Line: 79", user);
  if (!user) {
    return "User not found.";
  }

  // Sử dụng hàm transform
  const userDTO = Transformer.transformToDTO(user, UserDTO);

  // Thay đổi dữ liệu trên DTO
  userDTO.username = "new_username";
  userDTO.profile.fullName = "New Full Name";

  // Chuyển đổi DTO thành JSON
  const userData = JSON.stringify(userDTO, null, 2);
  console.log("In File: AppDataSourcreConnectionEntity.ts, Line: 93", userData);
  return userData;
}

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
