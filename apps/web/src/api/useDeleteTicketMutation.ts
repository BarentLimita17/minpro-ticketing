"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteTicketMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ ticketId }: { ticketId: string }) => {
            return await axios.delete(`http://localhost:8000/event/${ticketId}/ticket`)
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}