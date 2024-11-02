import { Router } from 'express';
import { signUpController, signInController } from '../controllers/auth.js';

export const authRouter = new Router();

authRouter.post('/sign-up', signUpController);
authRouter.post('/sign-in', signInController);
