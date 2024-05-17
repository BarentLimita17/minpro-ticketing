import { prisma } from "@/connection";
import { ICreateReviewService } from "./types";

// query for create review
export const createReviewQuery = async ({ userUid, rating, feedback, suggestion, eventId, transactionId }: ICreateReviewService) => {
    return await prisma.$transaction(async (tx) => {
        const createReview = await tx.review.create({
            data: {
                userUid: userUid,
                rating: Number(rating),
                feedback: feedback,
                suggestion: suggestion,
                eventId: Number(eventId),
                transactionId: Number(transactionId)
            }
        })

        const updateIsReviewed = await tx.transaction.update({
            where: {
                id: Number(transactionId)
            },
            data: {
                isReviewed: true
            }
        })
    })
}

// query for get review details by event id
export const getReviewByEventIdQuery = async (eventId: number) => {
    return await prisma.review.findMany({
        where: {
            eventId: Number(eventId)
        },
        include: {
            User: true,
            Event: true
        }
    })
}