import bodyParser from 'body-parser';

import { ServerApi, RouterApi, ServerLogger } from '../configs/constants';
import { Port } from '../configs/port';
import { ValidateTokenMiddleware } from './middleware/validateTokenMiddleware';
import { Routes } from './routes/Routes';


ServerLogger();

ServerApi.use(bodyParser.urlencoded({ extended: true }));
ServerApi.use(bodyParser.json());

ValidateTokenMiddleware();
Routes();

ServerApi.use(`/api`, RouterApi);

ServerApi.listen(Port, () => {
  console.log(`SpotiWow App API Server running on port: ${Port}`);
});
