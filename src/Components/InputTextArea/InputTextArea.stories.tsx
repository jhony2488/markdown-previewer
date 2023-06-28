import { Meta, StoryObj } from '@storybook/react';
import InputTextArea, { Props } from './index';

export default {
    title: 'Components/Inputs',
    component: InputTextArea,
    args: {
        onChange: (value:string) => console.log(value), onSubmit: () => null, value: ''
    },
} as Meta<Props>;

export const InputTextAreaWithoutValue: StoryObj<Props> = {

};

export const InputTextAreaWithValue: StoryObj<Props> = {
    args: {
        value: 'jhony'
    },
};