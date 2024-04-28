export interface ICreateLocationService {
    name: string;
    city: string;
    details: string;
    street: string;
    zipCode: string;
}

export interface ICreateEventService {
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    description: string;
    termsAndConditions: string;
    locationId: number;
    categoryId: number;
    userUid: string;
}

export interface ICreateTicketService {
    name: string;
    description: string;
    price: number;
    quantity: number;
    validityDate: string;
    eventId: string;
}

export interface ICreatePromotionService {
    name: string;
    code: string;
    description: string;
    discount: number;
    quantity: number;
    validityDate: string;
    eventId: string;
}