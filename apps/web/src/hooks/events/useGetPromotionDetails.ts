import { useGetPromotionDetailsQuery } from "@/api/useGetPromotionDetailsQuery";

export const useGetPromotionDetails = (promotionId: number) => {
    const { promotionDetails } = useGetPromotionDetailsQuery(promotionId);
    const { refetchPromotionDetails } = useGetPromotionDetailsQuery(promotionId);

    return {
        dataPromotionDetails: promotionDetails?.data?.data,
        refetchPromotionDetails
    }
}