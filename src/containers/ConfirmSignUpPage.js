import { useDebugValue, useEffect, useState } from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppTheme from './shared-theme/AppTheme';
import { useNavigate } from "react-router-dom";
import { useCreateStudent } from "../hooks/useCreateStudent";


export default function ConfirmSignUpPage({ fileProccessData, setIsConfirmPage, props }) {
    const { user: userInfo, disciplines: disciplinesInfo } = fileProccessData
    const [nameError, setNameError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [codeError, setCodeError] = useState(false);
    const [codeErrorMessage, setCodeErrorMessage] = useState('');
    const [courseError, setCourseError] = useState(false);
    const [courseErrorMessage, setCourseErrorMessage] = useState('');
    let navigate = useNavigate();

    const { error, isError, mutate } = useCreateStudent(navigate)
    useEffect(() => {
      if (isError && error !== undefined) {
        if (error?.response?.data == "Create User: Email already in use!" || error?.response?.data =="Auth: Invalid email!") {
          setEmailErrorMessage("Email invalido!")
          setEmailError(true)
        }
        if (error?.response?.data == "Create User: Student Code already in use!") {
          setCodeErrorMessage("Matrícula já está em uso!")
          setCodeError(true)
        }
      }
      if (!isError && (error == undefined || error == null)) {
        setEmailErrorMessage("")
        setEmailError(false)
        setCodeErrorMessage("")
        setCodeError(false)
      }
      
    })

    const handleSubmit = (event) => {
      event.preventDefault();
        const data = new FormData(event.currentTarget);
        
          const requestBodyData = {
            user: {
                name:data.get('name'),
                email: data.get('email'), 
                password: userInfo.password, 
                code: data.get('code'), 
                course: data.get('course')
            },
            disciplines: disciplinesInfo,
        }

        mutate(requestBodyData)
    
      };
    const requestToReturnPage =  (event) => {
        setIsConfirmPage(false)
    }

    return (
        <AppTheme {...props}>
            <h1>Informação de usuário</h1>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <FormControl>
                <FormLabel htmlFor="name">Nome</FormLabel>
                <TextField
                    defaultValue={userInfo?.name}
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  placeholder="Jon Snow"
                  error={nameError}
                  helperText={nameErrorMessage}
                  color={nameError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                    defaultValue={userInfo?.email}
                  required
                  fullWidth
                  id="email"
                  placeholder="your@email.com"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  error={emailError}
                  helperText={emailErrorMessage}
                  color={emailError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="code">Matrícula</FormLabel>
                <TextField
                defaultValue={userInfo?.code}
                  required
                  fullWidth
                  name="code"
                  placeholder="matrícula"
                  type="code"
                  id="code"
                  autoComplete="your-code"
                  variant="outlined"
                  error={codeError}
                  helperText={codeErrorMessage}
                  color={codeError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="course">Curso</FormLabel>
                <TextField
                defaultValue={userInfo?.course}
                  required
                  fullWidth
                  name="course"
                  placeholder="curso"
                  type="course"
                  id="course"
                  autoComplete="your-course"
                  variant="outlined"
                  error={courseError}
                  helperText={courseErrorMessage}
                  color={courseError ? 'error' : 'primary'}
                />
              </FormControl>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
              >
                enviar
              </Button>
              <Button
                type="cancel"
                fullWidth
                variant="contained"
                onClick={requestToReturnPage}
              >
                cancelar
              </Button>
            </Box>
            </AppTheme>
        
    )
}