class ItemPage {

    clickOnItem(itemName){
        cy.get('#tbodyid').should('contain.text', itemName)
        cy.get('#tbodyid').contains(itemName).click()
    }

    clickOnAddToCart(){
        // const itemName = ''
        // const itemPrice = ''
        cy.get('.btn-success').should('contain.text','Add to cart').click()
        // cy.get('.name').then(($name) => {
        //     itemName = $name.attr('textContent');
        // })
        // cy.get('.price-container').then(($price) => {
        //     itemPrice = $price.attr('textContent');
        // })
        // var newItem = new Item(itemName, itemPrice)
        // return newItem
    }
}

export default new ItemPage()