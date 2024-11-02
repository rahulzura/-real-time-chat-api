import { Server } from 'socket.io';
import { onConnection } from './handlers/index.js';

export const createWsServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.WS_ALLOWED_ORIGIN,
      methods: ['GET'],
    }
  });

  io.on('connection', onConnection);

  return io;
};
