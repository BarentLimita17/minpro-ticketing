import { useGetUserTransactionNonPastEventQuery } from "@/api/Users/useGetUserTransactionNonPastEventQuery";

export const useGetUserTransactionNonPastEvent = () => {
    const { userTransactionsNonPastEvent, refetchUserTransactionsNonPastEvent } = useGetUserTransactionNonPastEventQuery();

    return {
        userTransactionsNonPastEvent: userTransactionsNonPastEvent?.data?.data,
        refetchUserTransactionsNonPastEvent
    }
}