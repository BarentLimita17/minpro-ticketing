"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateTransactionMutation = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutateAsync } = useMutation({
        mutationFn: async ({ userUid, eventId, eventTicket, promotionCode }: { userUid: string, eventId: number, eventTicket: any, promotionCode: string }) => {
            const createTransactionResponse = await axios.post('http://localhost:8000/transaction', { userUid, eventId, eventTicket, promotionCode })
            return { createTransactionResponse, eventId }
        },
        onSuccess,
        onError
    })

    return {
        mutateAsync
    }
}