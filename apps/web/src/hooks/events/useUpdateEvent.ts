import { toast } from "react-toastify"
import { useUpdateEventMutation } from "@/api/useUpdateEventMutation"

export const useUpdateEvent = () => {
    const { mutate: mutationUpdateEvent } = useUpdateEventMutation({
        onSuccess: () => {
            toast.success("Event Has Been Updated")
        },
        onError: (error) => {
            console.log(error)
            toast.error("Event failed to update")
        }
    })

    return {
        mutationUpdateEvent
    }
}