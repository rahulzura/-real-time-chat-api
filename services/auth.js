import { UserModel } from '../models/users.js';
import { generateHash, verifyHash } from '../utils/crypto.js';
import { ServerError } from '../utils/error.js';
import { generateToken } from '../utils/token.js';

export const signUp = async ({ username, password }) => {
  const passwordHash = await generateHash(password);
  const user = await new UserModel({ username, password: passwordHash }).save();

  const token = await generateToken({ id: user._id });
  return { id: user._id, token };
};

export const signIn = async ({ username, password }) => {
  const user = await UserModel.findOne({ username });

  if (!user || !(await verifyHash({ plain: password, hash: user.password }))) {
    throw new ServerError('username/password does not match our records', { statusCode: 401 });
  }

  const token = await generateToken({ id: user._id });
  return { id: user._id, token };
};
