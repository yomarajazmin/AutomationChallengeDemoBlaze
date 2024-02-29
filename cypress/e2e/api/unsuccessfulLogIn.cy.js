
describe('Successful log in', () => {

    it('As a user I want to log in so that I can access resources', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/login',
            body: {
                username: Cypress.env('userName'),
                password: Cypress.env('userPass')
            }
        }).then((response) => {
            expect(response.status).not.to.eq(200)
            expect(response.body).to.be.equal('Wrong password.')
        })
    })
})