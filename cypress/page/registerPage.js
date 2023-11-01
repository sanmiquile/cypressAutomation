class RegisterPage {

    elements = {
        buttonRegisterInput:() =>cy.get('span.ui-button-text.ui-c:contains("Registrarse")'),
        nameAllInput:()=>  cy.get('[name="registro:nombre"]'),
        usernameInput:() => cy.get('[id="registro:nombreUsuario"]'),
        passwordInput: () => cy.get('[id="registro:clave"]'),
        confirmPasswordInput:()=> cy.get('[id="registro:verificacionClave"]'),
        buttonAceptarInput:() => cy.get('span.ui-button-text.ui-c:contains("Aceptar")'),
        messageConfirmInput:()=> cy.get('div.ui-growl-message span.ui-growl-title').should('have.text', 'Operación completada'),
        confirmDuplicateInput:()=>    cy.get('div.ui-growl-message span.ui-growl-title').should('have.text', 'Existing registration')

    }
    typeRegisterButton(){

        this.elements.buttonRegisterInput().click()
    }
    typeNombreC(nombre){

        this.elements.nameAllInput().type(nombre)
    }
    typeNombreU(userName){

        this.elements.usernameInput().type(userName)
    }
    typePassword(password){

        this.elements.passwordInput().type(password)
    }
    typePasswordConfirm(password){
        this.elements.confirmPasswordInput().type(password)
    }
    typeAceptar(){
        this.elements.buttonAceptarInput().click()
    }
}
module.exports= new  RegisterPage()