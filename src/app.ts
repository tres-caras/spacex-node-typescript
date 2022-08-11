import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes';
import { connect } from './connect';

dotenv.config({path: '.env.local'});
const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hi there!');
});
routes({ app });//no funcionan las rutas
console.info(process.env);
const PORT = process.env.PORT || 3000;
const db = process.env.MONGO_URL || 'mongodb://mongo:27017/app';
connect({ db });

app.listen(PORT, () => {
    console.log(`--~~~=:>[XXXXXXXXX]> Server running on port ${PORT}`);
}).on('error', (err: Error) => {
    console.log(`--~~~=:>[XXXXXXXXX]> ${err}`);
});