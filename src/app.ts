import express, { Application } from "express";
import bodyParser from "body-parser";
import {
  FavoriteController,
  UserController,
  LaunchesController,
} from "./controllers/Controller";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
const app: Application = express();
app.use(bodyParser.json());

//launches
app.get("/launches", LaunchesController.getLaunches);

//favorites
app.post("/favorites", FavoriteController.save);

//users
app.get("/user", UserController.getUsers);
app.post("/user", UserController.createUser);

export default app;
