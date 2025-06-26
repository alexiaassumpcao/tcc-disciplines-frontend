import { useMutation } from "@tanstack/react-query";


export const useLogin = (ctxLoginFn, navigate) => {
    return useMutation({
        mutationFn: (requestBodyData) => {
          return ctxLoginFn(requestBodyData)
        },
        onError: () => {
          console.log("error on mutation::ctxLoginFn")
        },
        onSuccess: () => {
          navigate("/home")
        }
      })
}