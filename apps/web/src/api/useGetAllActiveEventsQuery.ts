import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllActiveEventsQuery = (city: string, eventName: string, categoryId: string, page: number) => {
    const { data: allActiveEvents, refetch: refetchAllActiveEvents } = useQuery({
        queryKey: ['activeEvents', city, eventName, categoryId, page],
        queryFn: async () => {
            const activeEventFetchResult = await axios.get(`http://localhost:8000/event?city=${city}&eventName=${eventName}&categoryId=${categoryId}&page=${page}`)
            return activeEventFetchResult
        }
    })

    return {
        allActiveEvents,
        refetchAllActiveEvents
    }
}