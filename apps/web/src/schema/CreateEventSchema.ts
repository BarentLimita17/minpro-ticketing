import * as Yup from "yup";

export const createEventSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    categoryId: Yup.number().required("Category is required"),
    locationId: Yup.number().required("Location is required"),
    termsAndConditions: Yup.string().required("Terms and Conditions is required"),
    date: Yup.string().required("Date is required"),
    startTime: Yup.string().required("Start Time is required"),
    endTime: Yup.string().required("End Time is required")
})