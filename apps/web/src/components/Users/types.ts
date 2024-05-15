export interface IUserTicketsCard {
    banner: string
    eventTicketName: string
    eventDate: string
    eventName: string
    eventDescription: string
    eventTicketDescription: string
    eventTicketUUID: string
}

export interface IUserTransactionsCard {
    banner: string
    eventName: string
    transactionCreatedAt: string
    transactionTotalAmount: number
    transactionDiscount: number
    codeUsed: string
    userEmail: string
}