import { toast } from "react-toastify"
import { useCreateTransactionMutation } from "@/api/Transactions/useCreateTransactionMutation"

export const useCreateTransaction = () => {
    const { mutateAsync: mutationCreateTransaction } = useCreateTransactionMutation({
        onSuccess: (res) => {
            toast.success("Ticket purchased successfully")
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationCreateTransaction
    }
}