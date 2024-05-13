"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateEventMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {

    const { mutateAsync } = useMutation({
        mutationFn: async (data: {}) => {
            const createEventResponse = await axios.post('http://localhost:8000/event/', data)
            return createEventResponse
        },
        onSuccess,
        onError
    })

    return {
        mutateAsync
    }
}