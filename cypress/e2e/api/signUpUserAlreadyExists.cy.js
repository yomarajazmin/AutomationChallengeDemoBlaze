describe('Create a user that already exist', () => {

    before(() => {
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

    it('As a user I want register for a second time so that I can see the response message obtained', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.demoblaze.com/signup',
            body: {
                username: Cypress.env('userName'),
                password: Cypress.env('userPass')
            }
        }).then((response) => {
            expect(response.status).not.to.eq(200)
            expect(response.body).to.be.equal('This user already exist.')
        })
    })
})