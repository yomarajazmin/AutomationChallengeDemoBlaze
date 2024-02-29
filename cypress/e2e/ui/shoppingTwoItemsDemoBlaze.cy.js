import MainPage from "../../pages/MainPage"
import ItemPage from "../../pages/ItemPage"
import CartPage from "../../pages/CartPage"
import FormPage from "../../pages/FormPage"

describe('Shopping two items as a new user', () => {

  it('As a new user I want to select two items so that I can buy them', () => {
    cy.visit('https://www.demoblaze.com/index.html#')
    
    cy.log('When I select the Laptops category')
    MainPage.clickOnCategory('Laptops')
    cy.log('And I click on a "MacBook air" item')
    MainPage.clickOnItem('MacBook air')
    cy.log('Then I add the selected product to the shopping card in the item page')
    let firstItemName = 'MacBook air'
    let firstItemPrice = 700
    ItemPage.clickOnAddToCart()
    cy.log('And I click on OK in the popup of the item page')

    cy.log('And I go to Home in main page')
    MainPage.clickOnTopMenuOption('Home')
    cy.log('And I select the Laptops category')
    MainPage.clickOnCategory('Laptops')
    cy.log('When I click on a "Dell i7 8gb" item')
    MainPage.clickOnItem('Dell i7 8gb')
    cy.log('Then I add the selected product to the shopping card in the item page')
    let secondItemName = 'Dell i7 8gb'
    let secondItemPrice = 700
    ItemPage.clickOnAddToCart()
    cy.log('And I click on OK in the popup of the item page')

    cy.log('When I go to Cart in main page')
    MainPage.clickOnTopMenuOption('Cart')
    cy.log('Then I check all items added are listed in shopping card view')
    CartPage.checkAllItemsAreInCart(firstItemName, firstItemPrice)
    CartPage.checkAllItemsAreInCart(secondItemName, secondItemPrice)
    cy.log('Then I check total is the sum of the prices in shopping card view')
    let totalAmount = Number(firstItemPrice) + Number(secondItemPrice)
    CartPage.checkCartTotal(totalAmount)
    cy.log('And I click on "Place Order" from shopping card page')
    CartPage.clickOnPlaceOrder()

    cy.log('And I write test user in name field of shopping form page')
    FormPage.fillUserNameField('test user')
    cy.log('And I write country in country field of shopping form page')
    FormPage.fillUserCountryField('country')
    cy.log('And I write city in city field of shopping form page')
    FormPage.fillUserCityField('city')
    cy.log('And I write 4411111111 in credit card number field of shopping form page')
    FormPage.fillUserCardField('4411111111')
    cy.log('And I write 12 in credit card month field of shopping form page')
    FormPage.fillUserCardMonthField('12')
    cy.log('And I write 26 in credit card year field of shopping form page')
    FormPage.fillUserCardYearField('26')
    cy.log('When I click on "Purchase" of shopping form page')
    FormPage.clickOnPurchase()
    //Currently failing because date of purchase is not the current date
    cy.log('Then I check the summary of the purchase in shopping form page')
    FormPage.checkSummaryOfPurchase('test user', '4411111111', totalAmount)
    cy.log('And I click on OK to close the summary of the purchase in shopping form page')
    FormPage.clickOnOkFromSummaryPurchase()
  })
})