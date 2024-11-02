import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createServer } from 'node:http';
import { router } from './routes/index.js';

export const createHttpServer = () => {
  const app = express();
  
  app.use(cors());
  app.use(bodyParser.json());
  app.use(router);

  const server = createServer(app);
  return server;
};
