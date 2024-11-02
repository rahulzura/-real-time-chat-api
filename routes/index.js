import { Router } from 'express';
import { authRouter } from './auth.js';
import { userRouter } from './user.js';

export const router = new Router();

router.get('/health', (_, res) => res.json({ status: 'running' }));
router.use('/auth', authRouter);
router.use('/users', userRouter);
