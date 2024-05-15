import { toast } from "react-toastify"
import { useCreateTicketMutation } from "@/api/useCreateTicketMutation"

export const useCreateTicket = () => {
    const { mutate: mutationCreateTicket } = useCreateTicketMutation({
        onSuccess: () => {
            toast.success("Ticket created successfully")
        },
        onError: (error: any) => {
            console.log(error)
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationCreateTicket
    }
}