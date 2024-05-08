import { Request, Response, NextFunction } from "express";
import { findUserByEmail } from "@/services/AuthService";
import { ComparePassword } from "@/helpers/Hashing";
import { createToken } from "@/helpers/Token";
export const login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body

        const findUserByEmailResult = await findUserByEmail({email})

        const comparePasswordResult = await ComparePassword({
            passwordFromClient: password,
            passwordFromDatabase: findUserByEmailResult.password
        })

        if(!comparePasswordResult) throw new Error('Password Doesnt Match')

        const accessToken = createToken({uid: findUserByEmailResult.uid})
        
        res.status(201).send({
            error: false,
            message: 'Login Success',
            data: {
                accessToken,
                fullname: findUserByEmailResult.fullname
            }
        })
    } catch (error) {
        next(error)
    }
}