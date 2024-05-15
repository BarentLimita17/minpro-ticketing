import { toast } from "react-toastify"
import { usePublishEventMutation } from "@/api/usePublishEventMutation"

export const usePublishEvent = () => {
    const { mutate: mutationPublishEvent } = usePublishEventMutation({
        onSuccess: () => {
            toast.success("Event Has Been Published")
        },
        onError: (error: any) => {
            console.log(error)
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationPublishEvent
    }
}