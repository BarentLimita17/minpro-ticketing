import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetPromotionDetailsQuery = (promotionId: number) => {
    const { data: promotionDetails, refetch } = useQuery({
        queryKey: ['promotionDetails', promotionId],
        queryFn: async () => {
            const promotionDetailsFetchResult = await axios.get(`http://localhost:8000/event/${promotionId}/promotion`)
            return promotionDetailsFetchResult
        }
    })

    return {
        promotionDetails,
        refetchPromotionDetails: refetch
    }
}