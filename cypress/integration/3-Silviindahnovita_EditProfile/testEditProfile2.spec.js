describe('Edit Profile Scenario - 1941720007 / Ferdy Febriyanto', () => {
    beforeEach(() => {
        cy.visit('http://lms.polinema.ac.id/login/index.php')
    })
    it('Edit Profile Berhasil', () => {

        cy.get('#username')
            .type('1941720007')
            .should('have.value', '1941720007')
        cy.get('#password')
            .type('1941720007', { sensitive: true })
            .should('have.value', '1941720007')
        cy.get('#loginbtn').click()

        cy.url().should('include', '/my/')
        cy.contains('Profile').children('i').should('have.class', 'fa-user').click({ force: true })

        cy.visit('http://lms.polinema.ac.id/user/edit.php?id=14887&course=1')

        cy.get('#id_firstname')
            .clear()
            .type('FERDY FEBRIYANTO')
            .should('have.value', 'FERDY FEBRIYANTO')
            .next()
        cy.get('#id_lastname')
            .clear()
            .type('1941720007')
            .should('have.value', '1941720007')
            .next()
        cy.get('#id_email')
            .clear()
            .type('1941720007@lms.jti.polinema.ac.id')
            .should('have.value', '1941720007@lms.jti.polinema.ac.id')
            .next()
        cy.get('#id_city')
            .clear()
            .type('1234567')
            .should('have.value', 'Malang')
            .next()
        cy.get('#id_submitbutton')
            .click()

    })
})