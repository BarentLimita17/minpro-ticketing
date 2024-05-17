import express, { Router } from 'express';

const router = Router()
router.use(express.json())

router.use('*/image', express.static('src/public/image'))

import EventRouter from './eventRouter'
import TransactionRouter from './TransactionRouter'
import UserRouter from './UserRouter'
import ReviewRouter from './ReviewRouter';

router.use('/event', EventRouter)
router.use('/transaction', TransactionRouter)
router.use('/user', UserRouter)
router.use('/review', ReviewRouter)

export default router