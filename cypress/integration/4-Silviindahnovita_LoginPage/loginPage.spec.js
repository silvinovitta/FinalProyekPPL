/// <reference types="cypress" />

describe('Login Scenario - 1941720173 / Sesha Dwi Lestari', () => {

    describe('Login Page', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Invalid Username & Valid Password', () => { 
            cy.get('.login > a').click()
            cy.get('#username').type('user')
            cy.get('#password').type('#')
            cy.get('#loginbtn').click().should('be.visible')
        })

        it('Valid Username & Invalid Password', () => { 
            cy.get('.login > a').click()
            cy.get('#username').type('#')
            cy.get('#password').type('password')
            cy.get('#loginbtn').click().should('be.visible')
        })

        it('Test Button Log In As A Guest', () => { 
            cy.get('.login > a').click()
            cy.get('#guestlogin > .btn').click().should('be.visible')
        })

        it('Valid Username & Valid Password', () => { 
            cy.get('.login > a').click()
            cy.get('#username').type('#')
            cy.get('#password').type('#')
            cy.get('#loginbtn').click().should('be.visible')
         })

    })

    describe('Component Test', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Click Polinema Icon', () => { 
            cy.get('.login > a').click()
            cy.get('#username').type('#')
            cy.get('#password').type('#')
            cy.get('#loginbtn').click()
            cy.get('.logo > img').click().should('be.visible')        
        })

        it('Click Courses Item', () => {
            cy.get('.login > a').click()
            cy.get('#username').type('#')
            cy.get('#password').type('#')
            cy.get('#loginbtn').click()
            cy.get('div.list-group-item > .m-l-0').click().should('be.visible')
        })

    })

})