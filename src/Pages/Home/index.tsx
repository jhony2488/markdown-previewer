import React, { useState, useEffect } from 'react';
import { Container, Paper, Button } from '@material-ui/core';
import { InputTextArea, PreviewerMarkdown } from '../../Components';
import {copyTextValue} from '../../utils/copyTextValue'

import { useStyles } from './style';

export default function Home() {
    const classes = useStyles();
    const [valueInput, setValueInput] = useState<string>('');

    useEffect(() => {
        const valueMarkdownInput:string = localStorage.getItem('@valueMarkdownInput') || '';
        setValueInput(valueMarkdownInput);
    }, [])

    useEffect(() => {
        localStorage.setItem('@valueMarkdownInput', valueInput)
    }, [valueInput])


    return (
        <>
            <Container className={classes.main}>
                <div className={classes.mainWrapper}>
                    <Paper elevation={3} className={classes.markdownInput}>
                        <InputTextArea onChange={(value) => setValueInput(value)} value={valueInput} />
                        <Button type='button' variant='contained' color='primary' onClick={()=>copyTextValue(valueInput)}>Copiar Texto</Button>
                    </Paper>
                    <Paper elevation={3} className={classes.preview}>
                        <PreviewerMarkdown value={valueInput} />
                    </Paper>
                </div>
            </Container>
        </>
    );
}
