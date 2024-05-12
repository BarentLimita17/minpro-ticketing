import { Router } from "express";
import { createEvent, updateEvent, getAllActiveEvents, getEventById, getAllCategories, getAllPastEvents, getAllClosestEvents, publishEvent } from "@/controllers/EventController";
import { createLocation, getAllLocations } from "@/controllers/LocationController";
import { createPromotion, updatePromotion, getPromotionById, deletePromotion } from "@/controllers/PromotionController"
import { createTicket, updateTicket, getTicketById, deleteTicket } from "@/controllers/TicketController"

import { handleErrorValidator } from "@/middleware/Validator/HandleErrorExpressValidator";
import { validatorCreateLocation } from "@/middleware/Validator/LocationValidator";
import { validatorCreatePromotion } from "@/middleware/Validator/PromotionValidator";
import { validatorCreateTicket } from "@/middleware/Validator/TicketValidator";
import { Uploader } from "@/middleware/Uploader";

const router = Router();

router.get('/', getAllActiveEvents)
router.get('/past', getAllPastEvents)
router.get('/closest', getAllClosestEvents)
router.get('/category', getAllCategories)
router.get('/location', getAllLocations)
router.get('/:id', getEventById)
router.post('/', handleErrorValidator, Uploader, createEvent)
router.put('/:id', handleErrorValidator, Uploader, updateEvent)
router.post('/location', validatorCreateLocation, handleErrorValidator, createLocation)
router.post('/:id/ticket', validatorCreateTicket, handleErrorValidator, createTicket)
router.get('/:id/ticket', getTicketById)
router.put('/:id/ticket', validatorCreateTicket, handleErrorValidator, updateTicket)
router.delete('/:id/ticket', deleteTicket)
router.post('/:id/promotion', validatorCreatePromotion, handleErrorValidator, createPromotion)
router.get('/:id/promotion', getPromotionById)
router.put('/:id/promotion', validatorCreatePromotion, handleErrorValidator, updatePromotion)
router.delete('/:id/promotion', deletePromotion)
router.put('/:id/publish', publishEvent)

export default router