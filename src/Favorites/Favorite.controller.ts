import { Request, Response } from "express";
// import { Favorite } from "../Favorites/entities/Favorite.entity";

export const createFavorite = async (req: Request, res: Response) => {
  // const favoriteRepository = req.app.get('FavoriteRepository');
  // const favoriteService = req.app.get('FavoriteService');
  // const favorite = new Favorite();
  // favorite.user. = req.body.userId;
  // favorite.launchId = req.body.launchId;
  // const result = await favoriteService.addFavorite(favorite);
  res.status(201).send("result");
};
