import { toast } from "react-toastify"
import { useCreateTransactionMutation } from "@/api/Transactions/useCreateTransactionMutation"
import { useGetEventDetails } from "../events/useGetEventDetails"

export const useCreateTransaction = (eventId: number) => {
    const { refetchEventDetails }: any = useGetEventDetails(eventId)
    const { mutateAsync: mutationCreateTransaction } = useCreateTransactionMutation({
        onSuccess: (res) => {
            toast.success("Ticket purchased successfully")
            refetchEventDetails()
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationCreateTransaction
    }
}