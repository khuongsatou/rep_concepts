import "reflect-metadata";
import express, { Request, Response } from "express";
import { AppDataSource } from "./DataSource";
import userRouter from './routes/user';

const app = express();
const port = 3000;

app.use(express.json());
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.use('/users',userRouter)
    // Bắt đầu lắng nghe trên cổng đã chọn
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    // AppDataSource.destroy();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
