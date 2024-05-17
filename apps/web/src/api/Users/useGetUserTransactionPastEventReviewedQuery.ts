import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserTransactionPastEventReviewedQuery = () => {
    const { data: userTransactionsPastEventReviewed, refetch: refetchUserTransactionsPastEventReviewed } = useQuery({
        queryKey: ['userTransactionsPastEventReviewed'],
        queryFn: async () => {
            const userTransactionsPastEventReviewedFetchResult = await axios.get('http://localhost:8000/user/transaction-past-event-reviewed', {
                headers: {
                    uid: 'clw3rc2u700011163aislktlf'
                }
            })
            return userTransactionsPastEventReviewedFetchResult
        }
    })

    return {
        userTransactionsPastEventReviewed,
        refetchUserTransactionsPastEventReviewed
    }
}