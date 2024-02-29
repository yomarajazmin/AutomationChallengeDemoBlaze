class FormPage {

    fillUserNameField(value){
        cy.get('#name').should('be.visible').type(value)
    }

    fillUserCountryField(value){
        cy.get('#country').should('be.visible').type(value)
    }

    fillUserCityField(value){
        cy.get('#city').should('be.visible').type(value)
    }

    fillUserCardField(value){
        cy.get('#card').should('be.visible').type(value)
    }

    fillUserCardMonthField(value){
        cy.get('#month').should('be.visible').type(value)
    }

    fillUserCardYearField(value){
        cy.get('#year').should('be.visible').type(value)
    }

    clickOnPurchase(){
        cy.get('button').contains('Purchase').click()
    }

    checkSummaryOfPurchase(userNameExpected, cardNumberExpected, totalExpected){
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; 
        const year = currentDate.getFullYear();
        cy.log(`Today's date is ${day}-${month}-${year}`);

        cy.get('div.sweet-alert')
        .should('contains.text', 'Thank you for your purchase')
        .should('contains.text',userNameExpected)
        .should('contains.text',cardNumberExpected)
        .should('contains.text',totalExpected)
        .should('contains.text',`${day}/${month}/${year}`)
    }

    clickOnOkFromSummaryPurchase(){
        cy.get('button').contains('OK').click()
    }
}

export default new FormPage()