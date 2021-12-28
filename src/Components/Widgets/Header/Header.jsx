import React from 'react';
import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { HeaderStyles } from "./HeaderStyles";

function Header() {
    const styles = HeaderStyles();
    return (
        <AppBar position="static" className={styles.main}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase
                            className={styles.textInput}
                            placeholder="Search"
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Avatar className={styles.userIcon} />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;