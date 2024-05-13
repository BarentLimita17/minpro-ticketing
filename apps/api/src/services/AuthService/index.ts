import { prisma } from "@/connection";
import { IFindUserByEmailParams } from "./types";

export const findUserByEmail = async({email}: IFindUserByEmailParams) => {
    const findUser =  await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (!findUser || findUser.roleId !== 2 ) throw new Error('User not found! / Unauthorized')
    
        return findUser
}


export const findUserByUid = async({uid}: {uid: string}) => {
    return await prisma.user.findUnique({
        where: {
            uid
        },
        include:{
            role: true
        }
    })
}