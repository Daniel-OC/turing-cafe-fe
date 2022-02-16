describe('Form testing', () => {
  it('should reflect the current form values', () => {
    cy.intercept('GET', 'http://localhost:3000/',
    {
      statusCode: 200,
      ok: true,
      body: {reservations: []}
    })
    cy.visit('http://localhost:3000/')
    cy.get('userForm')
    cy.get('.nameInput').contains('')
    cy.get('.nameInput').type('Jen')
    cy.get('.nameInput').contains('Jen')
    cy.get('.dateInput').contains('')
    cy.get('.dateInput').type('04/04')
    cy.get('.dateInput').contains('04/04')
    cy.get('.timeInput').contains('')
    cy.get('.timeInput').type('7:00')
    cy.get('.timeInput').contains('7:00')
    cy.get('.guestsInput').contains('')
    cy.get('.guestsInput').type('6')
    cy.get('.guestsInput').contains('6')
  })

it('should add a new reservation to the page')
  cy.visit('http://localhost:3000/')
  cy.get('.nameInput').type('Jen')
  cy.get('.dateInput').type('04/04')
  cy.get('.timeInput').type('7:00')
  cy.get('.guestsInput').type('6')
  cy.get('btn').click()

  .get('.rez-name')
    .get('p').contains('04/04')
    .get('p').contains('7:00')
    .get('p').contains('Number of Guests: 6')
    .get('button').contains('cancel')

})