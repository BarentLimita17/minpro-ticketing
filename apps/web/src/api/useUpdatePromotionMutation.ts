"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdatePromotionMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ name, code, description, discount, quantity, validityDate, promotionId }: { name: string, code: string, description: string, discount: number, quantity: number, validityDate: string, promotionId: string }) => {
            return await axios.put(`http://localhost:8000/event/${promotionId}/promotion`, { name, code, description, discount, quantity, validityDate })
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}