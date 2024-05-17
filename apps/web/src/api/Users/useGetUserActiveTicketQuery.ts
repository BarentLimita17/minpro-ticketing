import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserActiveTicketQuery = () => {
    const { data: userActiveTickets } = useQuery({
        queryKey: ['userActiveTickets'],
        queryFn: async () => {
            const userActiveTicketsFetchResult = await axios.get('http://localhost:8000/user/active-ticket', {
                headers: {
                    uid: 'clw3rc2u700011163aislktlf'
                }
            })
            return userActiveTicketsFetchResult
        }
    })

    return {
        userActiveTickets
    }
}