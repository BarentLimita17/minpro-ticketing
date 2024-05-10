import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateEOMutation = ({onSuccess, onError}) => {
    const {mutate} = useMutation({
        mutationFn: async({email, fullname, password, code, roleId}) => {
            return await axios.post('http://localhost:8000/eo/register', {
                email, 
                fullname, 
                password,
                code, 
                roleId,
            })
        }, 
        onSuccess, 
        onError
    })

    return{
        mutate
    }
}