import { useGetUserTransactionPastEventUnReviewedQuery } from "@/api/Users/useGetUserTransactionPastEventUnReviewedQuery";

export const useGetUserTransactionPastEventUnReviewed = () => {
    const { userTransactionsPastEventUnReviewed, refetchUserTransactionsPastEventUnReviewed } = useGetUserTransactionPastEventUnReviewedQuery();

    return {
        userTransactionsPastEventUnReviewed: userTransactionsPastEventUnReviewed?.data?.data,
        refetchUserTransactionsPastEventUnReviewed
    }
}