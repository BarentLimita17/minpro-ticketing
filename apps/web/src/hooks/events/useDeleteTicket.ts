import { toast } from "react-toastify"
import { useDeleteTicketMutation } from "@/api/useDeleteTicketMutation"

export const useDeleteTicket = () => {
    const { mutate: mutationDeleteTicket } = useDeleteTicketMutation({
        onSuccess: () => {
            toast.success("Ticket deleted successfully")
        },
        onError: (error) => {
            toast.error("Failed to delete ticket")
        }
    })

    return {
        mutationDeleteTicket
    }
}