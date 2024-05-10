import { Response, Request, NextFunction } from "express"
import { userRegistrationService, findUserRoleService } from "@/services/UserService"
import { HashPassword } from "@/helpers/Hashing"
export const eoRegistration = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {email, fullname, password, code, roleId=2} = req.body
        
        const HashedPassword = await HashPassword({password})

        await userRegistrationService({
            email, 
            fullname, 
            password: HashedPassword,
            code, 
            roleId: 2
        })

        res.status(201).send({
            error: false, 
            message: 'EO Registration Success!', 
            data: null
        })
        console.log(req.body)
    } catch (error: any) {
        
        next(error)
    }
}

export const findUserRole = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const findUserRole = await findUserRoleService()

        res.status(200).send({
            error: false, 
            message: 'Get Employee Position Success!', 
            data: findUserRole
        })
    } catch (error) {
        next(error)
    }
}

// export const createCode = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//         const {code, expiryDate} = req.body
        
        
//         await createCodeService({
//             code,
//             expiryDate
//         })

//         res.status(201).send({
//             error: false, 
//             message: 'Code added!', 
//             data: null
//         })
//         console.log(req.body)
//     } catch (error: any) {
        
//         next(error)
//     }
// }