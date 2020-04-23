import express from 'express';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from './routes';

class App {
  server: express.Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(bodyParser.json());
    this.server.use(helmet());
    this.server.use(express.urlencoded({ extended: false }));
  }

  public routes() {
    this.server.use(routes);
  }
}

export default new App().server;
