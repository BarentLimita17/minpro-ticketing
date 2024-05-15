import { useGetUserTransactionQuery } from "@/api/Users/useGetUserTransactionQuery";

export const useGetUserTransaction = () => {
    const { userTransactions } = useGetUserTransactionQuery();

    return {
        userTransactions: userTransactions?.data?.data
    }
}