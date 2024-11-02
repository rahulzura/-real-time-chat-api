import { UserModel } from '../models/users.js';

export const getUsers = async () => UserModel.find({}, { _id: 1, username: 1 });
