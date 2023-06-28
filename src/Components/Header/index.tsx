import React, { useEffect } from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Container,
    Typography
} from '@material-ui/core';
import { useStyles } from './style';

export default function Header() {

    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBar} position="fixed">
                <Container className={classes.container}>
                    <Typography className={classes.title}>
                        Markdown Previewer
                    </Typography>
                </Container>
            </AppBar>
        </>
    );
}
