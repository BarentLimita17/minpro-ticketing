import { body } from "express-validator";

export const validatorCreateTicket = [
    body(["name", "description", "price", "quantity", "validityDate"]).notEmpty().withMessage('All field must be filled'),
    body("name").isString().withMessage("Name must be a string"),
    body("description").isString().withMessage("Description must be a string"),
    body("validityDate").isString().withMessage("Validity Date must be a string"),
    body('price').not().isString().withMessage('Price must be number'),
    body('quantity').not().isString().withMessage('Quantity must be number'),
]