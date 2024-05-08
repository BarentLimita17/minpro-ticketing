// import { prisma } from "../../connection";
// import { IFindUserByUidParams } from "../types";

// export const addPointsBalanceService = async ({ uid}: IFindUserByUidParams) => {
//     const addPointsBalance = await prisma.user.findUnique({
//         where: {
//             pointsBalance
//         }
//     })

//     if (!findUser || findUser.roleId !== 2 ) throw new Error('User not found!')

//     return findUser
// }

// // export const findEmployeeByUid = async({uid}: {uid: string}) => {
// //     return await prisma.employee.findUnique({
// //         where: {
// //             uid
// //         },
// //         include:{
// //             position: true
// //         }
// //     })
// // }