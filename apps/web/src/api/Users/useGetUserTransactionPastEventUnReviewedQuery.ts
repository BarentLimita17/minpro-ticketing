import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserTransactionPastEventUnReviewedQuery = () => {
    const { data: userTransactionsPastEventUnReviewed, refetch: refetchUserTransactionsPastEventUnReviewed } = useQuery({
        queryKey: ['userTransactionsPastEventUnReviewed'],
        queryFn: async () => {
            const userTransactionsPastEventUnReviewedFetchResult = await axios.get('http://localhost:8000/user/transaction-past-event-unreviewed', {
                headers: {
                    uid: 'clw3rc2u700011163aislktlf'
                }
            })
            return userTransactionsPastEventUnReviewedFetchResult
        }
    })

    return {
        userTransactionsPastEventUnReviewed,
        refetchUserTransactionsPastEventUnReviewed
    }
}