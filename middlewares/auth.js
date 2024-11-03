import { ServerError } from '../utils/error.js';
import { verifyToken } from '../utils/token.js';

export const authorizeUserMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    let data;
    try {
      data = await verifyToken(token);
    } catch (err) {
      throw new ServerError('auth token verification failed', { statusCode: 401, cause: err });
    }
    req.user = { id: data.id };
    next();
  } catch (err) {
    next(err);
  }
};
