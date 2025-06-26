import { useMutation } from "@tanstack/react-query";
import { sendPreferencePerfilFormResponses } from "../api/preferences"


export const useSendPreferencePerfilFormResponses = (authToken, userId, onSuccessFn) => {
    return   useMutation({
        mutationFn: (requestBody) => {
            return sendPreferencePerfilFormResponses(authToken, userId, requestBody)
        },
        onSuccess: (data) => {
            onSuccessFn(data)
        },
        onError: () => {
            alert("Error!")
        }
    })
}