import { faker } from '@faker-js/faker/locale/en';

describe('template spec', () => {
  beforeEach(function () {

    cy.visit('/')
  });
  it('passes', () => {
    let username = faker.internet.userName();
    let password = faker.internet.password();
    cy.get('[name="nombreUsuario"]').type(username);
    cy.get('#clave').type(password);
    cy.get('#j_idt74').click()
    cy.get('div#content span:contains("No tiene permiso para acceder a este recurso")').should('exist');
  })
})