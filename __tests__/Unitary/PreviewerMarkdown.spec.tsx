/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { PreviewerMarkdown } from '../../src/Components';


describe('Previewer Markdown Component Test', () => {
    it('should check the keys and return the value of the corresponding label', async () => {
        const { getByText } = await render(<React.Fragment><PreviewerMarkdown value='## jhony'  /></React.Fragment>);

        const previewerMarkdown = getByText((content, element) => {
            // Verifica se o texto está contido no elemento <p>
            if (element?.tagName.toLowerCase() === 'h2' && content.includes('jhony')) {
              return true;
            }
            // Retorna false caso contrário
            return false;
          });

          const valueTitle = previewerMarkdown.textContent;
      
        expect(valueTitle).toBe('jhony');
    });
  });