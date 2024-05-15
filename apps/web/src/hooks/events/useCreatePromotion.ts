import { toast } from "react-toastify"
import { useCreatePromotionMutation } from "@/api/useCreatePromotionMutation"

export const useCreatePromotion = () => {
    const { mutate: mutationCreatePromotion } = useCreatePromotionMutation({
        onSuccess: () => {
            toast.success("Promotion created successfully")
        },
        onError: (error: any) => {
            console.log(error)
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationCreatePromotion
    }
}