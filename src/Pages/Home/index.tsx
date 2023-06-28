import React, { useState } from 'react';
import { Container, Paper } from '@material-ui/core';
import { InputTextArea,PreviewerMarkdown } from '../../Components';

import { useStyles } from './style';

export default function Home() {
    const classes = useStyles();
    const [valueInput, setValueInput] = useState('');

    return (
        <>
            <Container className={classes.main}>
                <div className={classes.mainWrapper}>
                    <Paper elevation={3} className={classes.markdownInput}>
                        <InputTextArea onChange={(value)=>setValueInput(value)} value={valueInput} />
                    </Paper>
                    <Paper elevation={3} className={classes.preview}>
                        <PreviewerMarkdown value={valueInput} />
                    </Paper>
                </div>
            </Container>
        </>
    );
}
