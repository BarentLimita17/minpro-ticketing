import { Request, Response, NextFunction } from "express";
import { createPromotionQuery, getPromotionByCodeQuery } from "@/services/PromotionService/PromotionService";

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