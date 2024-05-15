import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

export const useGetUsersDetailsQuery = () => {
    const { data: userDetails } = useQuery({
        queryKey: ['userDetails'],
        queryFn: async () => {
            const userDetailsFetchResult = await axios.get('http://localhost:8000/user', {
                headers: {
                    uid: "clw3rc2u700011163aislktlf"
                }
            })
            return userDetailsFetchResult
        }
    })
    return {
        userDetails
    }
}