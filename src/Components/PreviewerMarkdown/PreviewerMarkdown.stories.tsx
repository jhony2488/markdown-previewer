import { Meta, StoryObj } from '@storybook/react';
import PreviewerMarkdown, { Props } from './index';
import {previwer} from '../../utils/mockedValues';

export default {
    title: 'Components/Previewe/Markdown',
    component: PreviewerMarkdown,
    args: {
        value: previwer
    },
} as Meta<Props>;

export const PreviewerMarkdownWithValue: StoryObj<Props> = {

};