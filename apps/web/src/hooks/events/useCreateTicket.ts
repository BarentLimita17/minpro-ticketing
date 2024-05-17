import { toast } from "react-toastify"
import { useCreateTicketMutation } from "@/api/useCreateTicketMutation"
import { useGetEventDetails } from "./useGetEventDetails"

export const useCreateTicket = (eventId: number) => {
    const { refetchEventDetails }: any = useGetEventDetails(eventId)
    const { mutate: mutationCreateTicket } = useCreateTicketMutation({
        onSuccess: () => {
            toast.success("Ticket created successfully")
            refetchEventDetails()
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