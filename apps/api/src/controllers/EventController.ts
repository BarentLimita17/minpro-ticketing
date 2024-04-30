import { Request, Response, NextFunction } from "express";
import { createEventQuery, getAllEventsQuery, getEventByIdQuery } from "@/services/EventService/EventService";

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