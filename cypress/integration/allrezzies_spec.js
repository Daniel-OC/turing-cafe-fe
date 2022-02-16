describe('Upon Load', () => {
  it('should have all expected elements upon load', () => {
    cy.intercept('GET', 'http://localhost:3000/',
    {
      statusCode: 200,
      ok: true,
      body: {reservations: [{
        id: 1,
        name: 'Christie',
        date: '12/29',
        time: '7:00',
        number: 12,
      }]}
    })
    cy.visit('http://localhost:3000')
    cy.get('.all-reservations')
      .get('.rez-card')
        .get('.rez-name')
        .get('p').contains('12/29')
        .get('p').contains('7:00')
        .get('p').contains('Number of Guests: 12')
        .get('button').contains('cancel')
  })
})