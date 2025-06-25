import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Chip, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { mapCategoryToLabelAndColor, mapPreferenceToColors } from '../constants';
import CircleIcon from '../components/CircleIcon';

export default function InputMultiDisciplines({ disciplines }) {
  return (
    <div>
        <FormGroup >
            {
                disciplines?.map((discipline,pageIndex) => {
                    return (
                        <div key={`${discipline?.code}-${pageIndex}`} style={{'&.hover':{border: "5px solid #000"}}} >
                            <FormControlLabel 
                            id={`${discipline?.code}-${discipline?.name}`} 
                            
                            name="select-disciplines"
                            value={`${discipline?.id}`}
                            control={<Checkbox />} 
                            sx={{ padding: "10px 10px 10px 10px", marginTop: "5px",  '--hover-border': "5px solid #000"}}
                            label={
                                <div style={{'--hover-border': "5px solid #000"}} >
                                    <Typography>
                                        {discipline?.code?.join(",")} - <b>{discipline?.name}</b>
                                    </Typography>
                                    <div style={{ display: 'flex'}}>
                                        {discipline?.perfil === true ?
                                        
                                            <CircleIcon letter="P" size={20} bgColor={mapPreferenceToColors[discipline?.perfilName]} textColor="#fff" /> 
                                        :<></>}
                                        <Chip label={mapCategoryToLabelAndColor[discipline?.category].label} 
                                        sx={{ 
                                            backgroundColor: mapCategoryToLabelAndColor[discipline?.category].color,
                                            maxHeight: "20px", marginRight: "2px"}} />
                                        <div style={{ fontFamily:'Roboto', marginLeft: "5px"}}>Área/Núcleo: <i>{discipline?.area}</i></div> 
                                    </div> 
                                </div> 
                                } 
                        />
                        </div>   
                    )
                })
            }
        </FormGroup>
    </div>
  );
}