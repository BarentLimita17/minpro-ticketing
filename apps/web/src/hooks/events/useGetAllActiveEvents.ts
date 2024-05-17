import { useGetAllActiveEventsQuery } from "@/api/useGetAllActiveEventsQuery";

export const useGetAllActiveEvents = (city: string, eventName: string, categoryId: string, page: number) => {
    const { allActiveEvents, refetchAllActiveEvents } = useGetAllActiveEventsQuery(city, eventName, categoryId, page);

    return {
        dataAllActiveEvents: allActiveEvents?.data,
        refetchAllActiveEvents
    }
}