import { makeStyles, createMuiTheme } from "@material-ui/core";

/* overiding default theme properties */
export const AppTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: "#3c44b126"
        },
        secondary: {
            main: "#f83245",
            light: "#f8324526",
        },
        background: {
            default: "#f4f5fd",
        }
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: "translateZ(0)",
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: false,
        }
    }
});

/* Styles of the page */
export const AppStyles = makeStyles({
    appMain: {
        paddingLeft: "320px",
        height: "100%",
    }
});
