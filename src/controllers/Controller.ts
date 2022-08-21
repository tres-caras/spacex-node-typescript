// controllers for launches, favorites, and users
import getPaginatedLaunches from "../services/Launches";
import { Request, Response } from "express";
import { createUser, getUsers, getUser } from "../services/UserService";
import {
  saveFavorite,
  getFavorites,
  deleteFavorite,
} from "../services/FavoriteService";

export const FavoriteController = {
  async save(req: Request, res: Response) {
    return saveFavorite(req, res);
  },
  async getFavorites(req: Request, res: Response) {
    return getFavorites(req, res);
  },
  async delete(req: Request, res: Response) {
    return deleteFavorite(req, res);
  },
};

export const UserController = {
  async getUsers(req: Request, res: Response) {
    return getUsers(req, res);
  },
  async createUser(req: Request, res: Response) {
    return createUser(req, res);
  },
  async getUser(req: Request, res: Response) {
    return getUser(req, res);
  }
};

export const LaunchesController = {
  async getLaunches(req: Request, res: Response) {
    return getPaginatedLaunches(req, res);
  },
};
