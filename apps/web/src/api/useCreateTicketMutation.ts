"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateTicketMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async (data) => {
            return await axios.post('http://localhost:8000/event/:id/ticket', data)
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}