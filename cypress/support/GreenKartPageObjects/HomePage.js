class HomePage
{
  getEditBox()
  {
    return cy.get('input[name="name"]:nth-child(2)')
  }
  
  getToWayDataBinding()
  {
     return cy.get('input[name="name"]:nth-child(1)')
  }

  getGendar()
  {
      return cy.get('select')
  }
  getNameRules()
  {
      return cy.get('.alert.alert-danger')
  }
  getNameFieldAttribute()
  {
    return cy.get('.form-control.ng-invalid.ng-dirty.ng-touched')
  }

  getEnterprenuer()
  {
    return cy.get('input[value="option3"]')
  }

  getShopTab()
  {
      return cy.get(':nth-child(2) > .nav-link')
  }
}


export default HomePage;
