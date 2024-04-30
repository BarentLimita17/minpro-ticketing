import { ICreateEventService } from "./types";
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