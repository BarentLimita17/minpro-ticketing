import { toast } from "react-toastify"
import { usePublishEventMutation } from "@/api/usePublishEventMutation"

export const usePublishEvent = () => {
    const { mutate: mutationPublishEvent } = usePublishEventMutation({
        onSuccess: () => {
            toast.success("Event Has Been Published")
        },
        onError: (error) => {
            console.log(error)
            toast.error("Event failed to publish")
        }
    })

    return {
        mutationPublishEvent
    }
}