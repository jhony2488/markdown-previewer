/* eslint-disable testing-library/await-async-utils */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable spaced-comment */
/// <reference types="cypress" />

describe('Title page verify', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('should verify title of page', () => {
    cy.document().then((doc) => {
      const title = doc.title;
      expect(title).to.include('Markdown Preview');
    });
  });
});
