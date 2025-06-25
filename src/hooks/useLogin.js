import { useMutation } from "@tanstack/react-query";


export const useLogin = (ctxLoginFn, navigate) => {
    return useMutation({
        mutationFn: (requestBodyData) => {
          return ctxLoginFn(requestBodyData)
        },
        onError: () => {
          console.log("error 1 ")
        },
        onSuccess: () => {
          navigate("/home")
        }
      })
}