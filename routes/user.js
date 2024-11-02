import { Router } from 'express';
import { getUsersController } from '../controllers/user.js';

export const userRouter = new Router();

userRouter.get('/', getUsersController);
