import { prisma } from "@/connection";

// query for get user by uid
export const getUserByUidQuery = async (uid: string) => {
    return await prisma.user.findUnique({
        where: {
            uid: uid
        }
    })
}

// query for get userActiveTicket by uid
export const getUserActiveTicketByUidQuery = async (uid: string) => {
    return await prisma.userTicket.findMany({
        where: {
            userUid: uid,
            Event: {
                date: {
                    gte: new Date(Date.now())
                }
            }
        },
        include: {
            EventTicket: true,
            User: true,
            Event: true
        }
    })
}

// query for get userUsedTicket by uid
export const getUserUsedTicketByUidQuery = async (uid: string) => {
    return await prisma.userTicket.findMany({
        where: {
            userUid: uid,
            Event: {
                date: {
                    lt: new Date(Date.now())
                }
            }
        },
        include: {
            EventTicket: true,
            User: true,
            Event: true
        }
    })
}

// query for get transaction non-past event by uid
export const getTransactionNonPastEventByUidQuery = async (uid: string) => {
    return await prisma.transaction.findMany({
        where: {
            userUid: uid,
            Event: {
                date: {
                    gte: new Date(Date.now())
                }
            }
        },
        include: {
            Event: true,
            User: true,
            promotion: true
        }
    })
}

// query for get transaction past event and unReviewed by uid
export const getTransactionPastEventUnReviewedByUidQuery = async (uid: string) => {
    return await prisma.transaction.findMany({
        where: {
            userUid: uid,
            isReviewed: false,
            Event: {
                date: {
                    lt: new Date(Date.now())
                }
            }
        },
        include: {
            Event: true,
            User: true,
            promotion: true
        }
    })
}

// query for get transaction past event and Reviewed by uid
export const getTransactionPastEventReviewedByUidQuery = async (uid: string) => {
    return await prisma.transaction.findMany({
        where: {
            userUid: uid,
            isReviewed: true,
            Event: {
                date: {
                    lte: new Date(Date.now())
                }
            }
        },
        include: {
            Event: true,
            User: true,
            promotion: true
        }
    })
}