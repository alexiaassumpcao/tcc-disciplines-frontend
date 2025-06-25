import { useMutation } from "@tanstack/react-query";
import { sendSelectedDisciplines } from "../api/disciplines"


export const useSendSelectedDisciplines = (authToken, userId, refetchSelected) => {
    return  useMutation({
        mutationFn: (requestData) => {
            return sendSelectedDisciplines(authToken, userId, requestData)
        },
        onError: () => {
            alert("Error!")
        },
        onSuccess: () => {
            refetchSelected()
            alert("done!")
        }
    })
}