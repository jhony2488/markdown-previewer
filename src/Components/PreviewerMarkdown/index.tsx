import React, { useState } from 'react';
import { marked } from 'marked';

import { useStyles } from './style';

export interface Props {
    value: string;
}

export default function PreviewerMarkdown({value}: Props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.contentMarkdown} dangerouslySetInnerHTML={{ __html: marked.parse(value) }} />
        </>
    );
}
