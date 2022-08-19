import { Application } from "express";
import { createFavorite } from "./Favorites/Favorite.controller";
import getPaginatedLaunches from "./Launches/launches.service";
import { Request, Response } from "express";

export default (app: Application) => {

  //routes for launches
  app.use('/launches', (req: Request, res: Response) => getPaginatedLaunches(req, res));

  //routes for favorites
  app.get("/favorites", (req: Request, res: Response) => createFavorite(req, res));
};
