describe('Note app', function() {
  beforeEach(function () {
    cy.visit('http://localhost:3001')
  })
  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('this is one note')
  })
  it('user can login',function () {
    cy.contains('Login').click()
    cy.get('#username').type('testUser')
    cy.get('#password').type('123456789')
    cy.get('#login-button').click()
  })
  it('user can logout',function () {
    cy.contains('Login').click()
    cy.get('#username').type('testUser')
    cy.get('#password').type('123456789')
    cy.get('#login-button').click()
    cy.contains('logout').click()
  })
})