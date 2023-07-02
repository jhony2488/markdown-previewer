describe('CopyTextInInput', () => {
  beforeEach(() => {
    cy.visit('/home');
  });
  it('should click a button and copy get', async () => {
    cy.get('#input-markdown').type('## jhony').should('have.value', '## jhony');

    cy.get('#copy-button').click();

    cy.window().then((window) => {
      cy.stub(window.navigator.clipboard, 'readText').resolves('## jhony');
      cy.get('#input-markdown').invoke('text').should('eq', '## jhony');
    });
  });
});
