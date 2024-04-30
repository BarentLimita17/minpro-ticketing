import { Router } from "express";
import { createEvent, getAllEvents, getEventById } from "@/controllers/EventController";
import { createLocation } from "@/controllers/LocationController";
import { createPromotion } from "@/controllers/PromotionController"
import { createTicket } from "@/controllers/TicketController"

import { handleErrorValidator } from "@/middleware/HandleErrorExpressValidator";
import { validatorCreateEvent } from "@/middleware/EventValidator";
import { validatorCreateLocation } from "@/middleware/LocationValidator";
import { validatorCreatePromotion } from "@/middleware/PromotionValidator";
import { validatorCreateTicket } from "@/middleware/TicketValidator";

const router = Router();

router.get('/', getAllEvents)
router.get('/:id', getEventById)
router.post('/', validatorCreateEvent, handleErrorValidator, createEvent)
router.post('/location', validatorCreateLocation, handleErrorValidator, createLocation)
router.post('/:id/ticket', validatorCreateTicket, handleErrorValidator, createTicket)
router.post('/:id/promotion', validatorCreatePromotion, handleErrorValidator, createPromotion)

export default router