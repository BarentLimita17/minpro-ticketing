export interface ICreatePromotionService {
    name: string;
    code: string;
    description: string;
    discount: number;
    quantity: number;
    validityDate: string;
    eventId: string;
}