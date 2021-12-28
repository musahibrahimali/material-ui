import React from 'react';
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {NotificationStyles} from "./NotificationStyles";

const Notification = (props) => {

    const {notify, setNotify} = props;
    const styles = NotificationStyles();

    // handle close
    const handleClose = (event, reason) => {
        // comment out the if clause to allow click away (close on clicking the window)
        if(reason === 'clickaway'){
            return;
        }
        setNotify({
            ...notify,
            isOpen: false,
        });
    }

    return (
        <Snackbar
            className={styles.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{vertical: "top", horizontal: "right"}}
            onClose={handleClose}
        >
            <Alert
                severity={notify.type}
                onClose={handleClose}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;