import { prisma } from "@/connection";

// query for get user by uid
export const getUserByUidQuery = async (uid: string) => {
    return await prisma.user.findUnique({
        where: {
            uid: uid
        }
    })
}

// query for get userTicket by uid
export const getUserTicketByUidQuery = async (uid: string) => {
    return await prisma.userTicket.findMany({
        where: {
            userUid: uid
        },
        include: {
            EventTicket: true,
            User: true,
            Event: true
        }
    })
}

// query for get transaction by uid
export const getTransactionByUidQuery = async (uid: string) => {
    return await prisma.transaction.findMany({
        where: {
            userUid: uid
        },
        include: {
            Event: true,
            User: true,
            promotion: true
        }
    })
}