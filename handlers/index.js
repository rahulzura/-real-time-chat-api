import { verifyToken } from '../utils/token.js';

export const onConnection = async (socket) => {
  try {
    const { token } = socket.handshake.auth;
    const { id } = await verifyToken(token);
    await socket.join(id);
  } catch (err) {
    console.error('something went wrong while connecting to ws server', err);
    socket.disconnect();
  }

  socket.on('message', (msg) => {
    if (msg?.to && msg.id && msg.text) {
      socket.to(msg.to).emit('message', msg);
    } else {
      console.log('invalid message received:', msg);
    }
  });
};
