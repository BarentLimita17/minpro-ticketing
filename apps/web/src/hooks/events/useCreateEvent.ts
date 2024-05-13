import { toast } from "react-toastify"
import { useCreateEventMutation } from "@/api/useCreateEventMutation"

export const useCreateEvent = () => {
    const { mutate: mutationCreateEvent } = useCreateEventMutation({
        onSuccess: () => {
            toast.success("Event Has Been Saved")
        },
        onError: (error) => {
            console.log(error)
            toast.error("Event failed to create")
        }
    })

    return {
        mutationCreateEvent
    }
}