import { toast } from "react-toastify"
import { useCreateReviewMutation } from "@/api/Reviews/useCreateReviewMutation"
import { useGetUserTransactionNonPastEvent } from "../users/useGetUserTransactionNonPastEvent"
import { useGetUserTransactionPastEventReviewed } from "../users/useGetUserTransactionPastEventReviewed"
import { useGetUserTransactionPastEventUnReviewed } from "../users/useGetUserTransactionPastEventUnReviewed"

export const useCreateReview = () => {
    const { refetchUserTransactionsNonPastEvent }: any = useGetUserTransactionNonPastEvent();
    const { refetchUserTransactionsPastEventReviewed }: any = useGetUserTransactionPastEventReviewed();
    const { refetchUserTransactionsPastEventUnReviewed }: any = useGetUserTransactionPastEventUnReviewed();
    const { mutateAsync: mutationCreateReview } = useCreateReviewMutation({
        onSuccess: (res) => {
            toast.success("Review Has Been Posted")
            refetchUserTransactionsNonPastEvent();
            refetchUserTransactionsPastEventReviewed();
            refetchUserTransactionsPastEventUnReviewed();
        },
        onError: (error: any) => {
            console.log(error)
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationCreateReview
    }
}