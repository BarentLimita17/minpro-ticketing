import { toast } from "react-toastify"
import { useUpdateTicketMutation } from "@/api/useUpdateTicketMutation"

export const useUpdateTicket = () => {
    const { mutate: mutationUpdateTicket } = useUpdateTicketMutation({
        onSuccess: () => {
            toast.success("Ticket updated successfully")
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationUpdateTicket
    }
}