"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateTicketMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ name, description, price, quantity, validityDate, ticketId }: { name: string, description: string, quantity: number, validityDate: string, price: number, ticketId: string }) => {
            return await axios.put(`http://localhost:8000/event/${ticketId}/ticket`, { name, description, quantity, validityDate, price })
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}