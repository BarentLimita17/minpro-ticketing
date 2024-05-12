"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const usePublishEventMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ eventId }: { eventId: string }) => {
            return await axios.put(`http://localhost:8000/event/${eventId}/publish`)
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}