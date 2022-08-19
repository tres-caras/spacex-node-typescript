// controllers for launches, favorites, and users

import { AppDataSource } from "../data-source";
import { Favorite } from "../entity/Favorite";
import { User } from "../entity/User";
import getPaginatedLaunches from "../services/Launches";
import { Request, Response } from "express";

export const favor = AppDataSource.getRepository(Favorite);
export const userr = AppDataSource.getRepository(User);

export const FavoriteController = {
    async save(favorite: Favorite) {
        return favor.save(favorite);
    }
}

export const UserController = {
    async getUsers() {
        return userr.find();
    },
    //create user with incomingMessage as parameter
    async createUser(mensaje: Request) {
        console.log("########### createUser ##############");
        console.log(mensaje.body);
        const newUser = new User(mensaje.body.name, mensaje.body.email);
        const saved = await userr.save(newUser);
        return saved
    }
}

export const LaunchesController = {
    async getLaunches(req: Request, res: Response) {
        console.log(req.url);
        return getPaginatedLaunches(req, res);
    }
}