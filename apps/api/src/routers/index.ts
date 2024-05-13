
import express, {Router} from 'express';

// Define Router
const router = Router()
router.use(express.json()) // Body Parser


// Import Admin Router
import UserRouter from './UserRouter'
import AuthRouter from './AuthRouter'
import EoRouter from './EoRouter'
// import EventRouter from './EventRouter'
// import { createCode } from '@/controllers/userController';
// import eventOrganizerRouter from './eventOrganizerRouter'

router.use('/user', UserRouter)
router.use('/auth', AuthRouter)
router.use('/eo', EoRouter)
router.use('*/image', express.static('src/public/image'))
// router.use('/event', EventRouter)


export default router