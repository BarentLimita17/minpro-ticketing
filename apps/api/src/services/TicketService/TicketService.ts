import { ICreateTicketService } from "./types";
import { prisma } from "@/connection";

// query for get ticket by name
export const getTicketByNameQuery = async (name: string) => {
    return await prisma.eventTicket.findFirst({
        where: {
            name: name
        }
    })
}

// query for create ticket
export const createTicketQuery = async ({ name, description, price, quantity, validityDate, eventId }: ICreateTicketService) => {
    return await prisma.eventTicket.create({
        data: {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            validityDate: new Date(validityDate),
            eventId: Number(eventId)
        }
    })
}