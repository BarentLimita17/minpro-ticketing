import * as Yup from "yup";

export const createPromotionSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    code: Yup.string().required("Code is required"),
    description: Yup.string().required("Description is required"),
    discount: Yup.number().required("Discount is required"),
    quantity: Yup.number().required("Quantity is required"),
    validityDate: Yup.date().required("Validity Date is required"),
})