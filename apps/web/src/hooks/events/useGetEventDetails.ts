'use client'
import { useGetEventDetailsQuery } from "@/api/useGetEventDetailsQuery";
import { useEffect } from "react";

export const useGetEventDetails = (eventId: number) => {
    const { eventDetails, refetchEventDetails } = useGetEventDetailsQuery(eventId);

    return {
        dataEventDetails: eventDetails?.data?.data,
        refetchEventDetails
    }
}