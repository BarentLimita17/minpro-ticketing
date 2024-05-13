import { toast } from "react-toastify"
import { useCreateEventMutation } from "@/api/useCreateEventMutation"

export const useCreateEvent = () => {
    const { mutateAsync: mutationCreateEvent } = useCreateEventMutation({
        onSuccess: () => {
            toast.success("Event Has Been Saved")
        },
        onError: (error) => {
            console.log(error)
            toast.error("Event failed to create")
        }
    })

    // console.log(mutationCreateEvent)
    return {
        mutationCreateEvent
    }
}