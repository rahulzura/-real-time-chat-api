import { connectDb, disconnectDb } from './db/mongo.js';
import { createHttpServer } from './httpServer.js';
import { createWsServer } from './wsServer.js';

const { SERVER_PORT } = process.env;
const serverPort = +SERVER_PORT;

const initService = async () => {
  try {
    const server = createHttpServer();
    const io = createWsServer(server);

    await connectDb();
    
    server.listen(serverPort, () => {
      console.log(`Server is running at: http://localhost:${serverPort}`);
    });
  } catch (err) {
    await disconnectDb();
    console.error(err);
  }
};

initService();
