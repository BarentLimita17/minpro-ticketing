import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserTicketQuery = () => {
    const { data: userTickets } = useQuery({
        queryKey: ['userTickets'],
        queryFn: async () => {
            const userTicketsFetchResult = await axios.get('http://localhost:8000/user/ticket', {
                headers: {
                    uid: 'clw3rc2u700011163aislktlf'
                }
            })
            return userTicketsFetchResult
        }
    })

    return {
        userTickets
    }
}