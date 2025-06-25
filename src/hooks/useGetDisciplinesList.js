import { useQuery } from "@tanstack/react-query";
import { getDisciplinesList } from "../api/disciplines"


export const useGetDisciplinesList = (authToken, searchParams) => {
    return  useQuery({
        queryKey: ["get-disciplines-list"],
        queryFn: () => {
            return getDisciplinesList(authToken, searchParams)
        }, 
    })
}