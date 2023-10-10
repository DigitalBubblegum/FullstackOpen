describe('Note app', function() {
  beforeEach(function () {
    cy.visit('http://localhost:3001')
    cy.contains('Login').click()
    cy.get('#username').type('testUser')
    cy.get('#password').type('123456789')
    cy.get('#login-button').click()
  })
  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('this is one note')
  })
  it('user can login',function () {
    cy.contains('test logged in')
  })
  it('user can create a new note after a successul login',function () {
    cy.contains('new note').click()
  })
  it('user can logout',function () {
    cy.contains('logout').click()
  })
})