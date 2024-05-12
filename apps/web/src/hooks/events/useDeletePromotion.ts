import { toast } from "react-toastify"
import { useDeletePromotionMutation } from "@/api/useDeletePromotionMutation"

export const useDeletePromotion = () => {
    const { mutate: mutationDeletePromotion } = useDeletePromotionMutation({
        onSuccess: () => {
            toast.success("Promotion deleted successfully")
        },
        onError: (error) => {
            toast.error("Failed to delete promotion")
        }
    })

    return {
        mutationDeletePromotion
    }
}