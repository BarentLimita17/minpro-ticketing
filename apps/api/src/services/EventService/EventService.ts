import { ICreateEventService, IUpdateEventService } from "./types";
import { prisma } from "@/connection";
import { Prisma } from '@prisma/client';

// query for get all events by city and event name
export const getAllActiveEventsQuery = async (city?: string, eventName?: string, categoryId?: string) => {
    let queryFilters: Prisma.EventWhereInput = {
        date: {
            gte: new Date(Date.now())
        }
    };

    if (city) {
        queryFilters = {
            ...queryFilters,
            location: {
                city: {
                    contains: city
                }
            }
        };
    }
    if (eventName) {
        queryFilters = {
            ...queryFilters,
            name: {
                contains: eventName
            }
        };
    }
    if (categoryId) {
        queryFilters = {
            ...queryFilters,
            Category: {
                id: Number(categoryId)
            }
        };
    }
    return await prisma.event.findMany({
        where: queryFilters,
        include: {
            location: true,
            Category: true,
            eventTicket: true
        }
    });
};

// query for get all past events
export const getAllPastEventsQuery = async () => {
    return await prisma.event.findMany({
        where: {
            date: {
                lt: new Date(Date.now())
            }
        },
        include: {
            location: true,
            Category: true,
            eventTicket: true
        }
    })
}

// query for get all closest events
export const getAllClosestEventsQuery = async () => {
    return await prisma.event.findMany({
        where: {
            date: {
                gte: new Date(Date.now()),
                lt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            }
        },
        include: {
            location: true,
            Category: true,
            eventTicket: true
        }
    })
}

// query for get all categories
export const getAllCategoriesQuery = async () => {
    return await prisma.category.findMany()
}

// query for get event by id
export const getEventByIdQuery = async (id: number) => {
    return await prisma.event.findUnique({
        where: {
            id: id
        },
        include: {
            location: true,
            Category: true,
            eventTicket: true,
            promotion: true
        }
    })
}

// query for create event
export const createEventQuery = async (data: ICreateEventService, uploadedBannerUrl: any, uploadedThumbnailUrl: any) => {
    return await prisma.event.create({
        data: {
            name: data.name,
            date: new Date(data.date),
            startTime: new Date(`${data.date}T${data.startTime}`),
            endTime: new Date(`${data.date}T${data.endTime}`),
            description: data.description,
            termsAndConditions: data.termsAndConditions,
            locationId: Number(data.locationId),
            categoryId: Number(data.categoryId),
            userUid: data.userUid,
            bannerUrl: uploadedBannerUrl[0].path,
            thumbnailUrl: uploadedThumbnailUrl[0].path
        }
    })
}

// query for publish event
export const publishEventQuery = async (eventId: number) => {
    return await prisma.event.update({
        where: {
            id: Number(eventId)
        },
        data: {
            isPublished: true
        }
    })
}

// query for update event
export const updateEventQuery = async (eventId: number, data: IUpdateEventService, uploadedBannerUrl: any, uploadedThumbnailUrl: any) => {
    console.log(data)
    return await prisma.event.update({
        where: {
            id: Number(eventId)
        },
        data: {
            name: data.name,
            date: new Date(data.date),
            startTime: new Date(`${data.date}T${data.startTime}`),
            endTime: new Date(`${data.date}T${data.endTime}`),
            description: data.description,
            termsAndConditions: data.termsAndConditions,
            locationId: Number(data.locationId),
            categoryId: Number(data.categoryId),
            bannerUrl: uploadedBannerUrl[0].path,
            thumbnailUrl: uploadedThumbnailUrl[0].path
        }
    })
}