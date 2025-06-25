import { useMutation } from '@tanstack/react-query'

export default async function UseSignUpProccessFile(name, email, password, fileToSend) {
  console.log("file: ", fileToSend)
    const { data, error } = await useMutation({
        mutationFn: () => {
            const options = {
                method: 'POST', // HTTP method
                headers: {
                  'Content-Type': 'multipart/form-data' // Content type
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    file: fileToSend,
                }) // Convert data to JSON string
              };
          return fetch('http://localhost:3001/files', options)
        },
      })
      console.log("vish, error 1: ", error)
    return data;
    
}