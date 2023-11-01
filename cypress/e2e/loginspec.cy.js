import loginPage from "../page/loginPage";
import homePage from "../page/homePage";

describe('template spec', () => {
  beforeEach(function () {

    cy.visit('/')
  });

  it('Login en la pagina sms',() =>{
    loginPage.typeUsername('sami')
    loginPage.typeClave('1234')
    loginPage.typeButton()
    homePage.elements.buttonSalir()

  })

})