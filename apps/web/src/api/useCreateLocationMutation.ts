import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useCreateLocationQuery = ({ onSuccess, onError }: { onSuccess: (data: any) => void | Promise<void> | ((data: any) => void), onError: (error: Error) => void }) => {
    const { mutate } = useMutation({
        mutationFn: async ({ name, city, details, street, zipCode }: { name: string, city: string, details: string, street: string, zipCode: string }) => {
            const result = await axios.post('http://localhost:8000/event/location', { name, city, details, street, zipCode });

            return result.data
        },
        onSuccess,
        onError
    })

    return {
        mutate
    }
}