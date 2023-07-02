import React from 'react';
import {
    AppBar,
    Container,
    Typography
} from '@material-ui/core';
import { useStyles } from './style';

export default function Header() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar className={classes.appBar} position="fixed">
                <Container className={classes.container}>
                    <Typography className={classes.title}>
                        Markdown Previewer
                    </Typography>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}
