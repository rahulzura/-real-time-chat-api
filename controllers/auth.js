import { signIn, signUp } from '../services/auth.js';
import { ServerError } from '../utils/error.js';
import { sendErrorResponse, sendSuccessResponse } from '../utils/response.js';

export const signUpController = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      throw new ServerError('username and password are required', { statusCode: 400 });
    }
  
    const { id, token } = await signUp({ username, password });
    await sendSuccessResponse({ id, token }, res);
  } catch (err) {
    await sendErrorResponse(err, res);
  }
};

export const signInController = async (req, res) => {
  try {
    const base64Str = req.headers.authorization.split('Basic ')[1];
    const [username, password] = Buffer.from(base64Str, 'base64').toString('utf8').split(':');
    
    if (!(username && password)) {
      throw new ServerError('username and password are required', { statusCode: 400 });
    }

    const { id, token } = await signIn({ username, password });
    await sendSuccessResponse({ id, token }, res);
  } catch (err) {
    await sendErrorResponse(err, res);
  }
};
