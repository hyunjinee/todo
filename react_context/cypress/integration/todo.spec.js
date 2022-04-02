/// <reference types="Cypress"/>

describe('Todos', () => {
  before(() => {
    cy.visit('/');
  });

  it('제목 이름이 투두투두가 존재하나요?', () => {
    cy.contains('투두투두').should('be.visible').and('have.css', 'color', 'rgb(116, 192, 252)');
  });

  it('다크모드 토클', () => {
    cy.get('body').should('not.have.class', 'dark-mode');
    cy.get('#theme-btn').click();
    cy.get('body').should('have.class', 'dark-mode');
    cy.get('#theme-btn').click();
    cy.get('body').should('not.have.class', 'dark-mode');
  });

  it('🔥 이 존재하나요?', () => {
    cy.contains('🔥').should('be.visible');
  });

  it('할 일을 입력하고 추가, 토글, 삭제할 수 있다.', () => {
    cy.get('input').type('잠 자기');
    cy.get('button').click();
    cy.get('.TodoListItem').contains('잠 자기').should('be.visible');
    cy.get('.checkbox').click();
    cy.get('.checkbox').click();
    cy.get('.remove').click();
    cy.get('.TodoListItem').should('not.exist');
  });

  it('할 일을 여러개 추가하고 여러개 삭제할 수 있다.', () => {
    cy.get('input').type('할 일 1');
    cy.get('button').click();
    cy.get('input').type('할 일 2');
    cy.get('button').click();
    cy.get('input').type('할 일 3');
    cy.get('button').click();
    cy.get('.TodoList').children().should('have.length', 3);
    cy.get('.remove').first().click();
    cy.get('.remove').first().click();
    cy.get('.remove').first().click();
  });

  it('10000개의 todo를 렌더링', () => {
    cy.get('.fire').click();
  });

  it('mobile mode', () => {
    cy.viewport('iphone-xr');
  });
});
