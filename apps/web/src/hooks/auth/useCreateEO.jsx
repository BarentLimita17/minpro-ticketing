import { useCreateEOMutation } from "../../api/useCreateEOMutation"
import { useCreateUserMutation } from "../../api/useCreateUserMutation"
export const useCreateEO = () => {
    const {mutate: mutationCreateEO} = useCreateEOMutation({
        onSuccess: (res) => {
            console.log(res.data.message)
        }, 
        onError: (err) => {
            console.log(err.response.data.message)
        }
    })

    return {
        mutationCreateEO
    }
}