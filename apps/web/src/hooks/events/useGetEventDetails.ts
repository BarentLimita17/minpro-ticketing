import { useGetEventDetailsQuery } from "@/api/useGetEventDetailsQuery";

export const useGetEventDetails = (eventId: number) => {
    const { eventDetails } = useGetEventDetailsQuery(eventId);
    const { refetchEventDetails } = useGetEventDetailsQuery(eventId);

    return {
        dataEventDetails: eventDetails?.data?.data,
        refetchEventDetails
    }
}