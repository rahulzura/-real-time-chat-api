import { signIn, signUp } from '../services/auth.js';

export const signUpController = async (req, res) => {
  try {
    const { username, password } = req.body;
  
    const { id, token } = await signUp({ username, password });
    res.send({ id, token });
  } catch (err) {
    res.send({ err });
  }
};

export const signInController = async (req, res) => {
  try {
    const base64Str = req.headers.authorization.split('Basic ')[1];
    const [username, password] = Buffer.from(base64Str, 'base64').toString('utf8').split(':');
    
    const { id, token } = await signIn({ username, password });
    res.send({ id, token });
  } catch (err) {
    console.error(err);
    res.send({ err });
  }
};
