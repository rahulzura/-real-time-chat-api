import { verifyToken } from '../utils/token.js';

export const onConnection = async (socket) => {
  const { token } = socket.handshake.auth;
  const { id } = await verifyToken(token);

  socket.join(id);

  socket.on('message', (msg) => {
    socket.to(msg.to).emit('message', msg);
  });
};
