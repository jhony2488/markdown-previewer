/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../src/Components';


describe('Header Component Test', () => {
    it('should check the keys and return the value of the corresponding label', async () => {
        const { getByText } = await render(<React.Fragment><Header  /></React.Fragment>);
       
        const header = getByText('Markdown Previewer');

        const paragraphValue = header.textContent;
      
        expect(paragraphValue).toBe('Markdown Previewer');
    });
  });