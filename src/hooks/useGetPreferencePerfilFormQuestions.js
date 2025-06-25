import { useQuery } from "@tanstack/react-query";
import { getPreferencePerfilFormQuestions } from "../api/preferences"


export const useGetPreferencePerfilFormQuestions = (authToken) => {
    return  useQuery({
        queryFn: () => {
            return getPreferencePerfilFormQuestions(authToken)
        },
        queryKey: ["get-questions"]
    })
}