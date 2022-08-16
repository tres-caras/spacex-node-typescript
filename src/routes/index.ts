import { Application } from "express";
import getFavorites from "../controllers/Favorites.controller";
import createUser from "../controllers/User.controller";
import getPaginatedLaunches from "../services/Launches.service";
import { Request, Response } from "express";
export default ( app: Application ) => {
  
  app.use('/api/v1/launches', (req: Request, res: Response) => getPaginatedLaunches(req,res));
  
  app.use('/api/v1/users', createUser);

  app.get("/favorites", (req: Request, res: Response) => getFavorites(req, res)); 
};
