import { Server } from 'socket.io';
import { onConnection } from './handlers/index.js';

export const createWsServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:8000',
      methods: ['GET'],
    }
  });

  io.on('connection', onConnection);

  return io;
};
