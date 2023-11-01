
import RegisterPage from "../page/registerPage";

describe('template spec', () => {
    beforeEach(function () {

        cy.visit('/')
    });
    it('passes', () => {
        RegisterPage.typeRegisterButton()
        RegisterPage.typeNombreC('Sandra Milena Quintero Leal')
        RegisterPage.typeNombreU('sami')
        RegisterPage.typePassword('1234')
        RegisterPage.typePasswordConfirm('1234')
        RegisterPage.typeAceptar()
        RegisterPage.elements.confirmDuplicateInput()
    })
})