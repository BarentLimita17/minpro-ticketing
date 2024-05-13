"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreatePromotionMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ name, code, description, discount, quantity, validityDate, eventId }: { name: string, code: string, description: string, discount: number, quantity: number, validityDate: string, eventId: string }) => {
            return await axios.post(`http://localhost:8000/event/${eventId}/promotion`, { name, code, description, discount, quantity, validityDate })
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}