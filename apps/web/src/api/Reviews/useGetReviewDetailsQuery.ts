import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

export const useGetReviewDetailsQuery = (eventId: number) => {
    const { data: reviewDetails } = useQuery({
        queryKey: ['reviewDetails', eventId],
        queryFn: async () => {
            const reviewDetailsFetchResult = await axios.get(`http://localhost:8000/review/${eventId}`)
            return reviewDetailsFetchResult
        }
    })

    return {
        reviewDetails
    }
}