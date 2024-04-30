import { body } from "express-validator";

export const validatorCreateLocation = [
    body(["name", "city", "details", "street", "zipCode"]).notEmpty().isString().withMessage('All field must be filled'),
    body("name").isString().withMessage("Name must be a string"),
    body("city").isString().withMessage("City must be a string"),
    body("details").isString().withMessage("Details must be a string"),
    body("street").isString().withMessage("Street must be a string"),
    body("zipCode").isString().withMessage("Zip Code must be a string"),
]