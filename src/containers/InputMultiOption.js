import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';

export default function InputMultiOption({ options, uniqueName }) {
  return (
    <div>
        <FormGroup >
            {
                options?.map((option) => {
                    return (
                        <FormControlLabel 
                            id={`${uniqueName}-${option?.preference_value}-${option?.label}`} 
                            name={uniqueName}
                            key={`${option?.preference_value}-${option?.label}`} 
                            control={<Checkbox />} label={option?.label} value={`${option?.preference_value}<->${option?.label}`} />
                    )
                })
            }
        </FormGroup>
    </div>
  );
}