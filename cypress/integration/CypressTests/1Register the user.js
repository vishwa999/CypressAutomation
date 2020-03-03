///<reference types='Cypress'/>

import RegisterPage from '../../support/PageObjects/RegisterPage'
import HomePage from '../../support/PageObjects/HomePage'



describe('Register user and validate the features',function()
{
    before(function()
    {
        // get configuration values 
        cy.fixture('config').then(function(data)
        {
            this.data=data
        })
    })
    
    it('Navigate to portal and Register the user',function()
    {

        const registerPage=new RegisterPage()
        const homepage= new HomePage()

        cy.visit(Cypress.env('url'))
        //cy.visit('https://demo.nopcommerce.com/')
        
        
        homepage.homeRegisterLink().click()
        
        registerPage.registerPageHeader()
        cy.log('<---------Welcome To Registration Page--------->')
        registerPage.registerGender().should('have.value','M').click()
        
        registerPage.registerFirstName().type('Vishwanath')
            
        registerPage.registerLastName().type('Maralappanavar')
        
        registerPage.registerSelectDayOfBirth().select(this.data.DateOfBirthDay).should('have.value',this.data.DateOfBirthDay)
        
        registerPage.registerSelectDayOfMonth().select(this.data.DateOfBirthMonth).should('have.value','2')
        
        registerPage.registerSelectDayOfYear().select(this.data.DateOfBirthYear).should('have.value',this.data.DateOfBirthYear)
        //Generate random string
        let randomEmailId = Math.random().toString(36).substring(7);
        const EmailId=randomEmailId+"@"+"yopmail.com";
      
        registerPage.registerUSerEMail().type(EmailId)
        
        registerPage.registerCompanyName().type('SelfLearning.co')
        
        registerPage.registerPassword().type(this.data.Password)
        
        registerPage.registerConfirmPassword().type(this.data.Password)
        
        registerPage.registerRegisterButton().click()
        
        registerPage.registerSuccessMessage()

        cy.log('<--------Successfully Registered the User------------>')
    })
})