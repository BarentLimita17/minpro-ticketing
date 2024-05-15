import { useGetUsersDetailsQuery } from "@/api/Users/useGetUsersDetailsQuery";

export const useGetUsersDetails = () => {
    const { userDetails } = useGetUsersDetailsQuery();

    return {
        dataUserDetails: userDetails?.data?.data
    }
}