import { useGetCategoryAndLocationQuery } from "@/api/useGetCategoryAndLocationQuery";

export const useGetCategoryAndLocation = () => {
    const { category, location } = useGetCategoryAndLocationQuery();
    return {
        dataCategory: category?.data?.data?.data,
        dataLocation: location?.data?.data?.data
    }
}