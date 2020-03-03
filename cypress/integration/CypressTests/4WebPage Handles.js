/// <reference types='cypress'/>

describe('Handle all common functionalities found in WebSite',function()
{
    it('Select radio buttons',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // select Radio button
        cy.get('input[value="radio1"]').click().should('be.checked')
    })

    it('Select Suggession location',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('#ui-id-1').find('.ui-menu-item').each(($el,index,$list)=>
        {
            const suggestions=$el.text()

            if(suggestions=='India')
            {
                
                $el.find('div').click()
            }
        })

    })

    it('select drop down options',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('Option3').should('have.value','option3')
    })

    it('select Checkbox options',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption2').click().should('be.checked')
    })


    //---------------------Yet to do it---------------
    it('select new window and do some operations',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').click()
         
    })


    it('select new window and do some operations',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.log('--Invoke the new tab in the existing window------')
        cy.contains('Courses').click()
        cy.go('back')
         
    })


    it('Handling Alert and confirmation pop-ups',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#name').type('Vishwanath')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equals('Hello Vishwanath, share this practice page and share your knowledge')
        })

        cy.get('#name').type('Vishwanath')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(conStr)=>
        {
            expect(conStr).to.equals('Hello Vishwanath, Are you sure you want to confirm?')
        })
    })

    it('Verify Hide and show',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        
    })

    // Featching the data from Tables and validating the price
    it('Verify the price of (Performance + Load) course from the TABLE',function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('tr td:nth-child(2)').each(($Course,index,$list)=>
    {
        const CourseText=$Course.text()
        if(CourseText.includes('Performance + Load'))
        {
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                 const prices=price.text()
                 expect(prices).to.equal('25')
            })
        }
    })
    
   })

    


})