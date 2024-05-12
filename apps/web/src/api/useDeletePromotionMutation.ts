'use client'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeletePromotionMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ promotionId }: { promotionId: string }) => {
            return await axios.delete(`http://localhost:8000/event/${promotionId}/promotion`)
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}