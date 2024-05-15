import { toast } from "react-toastify"
import { useDeleteTicketMutation } from "@/api/useDeleteTicketMutation"

export const useDeleteTicket = () => {
    const { mutate: mutationDeleteTicket } = useDeleteTicketMutation({
        onSuccess: () => {
            toast.success("Ticket deleted successfully")
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationDeleteTicket
    }
}