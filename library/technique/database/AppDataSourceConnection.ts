import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./User";
import { UserService } from "./ORMReponsitory";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3310,
  username: "root",
  password: "secret",
  database: "reponsitory_db",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    async function run() {
      const userService = new UserService();
      const users = await userService.getAllUsers();

      // Thêm từng đối tượng User vào cơ sở dữ liệu
      async function addUsersToDatabase() {
        for (const user of usersJson) {
          await userService.createUser(user);
        }
      }

      // Gọi hàm để thực hiện thêm dữ liệu vào cơ sở dữ liệu
    //   addUsersToDatabase();
    }

    run();
    // AppDataSource.destroy();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

// Mảng JSON chứa thông tin của 10 User
const usersJson = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     codeGame: "JD123",
//     email: "john.doe@example.com",
//     password: "password123",
//     isActive: true,
//   },
  {
    firstName: "Jane",
    lastName: "Smith",
    codeGame: "JS456",
    email: "jane.smith@example.com",
    password: "password456",
    isActive: true,
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    codeGame: "BJ789",
    email: "bob.johnson@example.com",
    password: "password789",
    isActive: false,
  },
  {
    firstName: "Alice",
    lastName: "Williams",
    codeGame: "AW101",
    email: "alice.williams@example.com",
    password: "password101",
    isActive: true,
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    codeGame: "CB222",
    email: "charlie.brown@example.com",
    password: "password222",
    isActive: false,
  },
  {
    firstName: "Eva",
    lastName: "Davis",
    codeGame: "ED333",
    email: "eva.davis@example.com",
    password: "password333",
    isActive: true,
  },
  {
    firstName: "Frank",
    lastName: "Miller",
    codeGame: "FM444",
    email: "frank.miller@example.com",
    password: "password444",
    isActive: true,
  },
  {
    firstName: "Grace",
    lastName: "Jones",
    codeGame: "GJ555",
    email: "grace.jones@example.com",
    password: "password555",
    isActive: false,
  },
  {
    firstName: "Henry",
    lastName: "Taylor",
    codeGame: "HT666",
    email: "henry.taylor@example.com",
    password: "password666",
    isActive: true,
  },
  {
    firstName: "Isabel",
    lastName: "Clark",
    codeGame: "IC777",
    email: "isabel.clark@example.com",
    password: "password777",
    isActive: true,
  },
];
