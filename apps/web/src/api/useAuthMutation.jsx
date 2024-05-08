import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useAuthMutation = ({ onSuccess, onError}) => {
   const {mutate} = useMutation({
        mutationFn: async({email, password}) => {
            console.log("Mutation executed")
            console.log(email)
            console.log(password)
            return await axios.post('http://localhost:8000/auth/login', {
                email,
                password
            })
        },
        onSuccess,
        onError
    })
    return {
        mutate
    }
}