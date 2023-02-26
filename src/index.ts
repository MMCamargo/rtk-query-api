import { usersRouter } from './routes';
import express from 'express';
import cors from 'cors';

const api = express();
const port = process.env.PORT || 8081;

api.use(express.json(), cors());

api.use(usersRouter);

api.listen(port, () => console.log('ok'));
