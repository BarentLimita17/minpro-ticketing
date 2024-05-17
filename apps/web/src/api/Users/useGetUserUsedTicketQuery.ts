import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserUsedTicketQuery = () => {
    const { data: userUsedTickets } = useQuery({
        queryKey: ['userUsedTickets'],
        queryFn: async () => {
            const userUsedTicketsFetchResult = await axios.get('http://localhost:8000/user/used-ticket', {
                headers: {
                    uid: 'clw3rc2u700011163aislktlf'
                }
            })
            return userUsedTicketsFetchResult
        }
    })

    return {
        userUsedTickets
    }
}