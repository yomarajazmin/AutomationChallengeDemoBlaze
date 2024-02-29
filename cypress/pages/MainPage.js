class MainPage {

    open() {
        cy.visit('https://www.demoblaze.com/');
    }

    clickOnCategory(category) {
        switch(category){
            case 'Phones':
                cy.get('a').contains('Phones').click();
                break;
            case 'Laptops':
                cy.get('a').contains('Laptops').click();
                break;
            case 'Monitors':
                cy.get('a').contains('Monitors').click();
                break;
        }
    }

    clickOnItem(itemName){
        cy.get('#tbodyid').get('a').should('contain.text', itemName)
        cy.get('#tbodyid').get('a').contains(itemName).click()
    }

    clickOnTopMenuOption(option) {
        switch(option){
            case 'Home':
                cy.get('a').contains('Home').click();
                break;
            case 'Contact':
                cy.get('a').contains('Contact').click();
                break;
            case 'About us':
                cy.get('a').contains('About us').click();
                break;
            case 'Cart':
                cy.get('a').contains('Cart').click();
                break;
            case 'Log in':
                cy.get('a').contains('Log in').click();
                break;
            case 'Sign up':
                cy.get('a').contains('Sign up').click();
                break;
        }
    }
}

export default new MainPage()