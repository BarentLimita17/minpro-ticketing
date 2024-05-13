import { useCreateLocationQuery } from "@/api/useCreateLocationMutation";
import { toast } from 'react-toastify'

export const useCreateLocation = () => {
    const { mutate: mutationCreateLocation } = useCreateLocationQuery({
        onSuccess: (data: string) => {
            toast.success("Location Created");
        },
        onError: (error: Error) => {
            toast.error("Failed to Create Location")
        }
    })

    return {
        mutationCreateLocation
    }
}