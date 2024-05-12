export interface ICreateTicketService {
    name: string;
    description: string;
    price: number;
    quantity: number;
    validityDate: string;
    eventId: string;
}

export interface IUpdateTicketService {
    name: string;
    description: string;
    price: number;
    quantity: number;
    validityDate: string;
    id: string;
}