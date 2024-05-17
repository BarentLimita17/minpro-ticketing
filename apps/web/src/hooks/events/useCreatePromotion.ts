import { toast } from "react-toastify"
import { useCreatePromotionMutation } from "@/api/useCreatePromotionMutation"
import { useGetEventDetails } from "./useGetEventDetails"

export const useCreatePromotion = (eventId: number) => {
    const { refetchEventDetails }: any = useGetEventDetails(eventId)
    const { mutate: mutationCreatePromotion } = useCreatePromotionMutation({
        onSuccess: () => {
            toast.success("Promotion created successfully")
            refetchEventDetails()
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