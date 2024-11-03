import { Router } from 'express';
import { authRouter } from './auth.js';
import { userRouter } from './user.js';
import { authorizeUserMiddleware } from '../middlewares/auth.js';

export const router = new Router();

router.get('/health', (_, res) => res.json({ status: 'running' }));
router.use('/auth', authRouter);
router.use('/users', authorizeUserMiddleware, userRouter);
