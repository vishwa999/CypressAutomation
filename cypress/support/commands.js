// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import HomePage from '../support/PageObjects/HomePage'
import LoginPage from '../support/PageObjects/LoginPage'

const homepage=new HomePage()
const loginpage=new LoginPage()


Cypress.Commands.add('Login',function()
{
    homepage.homeLoginLink().click()
    loginpage.loginEmail().click().type(this.data.UserEmailId)
    loginpage.loginPassword().type(this.data.Password)
    loginpage.loginButton().click()
    homepage.homePageMyAccount()
})


Cypress.Commands.add("selectProduct",(productName) => 
{
    cy.get('.card-title').each(($el, index)=>{

        const ProName=$el.text()
        //cy.log(ProName)
        if(ProName.includes(productName))
        {
            cy.get('.btn.btn-info').eq(index).click()
        }
    })
})
