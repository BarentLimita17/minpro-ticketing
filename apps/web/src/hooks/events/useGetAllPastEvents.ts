import { useGetAllPastEventsQuery } from "@/api/useGetAllPastEventsQuery";

export const useGetAllPastEvents = () => {
    const { allPastEvents } = useGetAllPastEventsQuery();

    return {
        dataAllPastEvents: allPastEvents?.data?.data
    }
}