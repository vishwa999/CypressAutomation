///<reference types="Cypress"/>

import RegisterPage from '../../support/PageObjects/RegisterPage'

describe('Register user and validate the features',function()
{
    it('NAvigate to portal and click on Register link',function()
    {

        // cy.writeFile('cypress/fixtures/config.json', 
        // {
            
        //     emails: 'jane@example.com',
        //   })
//cy.visit('https://demo.nopcommerce.com/')
       let r = Math.random().toString(36).substring(7);
         cy.log(r)

        cy.visit('https://demo.nopcommerce.com/')
        // cy.get('.ico-register').click()
        // cy.get('.page-title').find('h1').should('have.text','Register')
        // cy.log('<---------Welcome To Registration Page--------->')
        // cy.get('.male').find('input[type=radio]').should('have.value','M').click()
        // cy.get('#FirstName').type('Vishw')
        // cy.get('#LastName').type('SM')
        // cy.get('select[name="DateOfBirthDay"]').select('7').should('have.value','7')
        // cy.get('select[name="DateOfBirthMonth"]').select('February').should('have.value','2')
        // cy.get('select[name="DateOfBirthYear"]').select('1931').should('have.value','1931')
        // cy.get('#Email').type('offynarre-733@yopmail.com')
        // cy.get('#Company').type('SelfLearning.co')
        // cy.get('#Password').type('vishwa1234')
        // cy.get('#ConfirmPassword').type('vishwa1234')
        // cy.get('#register-button').click()
        // cy.get('.page.registration-result-page').find('.result').should('have.text','Your registration completed')
    })
})