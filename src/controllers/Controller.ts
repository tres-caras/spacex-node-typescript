// controllers for launches, favorites, and users

import { Favorite } from "../entity/Favorite";
import getPaginatedLaunches from "../services/Launches";
import { Request, Response } from "express";
import { createUser, getUsers } from "../services/UserService";
import { saveFavorite } from "../services/FavoriteService";

export const FavoriteController = {
  async save(req: Request, res: Response) {
    return saveFavorite(req, res);
  },
};

export const UserController = {
  async getUsers(req: Request, res: Response) {
    return getUsers(req, res);
  },
  async createUser(req: Request, res: Response) {
    return createUser(req, res);
  },
};

export const LaunchesController = {
  async getLaunches(req: Request, res: Response) {
    return getPaginatedLaunches(req, res);
  },
};
