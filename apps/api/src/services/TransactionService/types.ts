export interface ICreateTransactionService {
    userUid: string,
    eventId: number,
    eventTicket: [{
        eventTicketId: number,
        quantity: number
    }],
    promotionCode: string,
}