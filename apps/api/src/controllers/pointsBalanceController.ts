// import { Request, Response, NextFunction } from 'express';
// // import { findEmployeeByEmail } from '../services/pointService';
// // import { ComparePassword } from '../helpers/Hashing';
// // import { createToken } from '../helpers/Token';
// export const login = async(req: Request, res: Response, next: NextFunction) => {
//     try {
//         const {email, password} = req.body 

//         const findEmployeeByEmailResult = await findEmployeeByEmail({email})
        
//         const comparePasswordResult = await ComparePassword({
//             passwordFromClient: password, 
//             passwordFromDatabase: findEmployeeByEmailResult.password})
    
//         if(!comparePasswordResult) throw new Error('Password Doesnt Match')
        
//         const accessToken = createToken({uid: findEmployeeByEmailResult.uid})
//         res.status(201).send({
//             error: false,
//             message: 'Login Success',
//             data: {
//                 accessToken
//             }
//         })
//     } catch (error) {
//         next(error)
//     }
// }