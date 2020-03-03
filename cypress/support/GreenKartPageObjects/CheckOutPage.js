class CheckOutPage
{
    getCountryTextFeild()
    {
          return cy.get('#country')
    }

    getSelectTheCountry()
    {
        cy.wait(5000)
        return cy.get('.suggestions > ul > li > a')
    }

    getIagreeCondition()
    {
        return cy.get('input[type="checkbox"]')
    }

    getPurchaseButton()
    {
        return cy.get('input[type="submit"]').should('have.value','Purchase')
    }
}

export default CheckOutPage;