import { toast } from "react-toastify"
import { useUpdatePromotionMutation } from "@/api/useUpdatePromotionMutation"

export const useUpdatePromotion = () => {
    const { mutate: mutationUpdatePromotion } = useUpdatePromotionMutation({
        onSuccess: () => {
            toast.success("Promotion updated successfully")
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationUpdatePromotion
    }
}