import { toast } from "react-toastify"
import { useUpdateEventMutation } from "@/api/useUpdateEventMutation"

export const useUpdateEvent = () => {
    const { mutateAsync: mutationUpdateEvent } = useUpdateEventMutation({
        onSuccess: () => {
            toast.success("Event Has Been Updated")
        },
        onError: (error: any) => {
            console.log(error)
            toast.error(error.response?.data.message)
        }
    })

    return {
        mutationUpdateEvent
    }
}