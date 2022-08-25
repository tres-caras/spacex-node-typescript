import express from "express";
import bodyParser from "body-parser";
import {
  FavoriteController,
  UserController,
  LaunchesController,
} from "./controllers/Controller";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
const app = express();
app.use(bodyParser.json());

//launches
app.get("/launches", LaunchesController.getLaunches);

//favorites
app.get("/favorites", FavoriteController.getFavorites);
app.get("/favorites/:id", FavoriteController.getFavorite);
app.post("/favorites", FavoriteController.save);
app.delete("/favorites/:id", FavoriteController.delete);

//users
app.get("/user/:id", UserController.getUser);
app.get("/user", UserController.getUsers);
app.post("/user", UserController.createUser);

export default app;
