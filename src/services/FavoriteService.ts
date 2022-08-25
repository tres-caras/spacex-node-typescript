import { AppDataSource } from "../data-source";
import { Favorite } from "../entity/Favorite";
import { User } from "../entity/User";
import { Request, Response } from "express";

export const favor = AppDataSource.getRepository(Favorite);
export const userr = AppDataSource.getRepository(User);

export const saveFavorite = async (req: Request, res: Response) => {
  let userId: number = req.body.userId;
  let launchId: string = req.body.launchId;
  let user = await userr.findOneBy({ id: userId });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    let favorite = new Favorite(launchId, user);
    res.status(201).json(await favor.save(favor.create(favorite)));
  }
};

export const deleteFavorite = async (req: Request, res: Response) => {
  let favorite = await favor.findOneBy({ id: parseInt(req.params.id) });
  if (!favorite) {
    res.status(404).json({ message: "Favorite not found" });
  } else {
    await favor.remove(favorite);
    res.status(200).json({ message: "Favorite deleted" });
  }
};

export const getFavorites = async (req: Request, res: Response) => {
  res.status(200).json(await favor.find());
};

export const getFavorite = async (req: Request, res: Response) => {
  let favorite = await favor.findOneBy({ id: parseInt(req.params.id) });
  if (!favorite) {
    res.status(404).json({ message: "Favorite not found" });
  } else {
    res.status(200).json(favorite);
  }
};
