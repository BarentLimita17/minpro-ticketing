import { useCreateLocationQuery } from "@/api/useCreateLocationMutation";
import { toast } from 'react-toastify'

export const useCreateLocation = () => {
    const { mutate: mutationCreateLocation } = useCreateLocationQuery({
        onSuccess: (data: any) => {
            // console.log(data)
            // window.location.reload()
            toast.success("Location Created");
        },
        onError: (error: any) => {
            console.log(error)
            toast.error("Failed to Create Location")
        }
    })

    return {
        mutationCreateLocation
    }
}