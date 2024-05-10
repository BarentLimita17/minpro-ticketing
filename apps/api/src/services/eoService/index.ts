import { IEOService } from "./types"
import { prisma } from "@/connection"

export const eoRegistrationService = async({email, fullname, password, code, roleId=2}: IEOService) => {
    await prisma.user.create({
        data: {
            email, 
            fullname, 
            password,
            code,
            roleId: 2
        }
    })
console.log(eoRegistrationService)
}


// export const findUserRoleService = async() => {
//     return await prisma.role.findMany()
//  }


//  export const createCodeService = async({code,expiryDate}: ICreateCode) => {
//     await prisma.referral.create({
//         data: {
//             code,
//             expiryDate
//         }
//     })
// console.log(createCodeService)
// }
