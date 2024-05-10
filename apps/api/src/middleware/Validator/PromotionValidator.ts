import { body } from "express-validator";

export const validatorCreatePromotion = [
    body(["name", "code", "description", "discount", "quantity", "validityDate"]).notEmpty().withMessage('All field must be filled'),
    body("name").isString().withMessage("must be a string"),
    body("code").isString().withMessage("code must be a string"),
    body("description").isString().withMessage("description must be a string"),
    body("validityDate").isString().withMessage("validityDate must be a string"),
    body('discount').not().isString().withMessage('Discount must be number'),
    body('quantity').not().isString().withMessage('Quantity must be number'),
]