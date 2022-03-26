/// <reference types="Cypress"/>

describe('Todos', () => {
  it('visit', () => {
    cy.visit('/');
    cy.clearLocalStorage();
  });
});
