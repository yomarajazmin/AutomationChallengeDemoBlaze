
class CartPage {

    // checkAllItemsAreInCart(...items){
    //     found=true, itemFound=false;
    //     cy.get('#tbodyid').should('be.visible');
    //     items.forEach(function (entry){
    //         cy.get('#tbodyid').get('td').each(($entry, item, index) => {
    //             item.get('td').then(col => {
    //                 const title = col[1].attr('textContent')
    //                 const price = col[2].attr('textContent')

    //                 if($entry.name.should('contain.text',title))
    //                     if($entry.price.should('contain.text',price))
    //                         itemFound=true
    //             })    
    //         })
    //         found = found && itemFound
    //         expect($found).to.be.true
    //         itemFound = false
    //     })
        
    // }

    checkAllItemsAreInCart(itemName, itemPrice){
        cy.get('#tbodyid > tr').should('contain.text',itemName)
        cy.get('#tbodyid > tr').should('contain.text',itemPrice)
    }

    checkCartTotal(expectedPrice){
        cy.get('#totalp').should('contain.text', expectedPrice)
    }

    clickOnPlaceOrder(){
        cy.get('button').contains('Place Order').click()
    }
}

export default new CartPage()