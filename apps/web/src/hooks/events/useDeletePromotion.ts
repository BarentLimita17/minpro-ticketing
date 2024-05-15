import { toast } from "react-toastify"
import { useDeletePromotionMutation } from "@/api/useDeletePromotionMutation"

export const useDeletePromotion = () => {
    const { mutate: mutationDeletePromotion } = useDeletePromotionMutation({
        onSuccess: () => {
            toast.success("Promotion deleted successfully")
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationDeletePromotion
    }
}