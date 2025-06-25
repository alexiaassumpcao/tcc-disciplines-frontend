import { useQuery } from "@tanstack/react-query";
import { getSelectedDisciplines } from "../api/disciplines"


export const useGetSelectedDisciplines = (authToken, userId) => {
    return  useQuery({
        queryKey: ["get-selected-disciplines-list"],
        queryFn: () => {
            return getSelectedDisciplines(authToken, userId)
        },
    })
}