import { Request, Response, NextFunction } from "express";
import { createPromotionQuery, getPromotionByIdQuery, getPromotionByCodeQuery, updatePromotionQuery, deletePromotionQuery } from "@/services/PromotionService/PromotionService";

// controller for create promotion
export const createPromotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const eventId = req.params.id
        const { name, code, description, discount, quantity, validityDate } = req.body

        const createdPromotion = await createPromotionQuery({ name, code, description, discount, quantity, validityDate, eventId })

        res.status(201).send({
            error: false,
            message: "Promotion created successfully",
            data: createdPromotion
        })
    } catch (error) {
        next(error)
    }
}

// controller for get promotion by id
export const getPromotionById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const promotion = await getPromotionByIdQuery(id)
        res.status(200).send({
            error: false,
            message: "Promotion fetched successfully",
            data: promotion
        })
    } catch (error) {
        next(error)
    }
}

// controller for update promotion
export const updatePromotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, code, description, discount, quantity, validityDate } = req.body
        const { id } = req.params

        const findPromotionByCodeResult = await getPromotionByCodeQuery(code)
        if (findPromotionByCodeResult?.code == code) throw new Error("Promotion already exists.")

        const updatedPromotion = await updatePromotionQuery({ name, code, description, discount, quantity, validityDate, id })

        res.status(200).send({
            error: false,
            message: "Promotion updated successfully",
            data: updatedPromotion
        })
    } catch (error) {
        next(error)
    }
}

// controller for delete promotion
export const deletePromotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const deletedPromotion = await deletePromotionQuery(id)
        res.status(200).send({
            error: false,
            message: "Promotion deleted successfully",
            data: deletedPromotion
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}