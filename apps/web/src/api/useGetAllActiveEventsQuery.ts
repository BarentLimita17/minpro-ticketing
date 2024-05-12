import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllActiveEventsQuery = (city: string, eventName: string, categoryId: string) => {
    const { data: allActiveEvents } = useQuery({
        queryKey: ['activeEvents', city, eventName, categoryId],
        queryFn: async () => {
            const activeEventFetchResult = await axios.get(`http://localhost:8000/event?city=${city}&eventName=${eventName}&categoryId=${categoryId}`)
            return activeEventFetchResult
        }
    })

    return {
        allActiveEvents
    }
}