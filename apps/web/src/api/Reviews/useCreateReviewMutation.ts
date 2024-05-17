"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateReviewMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutateAsync } = useMutation({
        mutationFn: async ({ rating, feedback, suggestion, eventId, transactionId, userUid }: { rating: number, feedback: string, suggestion: string, eventId: number, transactionId: number, userUid: string }) => {
            const createReviewResponse = await axios.post('http://localhost:8000/review', { rating, feedback, suggestion, eventId, transactionId, userUid })
            return createReviewResponse
        },
        onSuccess,
        onError
    })

    return {
        mutateAsync
    }
}