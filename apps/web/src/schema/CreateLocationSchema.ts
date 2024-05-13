import * as Yup from "yup";

export const createLocationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    city: Yup.string().required("City is required"),
    details: Yup.string().required("Details is required"),
    street: Yup.string().required("Street is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    latitude: Yup.string().required("Latitude is required"),
    longitude: Yup.string().required("Longitude is required")
})