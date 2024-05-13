import { toast } from "react-toastify"
import { useUpdateTicketMutation } from "@/api/useUpdateTicketMutation"

export const useUpdateTicket = () => {
    const { mutate: mutationUpdateTicket } = useUpdateTicketMutation({
        onSuccess: () => {
            toast.success("Ticket updated successfully")
        },
        onError: (error) => {
            toast.error("Failed to update ticket")
        }
    })

    return {
        mutationUpdateTicket
    }
}