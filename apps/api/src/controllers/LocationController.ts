import { Request, Response, NextFunction } from "express";
import { createLocationQuery, getLocationByNameQuery, getAllLocationsQuery } from "@/services/LocationService/LocationService";

// controller for get all locations
export const getAllLocations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getAllLocationsResult = await getAllLocationsQuery()

        res.status(200).send({
            error: false,
            message: "Locations fetched successfully",
            data: getAllLocationsResult
        })
    } catch (error) {
        next(error)
    }
}

// controller for create location
export const createLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, city, details, street, zipCode, latitude, longitude } = req.body

        const findLocationByNameResult = await getLocationByNameQuery(name)
        if (findLocationByNameResult?.details == details) throw new Error("Location already exists.")

        const createdLocation = await createLocationQuery({ name, city, details, street, zipCode, latitude, longitude })

        res.status(201).send({
            error: false,
            message: "Location created successfully",
            data: createdLocation
        })

    } catch (error) {
        next(error)
    }
}