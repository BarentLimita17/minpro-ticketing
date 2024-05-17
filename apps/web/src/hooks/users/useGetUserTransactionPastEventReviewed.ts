import { useGetUserTransactionPastEventReviewedQuery } from "@/api/Users/useGetUserTransactionPastEventReviewedQuery";

export const useGetUserTransactionPastEventReviewed = () => {
    const { userTransactionsPastEventReviewed, refetchUserTransactionsPastEventReviewed } = useGetUserTransactionPastEventReviewedQuery();

    return {
        userTransactionsPastEventReviewed: userTransactionsPastEventReviewed?.data?.data,
        refetchUserTransactionsPastEventReviewed
    }
}