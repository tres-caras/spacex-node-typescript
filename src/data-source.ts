import "reflect-metadata";
import { DataSource } from "typeorm";
import { Favorite } from "./entity/Favorite";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Favorite],
  migrations: [],
  subscribers: [],
});

export const TestDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  dropSchema: true,
  synchronize: true,
  logging: true,
  entities: ["/../**/*.entity.js"],
  migrations: [],
  subscribers: [],
});
