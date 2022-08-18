import express, { Application } from "express";
import bodyParser from "body-parser";
import routes from ".";
import { AppDataSource } from "./utils/data-source";
import validateEnv from "./utils/validateEnv";
import config from "config";

const PORT = config.get<number>('port') || 3000;

AppDataSource.initialize()
  .then(() => {
    // VALIDATE ENV
    validateEnv();
    const app: Application = express();

    // MIDDLEWARE
  
    // BODY PARSER
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Logger

    // COOOKIE PARSER

    // CORS

    // ROUTES
    routes(app);
    
    // UNHANDLED ROUTE

    // ERROR HANDLER
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    }).on('error', (err) => {
      console.error(err);
    }).on('listening', () => {
      console.log(`Server listening on port ${PORT}`);
    }).on('close', () => {
      console.log(`Server closed on port ${PORT}`);
    }).on('connection', () => {
      console.log(`Server connected on port ${PORT}`);
    }).on('disconnect', () => {
      console.log(`Server disconnected on port ${PORT}`);
    })
  });
