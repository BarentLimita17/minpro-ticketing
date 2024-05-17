import { Request, Response, NextFunction } from "express";
import { getUserByUidQuery, getUserActiveTicketByUidQuery, getUserUsedTicketByUidQuery, getTransactionNonPastEventByUidQuery, getTransactionPastEventReviewedByUidQuery, getTransactionPastEventUnReviewedByUidQuery } from "@/services/UserService/UserService";

// controller for get user by uid
export const getUserByUid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid }: any = req.headers
        const getUserResult = await getUserByUidQuery(uid)
        res.status(200).send({
            error: false,
            message: "Get user successfully",
            data: getUserResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for get userActiveTicket by uid
export const getUserActiveTicketByUid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid }: any = req.headers;

        const getUserTicketResult = await getUserActiveTicketByUidQuery(uid)
        res.status(200).send({
            error: false,
            message: "Get user ticket successfully",
            data: getUserTicketResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for get userUsedTicket by uid
export const getUserUsedTicketByUid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid }: any = req.headers

        const getUserTicketResult = await getUserUsedTicketByUidQuery(uid)
        res.status(200).send({
            error: false,
            message: "Get user ticket successfully",
            data: getUserTicketResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for get transaction non-past event by uid
export const getTransactionNonPastEventByUid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid }: any = req.headers
        const getTransactionNonPastEventResult = await getTransactionNonPastEventByUidQuery(uid)
        res.status(200).send({
            error: false,
            message: "Get transaction successfully",
            data: getTransactionNonPastEventResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for get transaction past event and unReviewed by uid
export const getTransactionPastEventUnReviewedByUid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid }: any = req.headers
        const getTransactionPastEventUnReviewedResult = await getTransactionPastEventUnReviewedByUidQuery(uid)
        res.status(200).send({
            error: false,
            message: "Get transaction successfully",
            data: getTransactionPastEventUnReviewedResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for get transaciton past event and Reviewed by uid
export const getTransactionPastEventReviewedByUid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid }: any = req.headers
        const getTransactionPastEventReviewedResult = await getTransactionPastEventReviewedByUidQuery(uid)
        res.status(200).send({
            error: false,
            message: "Get transaction successfully",
            data: getTransactionPastEventReviewedResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}