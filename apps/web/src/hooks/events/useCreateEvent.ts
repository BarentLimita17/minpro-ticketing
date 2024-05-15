import { toast } from "react-toastify"
import { useCreateEventMutation } from "@/api/useCreateEventMutation"

export const useCreateEvent = () => {
    const { mutateAsync: mutationCreateEvent } = useCreateEventMutation({
        onSuccess: (res) => {
            toast.success("Event Has Been Saved")
        },
        onError: (error: any) => {
            console.log(error)
            toast.error(error.response?.data.message)
        }
    })

    // console.log(mutationCreateEvent)
    return {
        mutationCreateEvent
    }
}