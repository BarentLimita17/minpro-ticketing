import { toast } from "react-toastify"
import { useUpdatePromotionMutation } from "@/api/useUpdatePromotionMutation"
import { useGetEventDetails } from "@/hooks/events/useGetEventDetails"
import { useGetPromotionDetails } from "./useGetPromotionDetails"

export const useUpdatePromotion = (eventId: number, promotionId: number) => {
    const { refetchEventDetails } = useGetEventDetails(eventId)
    const { refetchPromotionDetails } = useGetPromotionDetails(promotionId)
    const { mutate: mutationUpdatePromotion } = useUpdatePromotionMutation({
        onSuccess: () => {
            toast.success("Promotion updated successfully")
            refetchEventDetails()
            refetchPromotionDetails()
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationUpdatePromotion
    }
}