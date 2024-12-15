import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import { router } from './routes/index.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

export const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: process.env.WS_ALLOWED_ORIGIN,
    methods: ['GET'],
  }
});

import { verifyToken } from './utils/token.js';
const onConnection = async (socket) => {
  try {
    const { token } = socket.handshake.auth;
    const { id } = await verifyToken(token);
    await socket.join(id);
  } catch (err) {
    console.error('something went wrong while connecting to ws server', err);
    socket.disconnect();
  }

  socket.on('message', (msg) => {
    console.log({ msg });
    // if (msg?.to && msg.id && msg.text) {
    //   socket.to(msg.to).emit('message', msg);
    // } else {
    //   console.log('invalid message received:', msg);
    // }
    io.to('6728aefbd33ef2554e8f947e').except(socket.id).emit('message', msg);
  });
};


io.on('connection', onConnection);
