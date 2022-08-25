import "reflect-metadata";
import { DataSource } from "typeorm";
import { Favorite } from "./entity/Favorite";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host:
    getDatabaseHost(),
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || "postgres",
  password: process.env.DATABASE_PASSWORD || "postgres",
  database: process.env.DATABASE_NAME || "postgres",
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Favorite],
  migrations: [],
  subscribers: [],
});
function getDatabaseHost(): string {
  let host = process.env.NODE_ENV == "production"
    ? process.env.DATABASE_HOST
    : "localhost";
  return host;
}

