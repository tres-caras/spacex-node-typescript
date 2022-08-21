import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Request, Response } from "express";

export const userr = AppDataSource.getRepository(User);

export const getUsers = async (req: Request, res: Response) => {
  const users = await userr.find({
    select: ["name", "email"],
    relations: ["favorites"],
  });
  res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = new User(req.body.name, req.body.email);
  res.status(201).json(await userr.save(userr.create(newUser)));
};

export const getUser = async (req: Request, res: Response) => {
  const user = await userr.findOneBy({ id: parseInt(req.params.id) });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json(user);
  }
};
