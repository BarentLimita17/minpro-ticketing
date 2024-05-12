import { useGetTicketDetailsQuery } from "@/api/useGetTicketDetailsQuery";

export const useGetTicketDetails = (ticketId: number) => {
    const { ticketDetails } = useGetTicketDetailsQuery(ticketId);
    const { refetchTicketDetails } = useGetTicketDetailsQuery(ticketId);

    return {
        dataTicketDetails: ticketDetails?.data?.data,
        refetchTicketDetails
    }
}