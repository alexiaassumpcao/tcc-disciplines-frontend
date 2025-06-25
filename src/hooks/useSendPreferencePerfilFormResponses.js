import { useMutation } from "@tanstack/react-query";
import { sendPreferencePerfilFormResponses } from "../api/preferences"


export const useSendPreferencePerfilFormResponses = (authToken, userId, navigate) => {
    return   useMutation({
        mutationFn: (requestBody) => {
            return sendPreferencePerfilFormResponses(authToken, userId, requestBody)
        },
        onSuccess: () => {
            alert("done!")
            navigate("/home")
        },
        onError: () => {
            alert("Error!")
        }
    })
}