class ProductPage
{

    getProductName()
    {
        return cy.get('.card-title')
    }

    getAddButton()
    {
        return cy.get('.btn.btn-info')
    }

    getCheckOutButton()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }

}

export default ProductPage;