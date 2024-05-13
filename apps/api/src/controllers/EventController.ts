import { Request, Response, NextFunction } from "express";
import fs from "fs";
import { createEventQuery, updateEventQuery, publishEventQuery, getAllActiveEventsQuery, getEventByIdQuery, getAllCategoriesQuery, getAllPastEventsQuery, getAllClosestEventsQuery } from "@/services/EventService/EventService";

// controller for get all events
export const getAllActiveEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const city = req.query.city as string | undefined;
        const eventName = req.query.eventName as string | undefined;
        const categoryId = req.query.categoryId as string | undefined;
        const events = await getAllActiveEventsQuery(city, eventName, categoryId);
        if (!events) throw new Error("Events are currently unavailable.")

        res.status(200).send({
            count: events.length,
            error: false,
            message: "All events fetched successfully",
            data: events
        })
    } catch (error) {
        next(error)
    }
}

// controller for get all past events
export const getAllPastEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pastEvents = await getAllPastEventsQuery();
        if (!pastEvents) throw new Error("Past Events are currently unavailable.")

        res.status(200).send({
            count: pastEvents.length,
            error: false,
            message: "Past events fetched successfully",
            data: pastEvents
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for get all closest events
export const getAllClosestEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const closestEvents = await getAllClosestEventsQuery();
        if (!closestEvents) throw new Error("Closest Events are currently unavailable.")

        res.status(200).send({
            count: closestEvents.length,
            error: false,
            message: "Closest events fetched successfully",
            data: closestEvents
        })
    } catch (error) {
        next(error)
    }
}

// controller for get all categories
export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getAllCategoriesResult = await getAllCategoriesQuery()

        res.status(200).send({
            error: false,
            message: "Categories fetched successfully",
            data: getAllCategoriesResult
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
        const data = JSON.parse(req.body.data)
        let uploadedBannerUrl;
        let uploadedThumbnailUrl;
        if (req.files) {
            uploadedBannerUrl = Array.isArray(req.files) ? req.files : req.files['bannerurl'];
            uploadedThumbnailUrl = Array.isArray(req.files) ? req.files : req.files['thumbnailurl'];
        }

        if (uploadedBannerUrl === undefined || uploadedThumbnailUrl === undefined) {
            throw new Error("Banner or thumbnail not uploaded.")
        }
        const createdEvent = await createEventQuery(data, uploadedBannerUrl, uploadedThumbnailUrl)

        res.status(201).send({
            error: false,
            message: "Event created successfully",
            data: createdEvent
        })
    } catch (error) {
        next(error)
    }
}

// controller for publish event
export const publishEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const findEventByIdResult = await getEventByIdQuery(Number(id))
        if (!findEventByIdResult) throw new Error("Event not found.")

        const publishEvent = await publishEventQuery(Number(id))
        res.status(200).send({
            error: false,
            message: "Event published successfully",
            data: publishEvent
        })
    } catch (error) {
        next(error)
    }
}

// controller for update event
export const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const data = JSON.parse(req.body.data)
        let uploadedBannerUrl;
        let uploadedThumbnailUrl;
        if (req.files) {
            uploadedBannerUrl = Array.isArray(req.files) ? req.files : req.files["bannerurl"];
            uploadedThumbnailUrl = Array.isArray(req.files) ? req.files : req.files["thumbnailurl"];
        }

        const findEventByIdResult = await getEventByIdQuery(Number(id))
        const previousBannerUrl = findEventByIdResult?.bannerUrl
        const previousThumbnailUrl = findEventByIdResult?.thumbnailUrl

        if (!findEventByIdResult) throw new Error("Event not found.")

        updateEventQuery(Number(id), data, uploadedBannerUrl, uploadedThumbnailUrl)
        if (previousBannerUrl) fs.rmSync(previousBannerUrl)
        if (previousThumbnailUrl) fs.rmSync(previousThumbnailUrl)


        res.status(200).send({
            error: false,
            message: "Event updated successfully",
            data: findEventByIdResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}