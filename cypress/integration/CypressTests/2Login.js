///<refernce types="Cypress"/>

import HomePage from '../../support/PageObjects/HomePage'
import LoginPage from '../../support/PageObjects/LoginPage'

describe('Login in to application',function()
{
     before(function()
     {
         cy.fixture('config').then(function(data)
         {
             this.data=data
         })
     })
     
    it('Enter Email and Passowrd',function()
    {
        const homepage=new HomePage()
        const loginpage=new LoginPage()

        cy.visit(Cypress.env('url'))
        cy.Login()
        
    })
})