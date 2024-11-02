import { hash, verify } from 'argon2';

export const generateHash = async (plain) => hash(plain);

export const verifyHash = ({ plain, hash }) => verify(hash, plain);
