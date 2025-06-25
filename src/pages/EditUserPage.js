import { useContext, useState } from "react";
import DefaultPageLayout from "../containers/DefaultPageLayout";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AuthContext from "../contexts/auth";
import { useNavigate } from "react-router-dom";
import BasicFilledButtom from "../components/BasicFilledButtom";
import { useUpdateUser } from "../hooks/useUpdateUser";


export default function EditUserPage({ props }) {
    const ctx = useContext(AuthContext)
    let navigate = useNavigate();

    const [nameError, setNameError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [codeError, setCodeError] = useState(false);
    const [codeErrorMessage, setCodeErrorMessage] = useState('');
    const [courseError, setCourseError] = useState(false);
    const [courseErrorMessage, setCourseErrorMessage] = useState('');


    const{ error: errorSubmit, mutate } = useUpdateUser(ctx?.GetAuthToken(), ctx?.user?.userId, ctx?.user?.id, navigate)


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const requestBody = {
            name:data.get('name'),
            email: data.get('email'), 
            code: data.get('code'), 
            course: data.get('course')
        }
        mutate(requestBody)
    };
    const handlerCancel = (event) => {
        navigate("/home")
    }


    return(

        <DefaultPageLayout>
         <h1>Editando..</h1>
         <h1>Informação de usuário</h1>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <FormControl>
                <FormLabel htmlFor="name">Nome</FormLabel>
                <TextField
                    defaultValue={ctx?.user.user.name}
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
                    defaultValue={ctx?.user.user.email}
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
                defaultValue={ctx?.user.code}
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
                defaultValue={ctx?.user.course}
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
              <BasicFilledButtom type="submit" text="Enviar" />
              <BasicFilledButtom type="cancel" onClick={handlerCancel} text="Cancelar"/>
            </Box>

        </DefaultPageLayout>

    )
}