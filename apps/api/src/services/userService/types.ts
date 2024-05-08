export interface IUserService {
    email: string;
    fullname: string;
    password: string;
    code: string;
    roleId: number;
}

export interface ICreateCode {
    code: string;
    expiryDate: Date;
}