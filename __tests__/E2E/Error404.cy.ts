/* eslint-disable testing-library/await-async-utils */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable spaced-comment */
/// <reference types="cypress" />

describe('Title page verify', () => {
  beforeEach(() => {
    cy.visit('/jhony');
  });

  it('should redirection page of page 404 error', () => {
    cy.get('h1')
      .invoke('text')
      .should('eq', 'Não encontramos a página que você pesquisou, mas você pode voltar ao início');
  });

  it('should direct the user to the home page after clicking the 404 page button', () => {
    // Verifica se a URL inicial é '/home'
    cy.url().should('include', '/jhony');

    // Clique no botão que leva a outra página
    cy.get('button').click();

    // Verifica se a URL foi alterada para outra página
    cy.url().should('include', '/home');
  });
});
