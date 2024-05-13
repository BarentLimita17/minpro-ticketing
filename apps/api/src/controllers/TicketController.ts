import { Request, Response, NextFunction } from "express";
import { createTicketQuery, getTicketByIdQuery, getTicketByNameQuery, updateTicketQuery, deleteTicketQuery } from "@/services/TicketService/TicketService";

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

// controller for get ticket by id
export const getTicketById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const ticket = await getTicketByIdQuery(id)
        res.status(200).send({
            error: false,
            message: "Ticket fetched successfully",
            data: ticket
        })
    } catch (error) {
        next(error)
    }
}

// controller for update ticket
export const updateTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description, price, quantity, validityDate } = req.body
        const { id } = req.params

        const updatedTicket = await updateTicketQuery({ name, description, price, quantity, validityDate, id })

        res.status(200).send({
            error: false,
            message: "Ticket updated successfully",
            data: updatedTicket
        })
    } catch (error) {
        next(error)
    }
}

// controller for delete ticket
export const deleteTicket = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const deletedTicket = await deleteTicketQuery(id)
        res.status(200).send({
            error: false,
            message: "Ticket deleted successfully",
            data: deletedTicket
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}