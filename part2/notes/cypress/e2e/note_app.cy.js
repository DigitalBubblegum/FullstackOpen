describe('Note app', function() {
  beforeEach(function () {
    cy.visit('http://localhost:3001')
  })
  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('this is one note')
  })
  it('login form can be opened',function () {
    cy.contains('login').click()
  })
  it('user can login',function () {
    cy.get('input:first').type('testUser')
    cy.get('input:last').type('123456789')
    cy.contains('login').click()
  })
  it('user can logout',function () {
    cy.get('input:first').type('testUser')
    cy.get('input:last').type('123456789')
    cy.contains('login').click()
    cy.contains('logout').click()
  })
})