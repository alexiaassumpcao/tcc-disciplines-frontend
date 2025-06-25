import { useQuery } from "@tanstack/react-query";
import { getRecomendsDisciplinesList } from "../api/disciplines"

export const useGetRecommendsDisciplines = (authToken, userId) => {
    return useQuery({
        queryKey: ["get-recommends-disciplines"],
        queryFn: () => {
            return getRecomendsDisciplinesList(authToken, userId)
        },
    })
}