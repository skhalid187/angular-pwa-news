describe('Latest news page test', () => {
    it('Should load title with Latest news string', () => {
        cy.visit("/");
        cy.get("h1")
        .should("have.text","Latest News");
    })

    it('Should display more than zero articles in the list', () => {
        cy.visit("/");
        cy.get('.article-text')
        .should('have.length.greaterThan', 0)
    })
})