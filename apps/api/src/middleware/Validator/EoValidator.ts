// import { body } from 'express-validator';

// export const validatorCreateEO = [
//     body(['email','fullname','password','code']).notEmpty().withMessage('Data Must be Completed!'),
//     body('email').isString().isEmail().withMessage('Email Must Valid!'),
//     body('fullname').isString().withMessage('Fullname Must Be String'),
//     body('password').isString().isLength({min: 5, max: 15}).withMessage('Password Have Minimum Lengh 5 Characters and Maximum Length 15 Characters'),
//     body('code').isString().withMessage('Code Must Be String')
// ]