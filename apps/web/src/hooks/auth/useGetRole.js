import { useGetRoleQuery } from "@/api/useGetRoleQuery"

export const useGetRole = () => {
    const {roleQuery} = useGetRoleQuery()

    return {
        dataRole: roleQuery?.data?.data?.data, 
    }
}