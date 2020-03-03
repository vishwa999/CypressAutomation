class LoginPage
{
     loginEmail()
     {
        return cy.get('#Email')
     }

     loginPassword()
     {
         return cy.get('#Password')
     }

     loginButton()
     {
         return cy.get('input[value="Log in"]')
     }
}

export default LoginPage;