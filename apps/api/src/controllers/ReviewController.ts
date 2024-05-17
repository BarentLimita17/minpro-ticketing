import { Request, Response, NextFunction } from "express";
import { createReviewQuery, getReviewByEventIdQuery } from "../services/ReviewService/ReviewService";

// controller for create review
export const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { rating, feedback, suggestion, eventId, transactionId, userUid } = req.body

        const createdReview = await createReviewQuery({ userUid, rating, feedback, suggestion, eventId, transactionId })

        res.status(201).send({
            error: false,
            message: "Review created successfully",
            data: createdReview
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for get review by event id
export const getReviewByEventId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { eventId } = req.params
        const review = await getReviewByEventIdQuery(Number(eventId))
        res.status(200).send({
            error: false,
            message: "Review fetched successfully",
            data: review
        })
    } catch (error) {
        next(error)
    }
}