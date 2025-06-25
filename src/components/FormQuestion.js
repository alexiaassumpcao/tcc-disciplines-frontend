import { FormControl, FormLabel } from "@mui/material";
import InputMultiOption from "../containers/InputMultiOption";
import InputSingleOption from "../containers/InputSingleOption";

const MULTI_OPTION = "MULTI_OPTION"
export default function FormQuestion({ question }) {
    const { questionType, text, uniqueName, options } = question;

    return (
        <FormControl>
            <FormLabel htmlFor={uniqueName}>{text}</FormLabel>
            {questionType === MULTI_OPTION ? 
            <InputMultiOption options={options} uniqueName={uniqueName} />
            :
            <InputSingleOption options={options} uniqueName={uniqueName} />
        }
        </FormControl>
    )

}