import { toast } from "react-toastify"
import { useUpdatePromotionMutation } from "@/api/useUpdatePromotionMutation"

export const useUpdatePromotion = () => {
    const { mutate: mutationUpdatePromotion } = useUpdatePromotionMutation({
        onSuccess: () => {
            toast.success("Promotion updated successfully")
        },
        onError: (error) => {
            toast.error("Failed to update promotion")
        }
    })

    return {
        mutationUpdatePromotion
    }
}