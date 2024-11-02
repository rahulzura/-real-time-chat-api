import { UserModel } from '../models/users.js';
import { generateHash, verifyHash } from '../utils/crypto.js';
import { generateToken } from '../utils/token.js';

export const signUp = async ({ username, password }) => {
  const passwordHash = await generateHash(password);
  const user = new UserModel({ username, password: passwordHash }).save();

  const token = await generateToken({ id: user._id });
  return { id: user._id, token };
};

export const signIn = async ({ username, password }) => {
  const user = await UserModel.findOne({ username });

  if (!user || !(await verifyHash({ plain: password, hash: user.password }))) {
    throw new Error('username/password does not match our records');
  }

  const token = await generateToken({ id: user._id });
  return { id: user._id, token };
};
