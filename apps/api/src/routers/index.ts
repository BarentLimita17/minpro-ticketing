import express, { Router } from 'express';

const router = Router()
router.use(express.json())

import EventRouter from './EventRouter'

router.use('/event', EventRouter)

export default router