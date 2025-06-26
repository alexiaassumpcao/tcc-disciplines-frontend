import { Box, Chip, FormControl, FormLabel, Tab, Tabs, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/auth";
import InputMultiDisciplines from "../containers/InputMultiDisciplines";
import SearchDisciplineTab from "../containers/SearchDisciplineTab";
import DefaultPageLayout from "../containers/DefaultPageLayout";
import BasicFilledButtom from "../components/BasicFilledButtom";
import { mapPreferenceToColors } from "../constants";
import { CustomTabPanel, a11yProps } from "../components/CustomTabPanel"
import { useGetRecommendsDisciplines } from "../hooks/useGetRecommendsDisciplines";
import { useGetSelectedDisciplines } from "../hooks/useGetSelectedDisciplines";
import { useGetDisciplinesList } from "../hooks/useGetDisciplinesList";
import { useSendSelectedDisciplines } from "../hooks/useSendSelectedDisciplines";

export default function DisciplinesListPage() {
    const ctx = useContext(AuthContext)
    const [recommendedDisciplines, setRecommendedDisciplines] = useState([])
    const [value, setValue] = useState(0);
    const [isSearch, setIsSearch] = useState(false)
    const [dbSelectedDisciplinesList, setDbSelectedDisciplinesList] = useState([])
    const [searchDisciplines, setSearchDisciplines] = useState([])

    const [searchParams, setSearchParams] = useState();

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };

    const { data, error } = useGetRecommendsDisciplines(ctx?.GetAuthToken(), ctx?.user?.id)
    const { data:selectedDisciplinesList, isSuccess, isLoading, error: errorGetSelectedDisciplinesList, refetch: refetchSelected } = useGetSelectedDisciplines(ctx?.GetAuthToken(), ctx?.user?.id)

    useEffect(() => {
        if (isSuccess && !isLoading) {
            setDbSelectedDisciplinesList(selectedDisciplinesList.data)
        }
    }, [isSuccess, isLoading, selectedDisciplinesList])
    const { data:allDisciplines, error:errorGetDisciplines, refetch } = useGetDisciplinesList(ctx?.GetAuthToken())
    const { mutate, error: errorPost} = useSendSelectedDisciplines(ctx?.GetAuthToken(), ctx?.user?.id, refetchSelected)

    useEffect(() => {
        if(data && recommendedDisciplines.length == 0) {
            let disc=[]
            data.data.recommendByPreferencePerfil[0].disciplines.map((d) => {
                const n = {
                    ...d,
                    perfil:true,
                    perfilName: data.data.recommendByPreferencePerfil[0].name,
                }
                disc.push(n)
            })
            data.data.recommendByArea.map((a) => {
                const b = {
                    ...a,
                    perfil:false,
                }
                disc.push(b)
            })
            
            setRecommendedDisciplines(disc)
        }
        console.log("ola search ; ", searchParams)
    }, [data, searchParams])


    const handleSubmitTwo = async (event) => {
        console.log("chamou o submit 2")
            event.preventDefault();
            let formData = new FormData(event.currentTarget)
            const search = formData.get("disciplineName")
            console.log("searcccch: ", search)
        if(search !== undefined && search != null) {
            setSearchParams(search)
            setSearchDisciplines(allDisciplines.data.filter((d) => d.name.includes(search.toUpperCase())))
            console.log("searchDisciplines:; ", searchDisciplines)
            formData.delete("disciplineName")

        }
        const selectedDisciplines = formData.getAll("select-disciplines")
        if (selectedDisciplines.length >0)
         {
            event.preventDefault();

            const selectedDisciplines = formData.getAll("select-disciplines")
            console.log(`conteudo: ${selectedDisciplines}`)
            const ids = recommendedDisciplines.map((r) => {
                return r.id
            })
            const listOfSelectedDisciplines = selectedDisciplines.map((discipline) => {
    
                return {
                    disciplineId: discipline,
                    wasRecommended: ids.includes(discipline),
                }
            })
            mutate(listOfSelectedDisciplines)

        }
        setIsSearch(false)
        return;
    }

    return (
        <DefaultPageLayout>
            <Box>
            <Box>
                <Chip label={data?.data?.recommendByPreferencePerfil[0].name} sx={{ backgroundColor: mapPreferenceToColors[data?.data?.recommendByPreferencePerfil[0].name], display: 'flex'}}/>
                <div style={{ padding:'10px 10px 10px 10px' }}>
                    <Typography >
                        Selecione as disciplinas que tem interesse em cursar...
                    </Typography>
                </div>
                <>
                    <Box 
                        component="form"
                        onSubmit={handleSubmitTwo}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
                    >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                            <Tabs value={value} onChange={handleChange} aria-label="disciplines-tabs">
                                <Tab label="Disciplinas Recomendadas"  {...a11yProps(0)} />
                                <Tab label="Outras Disciplinas"  {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <FormControl>
                            <CustomTabPanel value={value} index={0} >
                                    <FormLabel htmlFor="select-disciplines-recommended" ></FormLabel>
                                    <InputMultiDisciplines disciplines={recommendedDisciplines} />
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <SearchDisciplineTab setSearchParams={setSearchParams} setIsSearch={setIsSearch} />
                                <FormLabel htmlFor="select-disciplines-searched" ></FormLabel>
                                <InputMultiDisciplines disciplines={searchDisciplines ? searchDisciplines : []} />
                            </CustomTabPanel>
                        </FormControl>
                        <BasicFilledButtom type="submit" text="Salvar"/>
                    </Box>
                </>
               
            </Box>
            <Box>
                <h4>Disciplinas selecionadas pelo discente: </h4>
                {isLoading ? <p>Carregando...</p> :
                dbSelectedDisciplinesList?.map((db, dbIndex) => {
                    return(
                        <div key={`${db?.code[0]}-${dbIndex}`}>
                            <span>{`${db?.code?.join(",")} - ${db?.name}`}</span>
                        </div>
                    )
                })
                }
            </Box>
        </Box>
        </DefaultPageLayout> 
    )
}