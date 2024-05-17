import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserTransactionNonPastEventQuery = () => {
    const { data: userTransactionsNonPastEvent, refetch: refetchUserTransactionsNonPastEvent } = useQuery({
        queryKey: ['userTransactionsNonPastEvent'],
        queryFn: async () => {
            const userTransactionsNonPastEventFetchResult = await axios.get('http://localhost:8000/user/transaction-non-past-event', {
                headers: {
                    uid: 'clw3rc2u700011163aislktlf'
                }
            })
            return userTransactionsNonPastEventFetchResult
        }
    })

    return {
        userTransactionsNonPastEvent,
        refetchUserTransactionsNonPastEvent
    }
}