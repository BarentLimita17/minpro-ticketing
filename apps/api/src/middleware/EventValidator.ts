import { body } from "express-validator";

export const validatorCreateEvent = [
    body(["name", "date", "startTime", "endTime", "description", "termsAndConditions", "locationId", "categoryId", "userUid"]).notEmpty().withMessage('All field must be filled'),
    body("name").isString().withMessage("Name must be a string"),
    body("description").isString().withMessage("Description must be a string"),
    body("termsAndConditions").isString().withMessage("Terms and Conditions must be a string"),
    body('categoryId').not().isString().withMessage('Category Id must be number'),
    body('locationId').not().isString().withMessage('Location Id must be number')
]