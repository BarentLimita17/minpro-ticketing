"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateEventMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ data, eventId }: { data: {}, eventId: string }) => {
            return await axios.put(`http://localhost:8000/event/${eventId}`, data)
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}