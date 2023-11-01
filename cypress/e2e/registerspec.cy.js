import { faker } from '@faker-js/faker/locale/en';
import RegisterPage from "../page/registerPage";

describe('template spec', () => {
    beforeEach(function () {

        cy.visit('/')
    });
    it('passes', () => {
        let allname = faker.person.fullName();
        let username = faker.internet.userName();
        let password = faker.internet.password();
        RegisterPage.typeRegisterButton()
        RegisterPage.typeNombreC(allname)
        RegisterPage.typeNombreU(username)
        RegisterPage.typePassword(password)
        RegisterPage.typePasswordConfirm(password)
        RegisterPage.typeAceptar()
        RegisterPage.elements.messageConfirmInput()
    })
})