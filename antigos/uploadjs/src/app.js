import 'dotenv/config';

import express from "express";
import routes from './routes';
import path from 'path';
import cors from 'cors';

import './database';

class App {
  constructor(){
    this.server = express();

    this.routes();
    this.middlewares();
  }

  routes(){
    this.server.use(routes);
  }

  middlewares(){
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use('/files',
      express.static(path.resolve(__dirname, '..', 'tmp'))
    );
  }

}

export default new App().server;
