class HomePage
{
    homeRegisterLink()
    {
        return cy.get('.ico-register')
    }

    homeLoginLink()
    {
        return cy.get('.ico-login')
    }

    homePageMyAccount()
    {
        return cy.contains('My account')
    }

    searchTextfield()
    {
        return cy.get('#small-searchterms')
    }

    menuElectrinics()
    {
       return cy.get('.top-menu notmobile').find('li').should('have.text','Electonics')
    }
}

export default HomePage;