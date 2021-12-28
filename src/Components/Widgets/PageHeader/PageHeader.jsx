import React from 'react';
import { Card, Paper, Typography } from '@material-ui/core';
import { PageHeaderStyles } from './PageHeaderStyles';

function PageHeader(props) {

    const { title, subTitle, icon } = props;

    const styles = PageHeaderStyles();

    return (
        <Paper elevation={0} square className={styles.root}>
            <div className={styles.pageHeader}>
                <Card className={styles.pageIcon}>
                    {icon}
                </Card>
                <div className={styles.pageContent}>
                    <Typography
                        variant="h6"
                        component="div"
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        component="div"
                    >
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader;
