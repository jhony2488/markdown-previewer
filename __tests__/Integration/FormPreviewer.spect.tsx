/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createRoot } from 'react-dom';
import { FormMarkdownView } from '../../src/Components';


describe('Header Component Test', () => {
    it('should check the keys and return the value of the corresponding label', async () => {
        const { getByText, getByPlaceholderText } = await render(<React.Fragment><FormMarkdownView /></React.Fragment>);

        const input = getByPlaceholderText('Coloque aqui o codigo markdown');

        fireEvent.change(input, { target: { value: '## João' } });

        const previewerMarkdown = getByText((content, element) => {
            // Verifica se o texto está contido no elemento <p>
            if (element?.tagName.toLowerCase() === 'h2' && content.includes('João')) {
                return true;
            }
            // Retorna false caso contrário
            return false;
        });
        expect(previewerMarkdown.textContent).toBe('João');
    });
});