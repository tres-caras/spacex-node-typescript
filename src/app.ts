import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import routes from "./routes";
dotenv.config({ path: ".env.local" });

const PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL || "http";
const HOST = process.env.HOST || "localhost";
AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app: Application = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    routes(app);

    //start express server
    app.listen(PORT);

    const newLocal = {
      name: "John Doe",
      email: "jd@dis.com",
    };
    const newUser = new User(newLocal.name, newLocal.email);
    const newUserCreated = AppDataSource.manager.create(User, newUser);
    // insert new user for test
    const newUserSaved = await AppDataSource.manager.save(newUserCreated);
    // Warning: inserting 1 user each time is not a good practice
    console.log(newUserSaved);
    console.log(newUserCreated);
    console.log(`Server started at ${PROTOCOL}://${HOST}:${PORT}`);
  }).catch((err) => {
    console.log("########### E r r o r ##############");
    console.log(err);
  }).finally(() => {
    console.log("########### F i n a l l y #########");
    console.log("Finally block");
  });
