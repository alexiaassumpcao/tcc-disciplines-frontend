import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormQuestion from '../components/FormQuestion';
import { useContext, useEffect } from 'react';
import AuthContext from '../contexts/auth';
import { useNavigate } from 'react-router-dom';
import DefaultPageLayout from '../containers/DefaultPageLayout';
import { useGetPreferencePerfilFormQuestions } from '../hooks/useGetPreferencePerfilFormQuestions';
import { useSendPreferencePerfilFormResponses } from '../hooks/useSendPreferencePerfilFormResponses';


export default function PreferencePerfilForm() {
    const ctx = useContext(AuthContext)
    const navigate = useNavigate()
    const { data: questions, error } = useGetPreferencePerfilFormQuestions(ctx?.GetAuthToken())


    const{ data, error: errorSubmit, mutate } = useSendPreferencePerfilFormResponses(ctx?.GetAuthToken(), ctx?.user?.id, navigate)

    useEffect(()=>{
        if (data !== undefined) {
            ctx.setPreferenceId(data.data.preferenceId)
            ctx.setPreferenceId(data.data.preferenceId)
        }
    }, [data])

    const validateInputs = () => {
        return true;
    };
    const handlerCancel = () => {
        navigate("/home")
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("hello data: ", questions)
        const requestBody = questions?.data?.map((m) => {
            const optionsS = data.getAll(m.uniqueName)
            const o = optionsS.map((s) => {
                const names = s.split("<->")
                return {
                    label: names[1],
                    preferenceValue: names[0]
                }
            })
            return{
                uniqueName: m.uniqueName,
                rate: m.rate,
                selectedOptions: o,
            }
        })
        console.log("requestBodyrequestBody: ", requestBody)
        mutate(requestBody)
    };

    return (
        <DefaultPageLayout>
            <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
        >
            {questions?.data?.map((question) => {
                return (
                    <div key={question?.uniqueName}>
                        <FormQuestion question={question} />
                    </div>
                    
                )
            })}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              color='BD7BC7'
            >
              Enviar
            </Button>
            <Button
              fullWidth
              variant="contained"
              color='BD7BC7'
              onClick={handlerCancel}
            >
              Cancelar
            </Button>
            
        </Box>
        </DefaultPageLayout>      
    )
}