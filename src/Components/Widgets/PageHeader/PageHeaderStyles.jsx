import { makeStyles } from "@material-ui/core";

export const PageHeaderStyles = makeStyles(
    theme => ({
        root: {
            backgroundColor: "#fdfdff",
        },
        pageHeader: {
            padding: theme.spacing(4),
            marginBottom: theme.spacing(2),
            display: "flex",
        },
        pageIcon: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(2),
            color: "#3c44b1",
        },
        pageContent: {
            padding: theme.spacing(2),
            "& .MuiTypography-subtitle2": {
                opacity: "0.6",
            }
        }
    })
);