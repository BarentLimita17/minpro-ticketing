import { prisma } from "@/connection";
import { ICreateTransactionService } from "./types";

// query for get eventTicket by id
export const getEventTicketByIdQuery = async (id: number) => {
    return await prisma.eventTicket.findUnique({
        where: {
            id: id
        }
    })
}

// query for get promotion by code
export const getPromotionByCodeQuery = async (code: string) => {
    return await prisma.promotion.findFirst({
        where: {
            code: code
        }
    })
}

// query for create transaction
export const createTransactionQuery = async ({ userUid, eventId, eventTicket, promotionCode }: ICreateTransactionService) => {
    let totalTicketAmount: number;
    let totalTransactionAmount: number = 0;
    let createTransaction: any;
    return await prisma.$transaction(async (tx) => {
        eventTicket.forEach(async (ticket) => {
            for (let i = 0; i < ticket.quantity; i++) {
                const createUserTicket = await tx.userTicket.create({
                    data: {
                        userUid: userUid,
                        eventId: Number(eventId),
                        eventTicketId: ticket.eventTicketId,
                    }
                })
                const updateTicketQuantity = await tx.eventTicket.update({
                    where: {
                        id: ticket.eventTicketId
                    },
                    data: {
                        quantity: {
                            decrement: 1
                        }
                    }
                })
            }
        })

        for (const item of eventTicket) {
            const getEventTicketResult = await getEventTicketByIdQuery(item.eventTicketId)
            if (getEventTicketResult?.price) {
                totalTicketAmount = getEventTicketResult?.price * item.quantity
            }
            totalTransactionAmount += totalTicketAmount;
        }

        const getPromotionResult = await getPromotionByCodeQuery(promotionCode)

        if (promotionCode) {
            if (getPromotionResult) {
                createTransaction = await tx.transaction.create({
                    data: {
                        userUid: userUid,
                        promotionId: getPromotionResult?.id,
                        eventId: Number(eventId),
                        totalTransactionAmount: totalTransactionAmount - (totalTransactionAmount * (getPromotionResult?.discount / 100))
                    }
                })
                const updatePromotionQuantity = await tx.promotion.update({
                    where: {
                        id: getPromotionResult?.id
                    },
                    data: {
                        quantity: getPromotionResult?.quantity - 1
                    }
                })
            }
        } else {
            createTransaction = await tx.transaction.create({
                data: {
                    userUid: userUid,
                    promotionId: null,
                    eventId: Number(eventId),
                    totalTransactionAmount: totalTransactionAmount
                }
            })
        }

        for (const item of eventTicket) {
            const getEventTicketResult = await getEventTicketByIdQuery(item.eventTicketId)
            if (getEventTicketResult?.price) {
                const createTransactionDetail = await tx.transactionDetail.create({
                    data: {
                        quantity: item.quantity,
                        price: getEventTicketResult?.price,
                        eventTicketId: item.eventTicketId,
                        transactionId: createTransaction.id,
                        totalTicketAmount: item.quantity * getEventTicketResult?.price
                    }
                })
            }
        }
    })
}