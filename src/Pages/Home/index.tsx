import React from 'react';
import { Container} from '@material-ui/core';
import { FormMarkdownView } from '../../Components';

import { useStyles } from './style';

export default function Home() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.main}>
                <FormMarkdownView />
            </Container>
        </>
    );
}
