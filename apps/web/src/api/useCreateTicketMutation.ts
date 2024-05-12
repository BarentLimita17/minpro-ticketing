"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateTicketMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ name, description, price, quantity, validityDate, eventId }: { name: string, description: string, quantity: number, validityDate: string, price: number, eventId: string }) => {
            return await axios.post(`http://localhost:8000/event/${eventId}/ticket`, { name, description, quantity, validityDate, price })
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}