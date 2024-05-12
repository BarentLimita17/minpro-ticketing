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

export interface IUpdateEventService {
    id: number;
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    description: string;
    termsAndConditions: string;
    locationId: number;
    categoryId: number;
}

export interface IFilterEventService {
    categoryId?: number;
    locationId?: number;
}
