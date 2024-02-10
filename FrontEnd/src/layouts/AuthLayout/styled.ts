import { styled } from "@mui/material";

export const StyledFormContainer = styled('div')(() => ({
    display: "flex",
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
}))

export const StyledAuthForm = styled('div')(({theme}) => ({
    width: 400,
    minHeight: 250,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(6),
    backgroundColor: theme.palette.common.white,
    textAlign: 'center',
}))