import {useQueries} from '@tanstack/react-query';
import axios from 'axios';

export const useGetRoleQuery = () => {
    const [roleQuery] = useQueries(
        {
            queries: [
                {
                    queryKey: ['role'],
                    queryFn: async() => {
                        return await axios.get('http://localhost:8000/user/role')
                    }
                }
            ]
        }
    )
    
    return {
        roleQuery
    }
}