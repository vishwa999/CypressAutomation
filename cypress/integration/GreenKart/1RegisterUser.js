///<reference types='cypress'/>
import HomePage from '../../support/GreenKart PageObjects/HomePage'
import ProductPage from '../../support/GreenKart PageObjects/ProductPage'
import CartPage from '../../support/GreenKart PageObjects/CartPage'
import CheckOutPage from '../../support/GreenKart PageObjects/CheckOutPage'


describe('My First Cypress TestFrame work Suite',function()
{

    before(function() {  
        // runs once before all tests in the block
        cy.fixture('GreenKartConfig').then(function(data)
        {
           this.data=data
        })
      })


    it('My first test case',function()
    {
        
        const homePage=new HomePage()
        const productPage=new ProductPage()
        const cartPage=new CartPage()
        const checkoutPage= new CheckOutPage()
        Cypress.config('defaultCommandTimeout',8000)

        //cy.visit(Cypress.env('url')+'/angularpractice/')
        cy.visit(Cypress.env('GreenKarturl'))
        
        homePage.getEditBox().type(this.data.names)
        homePage.getGendar().select(this.data.gender)
        homePage.getToWayDataBinding().should('have.value',this.data.names)
        homePage.getEditBox().clear().type('b')
        homePage.getNameRules().should('have.text','Name should be at least 2 characters')
        homePage.getNameFieldAttribute().should('have.attr','minlength','2')
        homePage.getEnterprenuer().should('not.be.checked').and('be.disabled')
        // cy.log('----------Select Shop button-----------')
        // homePage.getShopTab().should('have.text','Shop').click()
        

        // //cy.selectProduct('Blackberry')
       
        // this.data.productName.forEach(function(Products)
        // {
        //     cy.log('--Select this product--->'+Products)
        //     cy.selectProduct(Products)
        //     cy.log('--Selected the product--->'+Products)
        // })

        // var sum=0;
        // productPage.getCheckOutButton().click()
        // cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>
        // {

        //     const actualText=$el.text()

        //     var res=actualText.split(" ")
        //     res=res[1].trim()
        //     sum=Number(sum)+Number(res)
        //     cy.log(sum)

        // }).then(function()
        //     {
        //         cy.log(sum)
        //     }
        // )

        // var totalAmount=0
        // cy.get('h3 strong').each(($total,indes,$list)=>
        // {
        //       const TotalAmount=$total.text()
        //       var ActualTotalAmount=TotalAmount.split(" ")
        //       ActualTotalAmount=ActualTotalAmount[1].trim()
        //       totalAmount=Number(ActualTotalAmount)
        //       cy.log('------------>'+totalAmount) 
        //       expect(totalAmount).to.equal(sum)

        // }).then(function()
        // {
        //     cy.log('------------>'+totalAmount)
        //  })        
               
        // cartPage.getCheckoutButton().click()
        
        // checkoutPage.getCountryTextFeild().type('india')
        // checkoutPage.getSelectTheCountry().click()
        // checkoutPage.getIagreeCondition().check({force:true})
        // checkoutPage.getPurchaseButton().click()
        // cy.get('.alert').should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        // cy.get('div').should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

        // cy.get('.alert').then(function(element)
        // {
        //     const actualText=element.text()
        //     expect(actualText.includes('Success!')).to.be.true
        // })
        
        // checkoutPage.getSelectTheCountry().each(($el,index,$list)=>
        // {
        //     const listOfCountrys=$el.text()
        //     cy.log(listOfCountrys)
        //     if(listOfCountrys.includes('India'))
        //     {
        //         //cy.pause()
        //         $el.click()
        //     }

        // })


        
        
        

           
    })
})
