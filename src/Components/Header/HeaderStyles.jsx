import { makeStyles } from "@material-ui/core";

export const HeaderStyles = makeStyles({
    main: {
        backgroundColor: "#FFFFFF",
    },
    textInput: {
        opacity: "0.6",
        padding: "0px 8px",
        fontSize: '0.8rem',
        "&:hover": {
            backgroundColor: "#f2f2f2"
        },
        "& .MuiSvgIcon-root": {
            marginRight: "8px",
        }
    },
    userIcon: {
        marginRight: "10px",
        marginLeft: "10px",
    }
});