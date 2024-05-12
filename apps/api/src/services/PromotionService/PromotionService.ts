import { ICreatePromotionService, IUpdatePromotionService } from "./types";
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

// query for get promotion by id
export const getPromotionByIdQuery = async (id: string) => {
    return await prisma.promotion.findUnique({
        where: {
            id: Number(id)
        }
    })
}

// query for update promotion
export const updatePromotionQuery = async ({ name, code, description, discount, quantity, validityDate, id }: IUpdatePromotionService) => {
    return await prisma.promotion.update({
        where: {
            id: Number(id)
        },
        data: {
            name: name,
            code: code,
            description: description,
            discount: discount,
            quantity: quantity,
            validityDate: new Date(validityDate)
        }
    })
}

// query for delete promotion
export const deletePromotionQuery = async (id: string) => {
    return await prisma.promotion.delete({
        where: {
            id: Number(id)
        }
    })
}
