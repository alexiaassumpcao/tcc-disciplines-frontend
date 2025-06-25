import Button from '@mui/material/Button';

export default function BasicOutlineButtom(props) {
    return (
        <Button
            onClick={props.onClick}
            sx={{ marginLeft: 10, borderRadius: 4, paddingLeft: 2, paddingRight: 2}}
        >
            {props.text}
        </Button>
    )
}