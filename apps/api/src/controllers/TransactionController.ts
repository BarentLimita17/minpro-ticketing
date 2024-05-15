import { createTransactionQuery, getPromotionByCodeQuery } from "@/services/TransactionService/TransactionService";
import { Request, Response, NextFunction } from "express";

// controller for get promotion by code
export const getPromotionByCode = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { code } = req.body

        const getPromotionResult = await getPromotionByCodeQuery(code)

        if (!getPromotionResult) throw new Error("Promotion not found.")

        res.status(200).send({
            error: false,
            message: "Promotion found",
            data: getPromotionResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// controller for user buy ticket
export const createTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userUid, eventId, eventTicket, promotionCode } = req.body

        if (promotionCode) {
            const getPromotionResult = await getPromotionByCodeQuery(promotionCode)

            if (!getPromotionResult) throw new Error("Promotion not found.")
            if (getPromotionResult.quantity <= 0) throw new Error("Promotion is out of stock.")
            if (getPromotionResult.eventId != eventId) throw new Error("Promotion is not valid for this event.")
        }

        const createTransactionResult = await createTransactionQuery({ userUid, eventId, eventTicket, promotionCode })

        res.status(201).send({
            error: false,
            message: "Transaction created successfully",
            data: createTransactionResult
        })

    } catch (error) {
        console.log(error)
        next(error)
    }
}