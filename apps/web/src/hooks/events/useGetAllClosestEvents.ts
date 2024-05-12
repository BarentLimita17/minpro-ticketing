import { useGetAllClosestEventsQuery } from "@/api/useGetAllClosestEventsQuery";

export const useGetAllClosestEvents = () => {
    const { allClosestEvents } = useGetAllClosestEventsQuery();

    return {
        dataAllClosestEvents: allClosestEvents?.data?.data
    }
}