import { getUsers } from '../services/user.js';

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.send({ users });
  } catch (err) {
    res.send({ err });
  }
};