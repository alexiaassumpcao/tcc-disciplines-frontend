import Button from '@mui/material/Button';

export default function BasicFilledButtom(props) {
    return (
        <>
        {props?.type === "submit" ? 
            <Button
            sx={{ marginTop: 5, backgroundColor: "#99CCFF", borderRadius: 4}}
            variant="contained"
            fullWidth
            type="submit"
        >
            {props.text}
        </Button> 
        :
        props?.type === "search" ?
            <Button
            sx={{ marginTop: 5, backgroundColor: "#99CCFF", borderRadius: 4}}
            variant="contained"
            fullWidth
            type="submit"
            onClick={props.onClick}
        >
            {props.text}
        </Button> 
        :
        <Button
            onClick={props.onClick}
            sx={{ marginTop: 5, backgroundColor: "#99CCFF", borderRadius: 4}}
            variant="contained"
            
        >
            {props.text}
        </Button> 
    }
     </> 
    )
}