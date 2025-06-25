import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/auth";
import { useNavigate } from "react-router-dom";
import DefaultPageLayout from "../containers/DefaultPageLayout";
import { Chip } from "@mui/material";
import { mapPreferenceToColors } from "../constants";
import BasicFilledButtom from "../components/BasicFilledButtom";
import BasicOutlineButtom from "../components/BasicOutlineButtom";

export default function Home(props) {
    const ctx = useContext(AuthContext)
    const [move, setMove] = useState(false)
    const [moveTwo, setMoveTwo] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (move) { 
            navigate("/preferencesForm")
        }
        if(moveTwo) {
            navigate("/selectDisciplines")
        }
    }, [move, moveTwo])
    useEffect(() => {
        ctx.RefreshUserInfo()
    },[])
    const handlerClick = () => {
        setMove(true)
    }
    const handlerClick2 = () => {
        setMoveTwo(true)
    }

    return(
        <DefaultPageLayout>
            <h2>Bem vindo!</h2>
            <h2>{ctx?.user?.user?.name}</h2>
            {
                ctx?.preferenceId ? 
                <>
                    <h2>Ótimo, já tem perfil de preferência!</h2>
                    <Chip label={ctx?.preferenceName} sx={{backgroundColor: mapPreferenceToColors[ctx?.preferenceName]}}/>
                    <BasicOutlineButtom onClick={handlerClick} text="Editar perfil de preferência" />
                    <div></div>
                    <BasicFilledButtom
                        onClick={handlerClick2}
                        text="Selecione as disciplinas que deseja cursar"
                    />
                    
                </>
            :
                <>
                    <h2>Vejo que ainda não possui perfil de preferência, que tal criar um?</h2>
                    <h3>É só responder algumas perguntas</h3>
                    <BasicOutlineButtom onClick={handlerClick} text="Criar Perfil de Preferência" />
                </>
            }
        </DefaultPageLayout>        
    )
}
