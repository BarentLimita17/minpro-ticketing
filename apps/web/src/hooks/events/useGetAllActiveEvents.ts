import { useGetAllActiveEventsQuery } from "@/api/useGetAllActiveEventsQuery";

export const useGetAllActiveEvents = (city: string, eventName: string, categoryId: string) => {
    const { allActiveEvents } = useGetAllActiveEventsQuery(city, eventName, categoryId);

    return {
        dataAllActiveEvents: allActiveEvents?.data?.data
    }
}