import "reflect-metadata";
import { DataSource } from "typeorm";
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

