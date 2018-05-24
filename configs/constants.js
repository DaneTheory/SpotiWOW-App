import express from 'express';
import morgan from 'morgan';


export const ServerApi = express();
export const RouterApi = express.Router();

export const ServerLogger = () => {
  ServerApi.use(morgan('combined'));
};
