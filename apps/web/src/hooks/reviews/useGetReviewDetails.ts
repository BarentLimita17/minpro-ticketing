import { useGetReviewDetailsQuery } from "@/api/Reviews/useGetReviewDetailsQuery";

export const useGetReviewDetails = (eventId: number) => {
    const { reviewDetails } = useGetReviewDetailsQuery(eventId);

    return {
        reviewDetails: reviewDetails?.data?.data
    }
}
