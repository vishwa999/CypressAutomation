///<reference types="Cypress"/>

class RegisterPage
{
    registerPageHeader()
    {
        return cy.get('.page-title').find('h1').should('have.text','Register')
        
    }

    registerGender()
    {
        return cy.get('.male').find('input[type=radio]').should('have.value','M')
        
    }

    registerFirstName()
    {
        return cy.get('#FirstName')
        
    }

    registerLastName()
    {
        return cy.get('#LastName')
        
    }

    registerSelectDayOfBirth()
    {
        return cy.get('select[name="DateOfBirthDay"]')
        
    }

    registerSelectDayOfMonth()
    {
        return cy.get('select[name="DateOfBirthMonth"]')
        
    }

    registerSelectDayOfYear()
    {
        return cy.get('select[name="DateOfBirthYear"]')
        
    }

    registerUSerEMail()
    {
        return cy.get('#Email')
        
    }

    registerCompanyName()
    {
        return cy.get('#Company')
       
    }

    registerPassword()
    {
        return cy.get('#Password')
        
    }

    registerConfirmPassword()
    {
        return cy.get('#ConfirmPassword')
       
    }

    registerRegisterButton()
    {
        return cy.get('#register-button')
        
    }

    registerSuccessMessage()
    {
        return cy.get('.page.registration-result-page')
        
    }  
}
export default RegisterPage;

