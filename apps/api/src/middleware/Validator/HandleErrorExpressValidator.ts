import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const handleErrorValidator = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next()
}