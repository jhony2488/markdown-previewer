import React from 'react';
import {
    FormControl,
    TextareaAutosize,
} from '@material-ui/core';
import { inputStyles } from './style';

export interface Props {
    onChange: (value: string) => void;
    value: string;
    styleCustom?: string | undefined;
    id?: string;
    placeholder?: string;
}

export default function InputTextArea({ onChange, value, styleCustom, ...rest }: Props) {
    const { containerInput, input } = inputStyles();

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        onChange(event.currentTarget.value);
    };

    return (
        <FormControl className={containerInput}>
            <TextareaAutosize
                className={input}
                color="primary"
                onChange={(event) => handleChange(event)}
                value={value}
                {...rest}
            />
        </FormControl>
    );
};
