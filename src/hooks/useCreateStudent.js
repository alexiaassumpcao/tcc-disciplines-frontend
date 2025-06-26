import { useMutation } from "@tanstack/react-query";
import { createStudent } from "../api/users"


export const useCreateStudent = (navigate) => {
    return useMutation({
        mutationFn: (requestBodyData) => {
          return createStudent(requestBodyData)
        },
        onError: () => {
          console.log("error on mutation::createStudent")
        },
        onSuccess: () => {
          navigate("/")
        }
      })
}