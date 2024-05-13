import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetTicketDetailsQuery = (ticketId: number) => {
    const { data: ticketDetails, refetch } = useQuery({
        queryKey: ['ticketDetails', ticketId],
        queryFn: async () => {
            const ticketDetailsFetchResult = await axios.get(`http://localhost:8000/event/${ticketId}/ticket`)
            return ticketDetailsFetchResult
        }
    })

    return {
        ticketDetails,
        refetchTicketDetails: refetch
    }
}