import { Router } from "express";
import { createLocation, createEvent, createTicket, getAllEvents, createPromotion, getEventById } from "@/controllers/EventController";

const router = Router();

router.get('/', getAllEvents)
router.get('/:id', getEventById)
router.post('/', createEvent)
router.post('/location', createLocation)
// router.post('/ticket', createTicket)
router.post('/:id/ticket', createTicket)
// router.post('/promotion', createPromotion)
router.post('/:id/promotion', createPromotion)

export default router