import *  as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config()
export const createToken = ({uid}: {uid: string}) => {
    return jwt.sign({uid}, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '1d'})
}

export interface IReqAccessToken extends Request {
    payload: any
    Headers: {
        accesstoken: string
    }
}

export const tokenVerify = (req: IReqAccessToken, res: Response, next: NextFunction) => {
    try{
        const reqToken = req as IReqAccessToken
        const {accesstoken} = reqToken.headers

        if (!accesstoken) {
            throw new Error('Token Not Found')
        }

        const decodedPaload = jwt.verify(accesstoken as string, process.env.JWT_SECRET_KEY as string)

        reqToken.payload = decodedPaload
        next()
    } catch (error) {
        next(error)
    }
}