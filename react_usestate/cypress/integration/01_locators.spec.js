/// <reference types="Cypress"/>

describe('Todos', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('제목 이름이 투두투두가 존재하나요?', () => {
    cy.contains('투두투두').should('be.visible').and('have.css', 'color', 'rgb(116, 192, 252)');
  });
});
