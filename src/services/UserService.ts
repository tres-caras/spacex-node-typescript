import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Request, Response } from "express";

export const userr = AppDataSource.getRepository(User);

export const getUsers = async (req: Request, res: Response) => {
  const users = await userr.find({ select: ["name", "email"] });
  res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = new User(req.body.name, req.body.email);
  res.status(201).json(await userr.save(userr.create(newUser)));
};
