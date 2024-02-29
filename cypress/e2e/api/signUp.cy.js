
describe('Create new user', () => {

    it('As a new user I want register so that I can log in later', () => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; 
        const year = currentDate.getFullYear();
        cy.log(`Today's date is ${day}-${month}-${year}`);
        Cypress.env('userName',`User${day}${month}${year}`);
        Cypress.env('userPass','1234567890');

        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/signup',
            body: {
                username: Cypress.env('userName'),
                password: Cypress.env('userPass')
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})