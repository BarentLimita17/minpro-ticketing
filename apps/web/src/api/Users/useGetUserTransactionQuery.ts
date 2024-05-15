import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserTransactionQuery = () => {
    const { data: userTransactions } = useQuery({
        queryKey: ['userTransactions'],
        queryFn: async () => {
            const userTransactionsFetchResult = await axios.get('http://localhost:8000/user/transaction', {
                headers: {
                    uid: 'clw3rc2u700011163aislktlf'
                }
            })
            return userTransactionsFetchResult
        }
    })

    return {
        userTransactions
    }
}