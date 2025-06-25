import { Box, FormControl, TextField } from "@mui/material";
import BasicFilledButtom from "../components/BasicFilledButtom";

export default function SearchDisciplineTab({ setIsSearch }) {
    const handleClick = async () => {
        setIsSearch(true)
        return;
    }
    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
        <FormControl>
            <TextField
                autoComplete="disciplineName"
                name="disciplineName"
                fullWidth
                id="disciplineName"
                placeholder="Digite o nome da disciplina"
                color={'primary'}
            />
        </FormControl>
        <BasicFilledButtom type="search" onClick={handleClick} text="Buscar"/>
    </Box>
    )
}