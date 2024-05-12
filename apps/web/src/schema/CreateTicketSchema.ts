import * as Yup from "yup";

export const createTicketSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required"),
    quantity: Yup.number().required("Quantity is required"),
    validityDate: Yup.string().required("Validity Date is required")
})