import { ICreateLocationService } from "./types";
import { prisma } from "@/connection";

// query for get location by name
export const getLocationByNameQuery = async (name: string) => {
    return await prisma.location.findFirst({
        where: {
            name: name
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