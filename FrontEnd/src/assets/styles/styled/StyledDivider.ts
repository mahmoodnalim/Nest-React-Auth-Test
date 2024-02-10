import { styled } from "@mui/material";

export default styled('div')(({theme}) => ({
    height: '2px',
    backgroundColor: theme.palette.grey[100],
    width: '100%',
    margin: `${theme.spacing(1)} 0`,
}))