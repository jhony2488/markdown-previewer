import { useState, useEffect } from 'react';
import { Paper, Button } from '@material-ui/core';
import { InputTextArea, PreviewerMarkdown } from '../../Components';
import {copyTextValue} from '../../utils/copyTextValue';

import { useStyles } from './style';

export default function FormMarkdownView() {
    const classes = useStyles();
    const [valueInput, setValueInput] = useState<string>('');

    useEffect(() => {
        const valueMarkdownInput:string = localStorage.getItem('@valueMarkdownInput') || '';
        setValueInput(valueMarkdownInput);
    }, []);

    useEffect(() => {
        localStorage.setItem('@valueMarkdownInput', valueInput);
    }, [valueInput]);

    return (
        <>
                <div className={classes.container}>
                    <Paper elevation={3} className={classes.markdownInput}>
                        <InputTextArea onChange={(value) => setValueInput(value)} value={valueInput} id='input-markdown' placeholder='Coloque aqui o codigo markdown' />
                        <Button type='button' id='copy-button' variant='contained' color='primary' onClick={()=>copyTextValue(valueInput)}>Copiar Texto</Button>
                    </Paper>
                    <Paper elevation={3} className={classes.preview}>
                        <PreviewerMarkdown value={valueInput} />
                    </Paper>
                </div>
        </>
    );
}
