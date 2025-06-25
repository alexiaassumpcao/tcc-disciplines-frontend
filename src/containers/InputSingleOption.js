import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function InputSingleOption({ options, uniqueName }) {

  return (
    <div>
        <RadioGroup
            aria-labelledby={uniqueName}
            name={uniqueName + "-buttons-group"}
          >
        {
            
            options?.map((option) => {
                return (
                    <FormControlLabel id={`${uniqueName}-${option?.preference_value}-${option?.label}`} 
                    name={uniqueName}
                    key={`${option?.preference_value}-${option?.label}`} value={`${option?.preference_value}<->${option?.label}`} control={<Radio />} label={option?.label}  />
                )
            })
            
        }
        </RadioGroup>
    </div>
  );
}