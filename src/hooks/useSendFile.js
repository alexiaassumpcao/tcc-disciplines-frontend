import { useMutation } from "@tanstack/react-query";
import { sendFile } from "../api/users"


export const useSendFile = () => {
    return useMutation({
        mutationFn: (formDataBodyRequest) => {
          return sendFile(formDataBodyRequest)
        },
        onError: (e) => {
          console.log('error on mutation::sendFile -> ', e)
        }
      })
}