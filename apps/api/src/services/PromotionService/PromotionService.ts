import { ICreatePromotionService } from "./types";
import { prisma } from "@/connection";

// query for get promotion by code
export const getPromotionByCodeQuery = async (code: string) => {
    return await prisma.promotion.findFirst({
        where: {
            code: code
        }
    })
}

// query for create promotion
export const createPromotionQuery = async ({ name, code, description, discount, quantity, validityDate, eventId }: ICreatePromotionService) => {
    return await prisma.promotion.create({
        data: {
            name: name,
            code: code,
            description: description,
            discount: discount,
            quantity: quantity,
            validityDate: new Date(validityDate),
            eventId: Number(eventId)
        }
    })
}
