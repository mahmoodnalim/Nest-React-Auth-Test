import { Paper, styled } from "@mui/material";

export default styled(Paper)(({theme}) => ({
    backgroundColor: `${theme.palette.primary.light}22`,
    boxShadow: 'none',
    height: '100%',
    width: '100%'
}))
