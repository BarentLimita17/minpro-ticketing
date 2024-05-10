import { useCreateUserMutation } from "../../api/useCreateUserMutation"
export const useCreateUser = () => {
    const {mutate: mutationCreateUser} = useCreateUserMutation({
        onSuccess: (res) => {
            console.log(res.data.message)
        }, 
        onError: (err) => {
            console.log(err.response.data.message)
        }
    })

    return {
        mutationCreateUser
    }
}