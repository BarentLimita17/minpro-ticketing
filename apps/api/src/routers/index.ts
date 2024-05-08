
import express, {Router} from 'express';

// Define Router
const router = Router()
router.use(express.json()) // Body Parser

// Import Admin Router
import userRouter from './userRouter'
import authRouter from './authRouter'
import eoRouter from './eoRouter'
// import { createCode } from '@/controllers/userController';
// import eventOrganizerRouter from './eventOrganizerRouter'

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/eo', eoRouter)
export default router