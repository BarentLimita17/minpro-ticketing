import { toast } from "react-toastify"
import { useUpdateTicketMutation } from "@/api/useUpdateTicketMutation"

export const useUpdateTicket = (refetchEventDetails: any) => {
    const { mutate: mutationUpdateTicket } = useUpdateTicketMutation({
        onSuccess: () => {
            toast.success("Ticket updated successfully")
            refetchEventDetails()
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationUpdateTicket
    }
}