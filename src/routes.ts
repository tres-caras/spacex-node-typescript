import { Application } from "express";
import {
  FavoriteController,
  UserController,
  LaunchesController,
} from "./controllers/Controller";

export default (app: Application) => {
  //launches
  app.get("/launches", LaunchesController.getLaunches);

  //favorites
  app.post("/favorites", FavoriteController.save);

  //users
  app.get("/user", UserController.getUsers);
  app.post("/user", UserController.createUser);
};
