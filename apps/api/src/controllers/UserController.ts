import { Request, Response, NextFunction } from "express";
import { getUserByUidQuery, getUserTicketByUidQuery, getTransactionByUidQuery } from "@/services/UserService/UserService";

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

// controller for get userTicket by uid
export const getUserTicketByUid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid }: any = req.headers;

        const getUserTicketResult = await getUserTicketByUidQuery(uid)
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

// controller for get transaction by uid
export const getTransactionByUid = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid }: any = req.headers
        const getTransactionResult = await getTransactionByUidQuery(uid)
        res.status(200).send({
            error: false,
            message: "Get transaction successfully",
            data: getTransactionResult
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}