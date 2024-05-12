import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

export const useGetCategoryAndLocationQuery = () => {
    const [category, location] = useQueries(
        {
            queries: [
                {
                    queryKey: ['category'],
                    queryFn: async () => {
                        return await axios.get('http://localhost:8000/event/category')
                    }
                },
                {
                    queryKey: ['location'],
                    queryFn: async () => {
                        return await axios.get('http://localhost:8000/event/location')
                    }
                }
            ]
        }
    )
    const refetchLocation = location.refetch;


    return {
        category,
        location,
        refetchLocation
    }
}