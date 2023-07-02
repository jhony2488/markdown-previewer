import React from 'react';
import { marked } from 'marked';

import { useStyles } from './style';

export interface Props {
    value: string;
}

export default function PreviewerMarkdown({ value }: Props) {
    const classes = useStyles();

    marked.use({
        mangle: false,
        headerIds: false
    });

    return (
        <React.Fragment>
            <div className={classes.contentMarkdown} dangerouslySetInnerHTML={{ __html: marked.parse(value) }} />
        </React.Fragment>
    );
}
