import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../api/users"


export const useUpdateUser = (authToken, userId, studentId, navigate) => {
    return  useMutation({
        mutationFn: (requestBody) => {
            return updateUser(authToken, userId, studentId, requestBody)
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