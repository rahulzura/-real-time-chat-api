import { UserModel } from '../models/users.js';

export const getUsers = async () => UserModel.find({}, { _id: 0, id: '$_id', username: 1 });
