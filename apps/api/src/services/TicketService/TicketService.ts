import { ICreateTicketService, IUpdateTicketService } from "./types";
import { prisma } from "@/connection";

// query for get ticket by name
export const getTicketByNameQuery = async (name: string) => {
    return await prisma.eventTicket.findFirst({
        where: {
            name: name
        }
    })
}

// query for get ticket by id
export const getTicketByIdQuery = async (id: string) => {
    return await prisma.eventTicket.findFirst({
        where: {
            id: Number(id)
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

// query for update ticket
export const updateTicketQuery = async ({ name, description, price, quantity, validityDate, id }: IUpdateTicketService) => {
    return await prisma.eventTicket.update({
        where: {
            id: Number(id)
        },
        data: {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            validityDate: new Date(validityDate)
        }
    })
}

// query for delete ticket
export const deleteTicketQuery = async (id: string) => {
    return await prisma.eventTicket.delete({
        where: {
            id: Number(id)
        }
    })
}