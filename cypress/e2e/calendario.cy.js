import Chance from 'chance';
const chance = new Chance();

describe('Workflow do Calendário', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/calendario');
  });

  it('should add a new event and view its details', () => {
    // Generate random event data
    const eventTitle = chance.sentence({ words: 3 });
    const eventDate = chance.date({ year: chance.integer({ min: 2023, max: 2025 }) });
    const formattedEventDate = eventDate.toISOString().slice(0, 10); // YYYY-MM-DD
    const eventLocal = chance.address();

    // Open the "Novo evento" modal
    cy.contains('Novo evento').click();

    // Fill the event details in the modal
    cy.get('#titulo').type(eventTitle);
    cy.get('#data').type(formattedEventDate);
    cy.get('#local').type(eventLocal);

    // Save the new event
    cy.contains('Salvar').click();

    // Navigate to the correct month and year if necessary
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const eventMonth = eventDate.getMonth();
    const eventYear = eventDate.getFullYear();

    if (eventYear > currentYear) {
      cy.get('button:contains("Próximo")').click(); // Navigate to next year
    } else if (eventYear < currentYear) {
      cy.get('button:contains("Anterior")').click(); // Navigate to previous year
    }

    if (eventMonth > currentMonth) {
      for (let i = currentMonth; i < eventMonth; i++) {
        cy.get('button:contains("Próximo")').click(); // Navigate to next month
      }
    } else if (eventMonth < currentMonth) {
      for (let i = currentMonth; i > eventMonth; i--) {
        cy.get('button:contains("Anterior")').click(); // Navigate to previous month
      }
    }

    // Find the event on the calendar and click it
    cy.get('td')
      .contains(eventDate.getDate())
      .parent('td') // Get the parent <td> element
      .find('.evento-wrapper:contains("' + eventTitle + '")') // Find the event wrapper
      .click();

    // Assert that the event details are displayed in the modal
    cy.get('h4').should('contain', eventTitle);
    cy.get('.info').should('contain', formattedEventDate);
    cy.get('.info').should('contain', eventLocal);
  });
});