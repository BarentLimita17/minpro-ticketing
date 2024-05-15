import { useCreateLocationQuery } from "@/api/useCreateLocationMutation";
import { toast } from 'react-toastify'

export const useCreateLocation = () => {
    const { mutate: mutationCreateLocation } = useCreateLocationQuery({
        onSuccess: (data: string) => {
            toast.success("Location Created");
        },
        onError: (error: any) => {
            toast.error(error.response?.data.message);
        }
    })

    return {
        mutationCreateLocation
    }
}