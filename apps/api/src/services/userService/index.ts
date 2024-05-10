import { IUserService } from "./types"
import { prisma } from "@/connection"
export const userRegistrationService = async({email, fullname, password, code, roleId}: IUserService) => {
    await prisma.user.create({
        data: {
            email, 
            fullname, 
            password,
            code,
            roleId: 1
        }
    })
console.log(userRegistrationService)
}


export const findUserRoleService = async() => {
    return await prisma.role.findMany()
 }


//  export const createCodeService = async({code,expiryDate}: ICreateCode) => {
//     await prisma.referral.create({
//         data: {
//             code,
//             expiryDate
//         }
//     })
// console.log(createCodeService)
// }
