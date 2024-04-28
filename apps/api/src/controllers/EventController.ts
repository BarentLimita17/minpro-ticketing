import { Request, Response, NextFunction } from "express";
import { createLocationQuery, createEventQuery, createTicketQuery, createPromotionQuery, getAllEventsQuery, getEventByIdQuery, getLocationByNameQuery, getPromotionByCodeQuery, getTicketByNameQuery } from "@/services/EventService/EventService";

// controller for get all events
export const getAllEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await getAllEventsQuery()
        if (!events) throw new Error("Events are currently unavailable.")

        res.status(200).send({
            error: false,
            message: "All events fetched successfully",
            data: events
        })
    } catch (error) {
        next(error)
    }
}

// controller for get event details by id
export const getEventById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const findEventByIdResult = await getEventByIdQuery(Number(id))
        if (!findEventByIdResult) throw new Error("Event not found.")

        res.status(200).send({
            error: false,
            message: "Event fetched successfully",
            data: findEventByIdResult
        })
    } catch (error) {
        next(error)
    }
}

// controller for create location
export const createLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, city, details, street, zipCode } = req.body

        const findLocationByNameResult = await getLocationByNameQuery(name)
        if (findLocationByNameResult?.details == details) throw new Error("Location already exists.")

        const createdLocation = await createLocationQuery({ name, city, details, street, zipCode })

        res.status(201).send({
            error: false,
            message: "Location created successfully",
            data: createdLocation
        })

    } catch (error) {
        next(error)
    }
}

// controller for create event
export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, date, startTime, endTime, description, termsAndConditions, locationId, categoryId, userUid } = req.body

        const createdEvent = await createEventQuery({ name, date, startTime, endTime, description, termsAndConditions, locationId, categoryId, userUid })

        res.status(201).send({
            error: false,
            message: "Event created successfully",
            data: createdEvent
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for create ticket
export const createTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const eventId = req.params.id
        const { name, description, price, quantity, validityDate } = req.body

        const findTicketByNameResult = await getTicketByNameQuery(name)
        if (findTicketByNameResult?.name == name) throw new Error("Ticket already exists.")

        const createdTicket = await createTicketQuery({ name, description, price, quantity, validityDate, eventId })

        res.status(201).send({
            error: false,
            message: "Ticket created successfully",
            data: createdTicket
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for create promotion
export const createPromotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const eventId = req.params.id
        const { name, code, description, discount, quantity, validityDate } = req.body

        const findPromotionByCodeResult = await getPromotionByCodeQuery(code)
        if (findPromotionByCodeResult?.code == code) throw new Error("Promotion already exists.")

        const createdPromotion = await createPromotionQuery({ name, code, description, discount, quantity, validityDate, eventId })

        res.status(201).send({
            error: false,
            message: "Promotion created successfully",
            data: createdPromotion
        })
    } catch (error) {
        // console.log(error)
        next(error)
    }
}