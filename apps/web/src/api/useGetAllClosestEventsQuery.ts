import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllClosestEventsQuery = () => {
    const { data: allClosestEvents } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const eventFetchResult = await axios.get('http://localhost:8000/event/closest')
            return eventFetchResult
        }
    })

    return {
        allClosestEvents
    }
}