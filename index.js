import { connectDb, disconnectDb } from './db/mongo.js';
import { server } from './httpServer.js';

const { SERVER_PORT } = process.env;
const serverPort = +SERVER_PORT;

const initService = async () => {
  try {
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
