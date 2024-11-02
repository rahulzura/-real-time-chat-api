import jwt from 'jsonwebtoken';

const { AUTH_TOKEN_SECRET: authTokenSecret } = process.env;

export const generateToken = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, authTokenSecret, { algorithm: 'HS256', expiresIn: '4d' }, (err, token) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(token);
      }
    });
  });
};

export const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, authTokenSecret, { algorithm: 'HS256' }, ((err, data) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    }))
  }); 
};
