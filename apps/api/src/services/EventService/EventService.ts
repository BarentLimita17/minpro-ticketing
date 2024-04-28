import { ICreateLocationService, ICreateEventService, ICreateTicketService, ICreatePromotionService } from "./types";
import { prisma } from "@/connection";

// query for get all events
export const getAllEventsQuery = async () => {
    return await prisma.event.findMany()
}

// query for get event by id
export const getEventByIdQuery = async (id: number) => {
    return await prisma.event.findUnique({
        where: {
            id: id
        }
    })
}

// query for get location by name
export const getLocationByNameQuery = async (name: string) => {
    return await prisma.location.findFirst({
        where: {
            name: name
        }
    })
}

// query for get ticket by name
export const getTicketByNameQuery = async (name: string) => {
    return await prisma.eventTicket.findFirst({
        where: {
            name: name
        }
    })
}

// query for get promotion by code
export const getPromotionByCodeQuery = async (code: string) => {
    return await prisma.promotion.findFirst({
        where: {
            code: code
        }
    })
}

// query for create location
export const createLocationQuery = async ({ name, city, details, street, zipCode }: ICreateLocationService) => {
    return await prisma.location.create({
        data: {
            name: name,
            city: city,
            details: details,
            street: street,
            zipCode: zipCode
        }
    })
}

// query for create event
export const createEventQuery = async ({ name, date, startTime, endTime, description, termsAndConditions, locationId, categoryId, userUid }: ICreateEventService) => {
    return await prisma.event.create({
        data: {
            name: name,
            date: new Date(date),
            startTime: new Date(`${date}T${startTime}`),
            endTime: new Date(`${date}T${endTime}`),
            description: description,
            termsAndConditions: termsAndConditions,
            locationId: Number(locationId),
            categoryId: Number(categoryId),
            userUid: userUid
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

// query for create promotion
export const createPromotionQuery = async ({ name, code, description, discount, quantity, validityDate, eventId }: ICreatePromotionService) => {
    console.log(eventId)
    return await prisma.promotion.create({
        data: {
            name: name,
            code: code,
            description: description,
            discount: discount,
            quantity: quantity,
            validityDate: new Date(validityDate),
            eventId: Number(eventId)
        }
    })
}