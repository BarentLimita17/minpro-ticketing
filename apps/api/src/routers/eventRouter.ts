import { Router } from "express";
import { createEvent, getAllEvents, getEventById, getAllCategories, getEventsByCategoryOrLocation } from "@/controllers/EventController";
import { createLocation, getAllLocations } from "@/controllers/LocationController";
import { createPromotion } from "@/controllers/PromotionController"
import { createTicket } from "@/controllers/TicketController"

import { handleErrorValidator } from "@/middleware/Validator/HandleErrorExpressValidator";
import { validatorCreateEvent } from "@/middleware/Validator/EventValidator";
import { validatorCreateLocation } from "@/middleware/Validator/LocationValidator";
import { validatorCreatePromotion } from "@/middleware/Validator/PromotionValidator";
import { validatorCreateTicket } from "@/middleware/Validator/TicketValidator";
import { Uploader } from "@/middleware/Uploader";

const router = Router();

router.get('/', getAllEvents)
router.get('/filter', getEventsByCategoryOrLocation)
router.get('/category', getAllCategories)
router.get('/location', getAllLocations)
router.get('/:id', getEventById)
router.post('/', handleErrorValidator, Uploader, createEvent)
router.post('/location', validatorCreateLocation, handleErrorValidator, createLocation)
router.post('/:id/ticket', validatorCreateTicket, handleErrorValidator, createTicket)
router.post('/:id/promotion', validatorCreatePromotion, handleErrorValidator, createPromotion)

export default router