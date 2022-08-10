import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import "dotenv/config";
import routes from './routes';
import { connect } from './connect';

const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hi there!');
});

const PORT = process.env.PORT || 3000;
const db = process.env.MONGO_URL || 'mongodb://mongo:27017/app';
connect({ db });
routes({ app });

app.listen(PORT, () => {
    console.log(`--~~~=:>[XXXXXXXXX]> Server running on port ${PORT}`);
}).on('error', (err: Error) => {
    console.log(`--~~~=:>[XXXXXXXXX]> ${err}`);
});