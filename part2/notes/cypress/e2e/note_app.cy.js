describe('Note app', function() {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3001')
    cy.contains('Login').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()
  })
  it('front page can be opened', function() {
    cy.contains('Notes')
  })
  it('user can login',function () {
    cy.contains('Matti Luukkainen logged in')
  })
  it('user can create a new note after a successul login',function () {
    cy.contains('Matti Luukkainen logged in')
    cy.contains('new note').click()
    cy.get('#submit-form').type('a note created by cypress')
    cy.contains('save').click()
    cy.contains('a note created by cypress')
  })
  it('user can logout',function () {
    cy.contains('logout').click()
  })
  it('displays wrong credential if credentials are wrong', function() {
    cy.contains('logout').click()
    cy.contains('Login').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()
  })
})