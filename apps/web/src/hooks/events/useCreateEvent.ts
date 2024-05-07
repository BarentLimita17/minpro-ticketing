import { toast } from "react-toastify"
import { useCreateEventMutation } from "@/api/useCreateEventMutation"

export const useCreateEvent = () => {
    const { mutate: mutationCreateEvent } = useCreateEventMutation({
        onSuccess: () => {
            toast.success("Event created successfully")
        },
        onError: (error) => {
            console.log(error)
            toast.error(error.message)
        }
    })

    return {
        mutationCreateEvent
    }
}