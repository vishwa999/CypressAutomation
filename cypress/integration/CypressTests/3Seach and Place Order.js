///<refernce types="Cypress"/>

import HomePage from '../../support/PageObjects/HomePage'
import LoginPage from '../../support/PageObjects/LoginPage'

describe('Search for the product and place order',function()
{
     before(function()
     {
         cy.fixture('config').then(function(data)
         {
             this.data=data
         })
     })
     
    it('search and place order',function()
    {
        const homepage=new HomePage()
        const loginpage=new LoginPage()

        cy.visit(Cypress.env('url'))
        cy.Login()
        
        homepage.searchTextfield().type('HTC').type('{enter}')
        cy.get('.product-grid div .item-box ').find('.details h2').each(($mobile,index,$list)=>
        {
            const mobiles=$mobile.text()

            cy.log(mobiles)
            if(mobiles.includes('HTC One Mini Blue'))
            {
                cy.log(mobiles)
                cy.get('input[value="Add to cart"]').eq(index).click()
                cy.wait(3000)
                
            
            }
        })
        //click on shoping cart link
        cy.get('#topcartlink').find('.cart-label').click()
        
        // // verify we navigated to shopping cart page
        cy.get('.page-title').find('h1').should('have.text','Shopping cart')

        //verify expected product added to cart

        cy.get('.product-name').should('have.text','HTC One Mini Blue')

        
        //click on checkout
        
        cy.get('.terms-of-service').find('#termsofservice').click()
        cy.get('#checkout').click()


    })
})