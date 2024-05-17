import { useGetUserActiveTicketQuery } from "@/api/Users/useGetUserActiveTicketQuery";

export const useGetUserActiveTicket = () => {
    const { userActiveTickets } = useGetUserActiveTicketQuery();

    return {
        userActiveTickets: userActiveTickets?.data?.data
    }
}