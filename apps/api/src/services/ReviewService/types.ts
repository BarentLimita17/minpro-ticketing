export interface ICreateReviewService {
    userUid: string
    rating: number
    feedback: string
    suggestion: string
    eventId: number
    transactionId: number
}