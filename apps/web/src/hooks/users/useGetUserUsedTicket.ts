import { useGetUserUsedTicketQuery } from "@/api/Users/useGetUserUsedTicketQuery";

export const useGetUserUsedTicket = () => {
    const { userUsedTickets } = useGetUserUsedTicketQuery();

    return {
        userUsedTickets: userUsedTickets?.data?.data
    }
}