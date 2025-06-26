import { useMutation } from '@tanstack/react-query'

export default async function UseSignUpUser(requestBodyData) {
    const { data, error } = await useMutation({
        mutationFn: () => {
            const options = {
                method: 'POST', // HTTP method
                headers: {
                  'Content-Type': 'application/json' // Content type
                },
                body: JSON.stringify(requestBodyData) // Convert data to JSON string
              };
          return fetch('http://localhost:3001/users?type=student', options)
        },
      })
      console.log("error on mutation::signupUser ->", error)

    return data;
    
}