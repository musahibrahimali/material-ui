import { makeStyles } from "@material-ui/core";

export const HeaderStyles = makeStyles(
    theme => ({
        main: {
            backgroundColor: "#FFFFFF",
        },
        textInput: {
            opacity: "0.6",
            padding: `0px ${theme.spacing(1)}px`,
            fontSize: '0.8rem',
            "&:hover": {
                backgroundColor: "#f2f2f2"
            },
            "& .MuiSvgIcon-root": {
                marginRight: theme.spacing(1),
            }
        },
        userIcon: {
            marginRight: theme.spacing(1.5),
            marginLeft: theme.spacing(1.5),
        }
    })
);