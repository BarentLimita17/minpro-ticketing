import { Request, Response, NextFunction } from "express";
import { createEventQuery, getAllEventsQuery, getEventByIdQuery, getAllCategoriesQuery, getEventByCategoryOrLocationQuery } from "@/services/EventService/EventService";

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

// controller for get events filtered by category
export const getEventsByCategoryOrLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryId, locationId } = req.query

        if (!categoryId && !locationId) throw new Error("Please Provide either category or location")

        let filteredEvent;

        if (categoryId && !locationId) {
            filteredEvent = await getEventByCategoryOrLocationQuery(categoryId);
        } else if (locationId && !categoryId) {
            filteredEvent = await getEventByCategoryOrLocationQuery(locationId);
        }
        // else {
        //     filteredEvent = await getEventByCategoryOrLocationQuery(categoryId, locationId);
        // }

        if (!filteredEvent || filteredEvent.length === 0) {
            throw new Error("No events found matching the provided criteria.");
        }

        res.status(200).send({
            error: false,
            message: "Events fetched successfully",
            data: filteredEvent
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
        // console.log(data)
        // console.log(req.files)
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