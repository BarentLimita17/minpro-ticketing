import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetEventDetailsQuery = (eventId: number) => {
    const { data: eventDetails, refetch } = useQuery({
        queryKey: ['eventDetails', eventId],
        queryFn: async () => {
            const eventDetailsFetchResult = await axios.get(`http://localhost:8000/event/${eventId}`)
            return eventDetailsFetchResult
        }
    })
    const refetchEventDetails = refetch;

    return {
        eventDetails,
        refetchEventDetails
    }
}