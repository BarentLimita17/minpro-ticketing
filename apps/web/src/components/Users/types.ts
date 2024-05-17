export interface IUserTicketsCard {
    banner: string
    eventTicketName: string
    eventDate: string
    eventName: string
    eventDescription: string
    eventTicketDescription: string
    eventTicketUUID: string
}

export interface IUserUsedTicketsCard {
    banner: string
    eventTicketName: string
    eventDate: string
    eventName: string
    eventDescription: string
    eventTicketDescription: string
}

export interface IUserTransactionsUnReviewedCard {
    banner: string
    eventName: string
    transactionCreatedAt: string
    transactionTotalAmount: number
    transactionDiscount: number
    codeUsed: string
    userEmail: string
    transactionId: number
    eventId: number
}

export interface IUserTransactionsCard {
    banner: string
    eventName: string
    transactionCreatedAt: string
    transactionTotalAmount: number
    transactionDiscount: number
    codeUsed: string
    userEmail: string
    eventId: number
}

export interface ICreateReviewModal {
    visible: boolean
    onClose: () => void
    transactionId: number
    eventId: number
}