import { useGetUserTicketQuery } from "@/api/Users/useGetUserTicketQuery";

export const useGetUserTicket = () => {
    const { userTickets } = useGetUserTicketQuery();

    return {
        userTickets: userTickets?.data?.data
    }
}