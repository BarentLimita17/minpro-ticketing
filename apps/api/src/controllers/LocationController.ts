import { Request, Response, NextFunction } from "express";
import { createLocationQuery, getLocationByNameQuery } from "@/services/LocationService/LocationService";

// controller for create location
export const createLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, city, details, street, zipCode } = req.body

        const findLocationByNameResult = await getLocationByNameQuery(name)
        if (findLocationByNameResult?.details == details) throw new Error("Location already exists.")

        const createdLocation = await createLocationQuery({ name, city, details, street, zipCode })

        res.status(201).send({
            error: false,
            message: "Location created successfully",
            data: createdLocation
        })

    } catch (error) {
        next(error)
    }
}