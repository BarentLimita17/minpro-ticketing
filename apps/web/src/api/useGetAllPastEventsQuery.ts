import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllPastEventsQuery = () => {
    const { data: allPastEvents } = useQuery({
        queryKey: ['pastEvents'],
        queryFn: async () => {
            const pastEventFetchResult = await axios.get('http://localhost:8000/event/past')
            return pastEventFetchResult
        }
    })

    return {
        allPastEvents
    }
}