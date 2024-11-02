import { createConnection } from 'mongoose';

export const db = createConnection(process.env.MONGO_URI, { bufferCommands: true });

export const connectDb = async () => db.asPromise();
export const disconnectDb = async () => db.close();