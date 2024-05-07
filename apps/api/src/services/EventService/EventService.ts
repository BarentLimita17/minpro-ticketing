import { ICreateEventService, IFilterEventService } from "./types";
import { prisma } from "@/connection";

// query for get all events
export const getAllEventsQuery = async () => {
    return await prisma.event.findMany()
}

// query for get all categories
export const getAllCategoriesQuery = async () => {
    return await prisma.category.findMany()
}

// query for filtering events by category or location
export const getEventByCategoryOrLocationQuery = async (filterParams: any) => {
    const { categoryId, locationId } = filterParams;

    if (categoryId && locationId) {
        // Filter events by both categoryId and locationId
        return await prisma.event.findMany({
            where: {
                categoryId: Number(categoryId),
                locationId: Number(locationId)
            }
        });
    } else if (categoryId) {
        // Filter events by categoryId
        return await prisma.event.findMany({
            where: {
                categoryId: Number(categoryId)
            }
        });
    } else if (locationId) {
        // Filter events by locationId
        return await prisma.event.findMany({
            where: {
                locationId: Number(locationId)
            }
        });
    } else {
        // If neither categoryId nor location is provided, return all events
        return await prisma.event.findMany();
    }
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