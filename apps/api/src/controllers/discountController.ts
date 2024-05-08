import { Response, Request, NextFunction } from "express"
import { userRegistrationService } from "@/services/userService"
export const discountRegistration = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {email, fullname, password, code, roleId} = req.body
        
        
        await userRegistrationService({
            email, 
            fullname, 
            password,
            code, 
            roleId
        })

        res.status(201).send({
            error: false, 
            message: 'Registration Success!', 
            data: null
        })
        console.log(req.body)
    } catch (error: any) {
        
        next(error)
    }
}