import { findUserByEmail, findUserByUid } from "@/services/AuthService";
import { NextFunction, Response, Request } from "express";


interface IReqPayload extends Request{
    payload: any
} 

export const roleVerifyEO = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const reqPayload = req as IReqPayload
        const payload = reqPayload.payload
        
        const findUserByUidResult = await findUserByUid({uid: payload.uid})
        if(!findUserByUidResult) throw new Error('User Not Found!')
            
        const authorized = ['Event Organizer']
        if(authorized.includes(findUserByUidResult?.role.name)){
            next()
        }else{
            throw new Error('Unauthorized User')
        }
    } catch (error) {
        next(error)
    }
}