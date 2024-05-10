import { Request, Response, NextFunction } from "express";
import { createTicketQuery, getTicketByNameQuery } from "@/services/TicketService/TicketService";

// controller for create ticket
export const createTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const eventId = req.params.id
        const { name, description, price, quantity, validityDate } = req.body

        const findTicketByNameResult = await getTicketByNameQuery(name)
        if (findTicketByNameResult?.name == name) throw new Error("Ticket already exists.")

        const createdTicket = await createTicketQuery({ name, description, price, quantity, validityDate, eventId })

        res.status(201).send({
            error: false,
            message: "Ticket created successfully",
            data: createdTicket
        })
    } catch (error) {
        next(error)
    }
}